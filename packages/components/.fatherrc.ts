import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  esm: { transformer: 'babel' },
  cjs: { transformer: 'babel' },
  extraBabelPresets: [
    [require.resolve('@babel/preset-react'), { runtime: 'classic' }],
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'es', style: false },
      'antd',
    ],
    '@babel/plugin-transform-runtime',
  ],
});
