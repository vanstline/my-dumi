import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  esm: { transformer: 'babel' },
  cjs: { transformer: 'babel' },
  extraBabelPresets: [
    [require.resolve('@babel/preset-react'), { runtime: 'classic' }],
  ],
});
