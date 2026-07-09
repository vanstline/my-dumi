/**
 * 自动扫描 src/* 目录，生成 packages/components/src/index.ts
 * 用法: node scripts/gen-exports.js
 */
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

function getComponentDirs() {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  const dirs = entries
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        !dirent.name.startsWith('_') &&
        dirent.name !== 'styles',
    )
    .map((dirent) => dirent.name);
  return dirs.sort();
}

function generateExports() {
  const dirs = getComponentDirs();
  const lines = [
    '// 此文件由 scripts/gen-exports.js 自动生成，请勿手动修改',
    '',
    "import './styles/global.less';",
    '',
    ...dirs.map((name) => `export { default as ${name} } from './${name}';`),
  ];

  const outputPath = path.join(srcDir, 'index.ts');
  fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf8');
  // eslint-disable-next-line no-console
  console.log(`[gen-exports] 已生成: ${dirs.length} 个组件`);
  // eslint-disable-next-line no-console
  console.log(`  ${dirs.join(', ')}`);
}

generateExports();
