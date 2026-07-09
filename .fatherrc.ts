import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  // NOTE: 不指定 output，让 father 4 默认输出到 dist/esm 和 dist/cjs，避免 ESM/CJS 产物冲突
  esm: {},
  cjs: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'es', style: false },
      'antd',
    ],
  ],
});
