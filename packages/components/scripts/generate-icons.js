/* Generate inline React SVG components and a stable built-in registry. */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../src/Icon');
const sourceDir = path.join(root, 'icons');
const outputDir = path.join(root, 'generated');
const registryPath = path.join(root, 'registry.ts');
const excluded = new Set([
  'ic_layout.svg',
  'ic_admin.svg',
  'ic_language.svg',
  'icon_info.svg',
  'icon_question.svg',
  'icon_success.svg',
  'icon_failure.svg',
  'icon_tip.svg',
]);

// ---- helpers ----

const toName = (file) => {
  const base = path.basename(file, '.svg').toLowerCase();
  return base
    .replace(/\(1\)/g, '-alt')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

const toComponentName = (name) =>
  name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const extractConst = (source, name) => {
  const start = source.indexOf(`export const ${name}`);
  if (start === -1) return '';
  let depth = 0;
  let inString = false;
  let prev = '';
  for (let i = start; i < source.length; i++) {
    const ch = source[i];
    if ((ch === '"' || ch === "'" || ch === '`') && prev !== '\\') {
      inString = !inString;
    }
    prev = ch;
    if (inString) continue;
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) return source.slice(start, i + 2); // include };
    }
  }
  return '';
};

// ---- preserve hand-maintained content ----

let preservedIconMap = '';
let preservedSpecialIcons = '';
if (fs.existsSync(registryPath)) {
  const oldContent = fs.readFileSync(registryPath, 'utf8');
  preservedIconMap = extractConst(oldContent, 'iconMap');
  preservedSpecialIcons = extractConst(oldContent, 'specialIcons');
}

// ---- generate component files ----

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const entries = fs
  .readdirSync(sourceDir)
  .filter((file) => file.endsWith('.svg'))
  .sort()
  .map((file, index, files) => {
    const sourceName = toName(file);
    const baseComponent = toComponentName(sourceName);
    const previous = files
      .slice(0, index)
      .filter(
        (candidate) =>
          toComponentName(toName(candidate)).toLowerCase() ===
          baseComponent.toLowerCase(),
      );
    const component = previous.length
      ? `${baseComponent}Alt${previous.length}`
      : baseComponent;
    let source = fs.readFileSync(path.join(sourceDir, file), 'utf8');
    // Strip Windows \r to save bytes in __html
    source = source.replace(/\r/g, '');
    const match = source.match(/<svg\s+([^>]*)>([\s\S]*)<\/svg>/i);
    if (!match) throw new Error(`Invalid SVG: ${file}`);

    const attrs = match[1]
      .replace(/\s*(width|height)="[^"]*"/gi, '')
      .replace(/\s*xmlns="[^"]*"/gi, '')
      .trim();
    const inner = excluded.has(file)
      ? match[2]
      : match[2]
          .replace(/fill="white"/gi, 'fill="currentColor"')
          .replace(/stroke="white"/gi, 'stroke="currentColor"');
    const name = sourceName;
    const body = `import React from 'react';\n\nexport type ${component}Props = React.SVGProps<SVGSVGElement>;\n\nconst ${component}: React.FC<${component}Props> = (props) => (\n  <svg ${attrs} width="24" height="24" {...props} dangerouslySetInnerHTML={{ __html: ${JSON.stringify(
      inner,
    )} }} />\n);\n\nexport default ${component};\n`;
    fs.writeFileSync(path.join(outputDir, `${component}.tsx`), body);
    return { name, component, special: excluded.has(file) };
  });

// ---- generate registry.ts ----

const autoSpecialIcons = entries
  .filter(({ special }) => special)
  .map(({ name, component }) => `  '${name}': ${component},`);

const registry = [
  '/* eslint-disable import/order */',
  "import type React from 'react';",
  '',
  ...entries.map(
    ({ component }) => `import ${component} from './generated/${component}';`,
  ),
  '',
  'export const builtInIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {',
  ...entries
    .filter(({ special }) => !special)
    .map(({ name, component }) => `  '${name}': ${component},`),
  '};',
  '',
  'export const builtInIconNames = Object.keys(builtInIcons);',
  '',
  // Use preserved specialIcons if available, otherwise auto-generate
  preservedSpecialIcons ||
    `export const specialIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {\n${autoSpecialIcons.join(
      '\n',
    )}\n};`,
  '',
  preservedIconMap || '',
].join('\n');

fs.writeFileSync(registryPath, registry);
console.log(`Generated ${entries.length} icon components.`);
if (preservedIconMap) console.log('Preserved existing iconMap.');
if (preservedSpecialIcons) console.log('Preserved existing specialIcons.');
