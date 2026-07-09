import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  esm: { transformer: 'babel' },
  cjs: { transformer: 'babel' },
  extraBabelPlugins: ['@babel/plugin-transform-runtime'],
});
