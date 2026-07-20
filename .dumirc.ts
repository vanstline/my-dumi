import { defineConfig } from 'dumi';
import { join } from 'path';
// 构建时(NODE_ENV=production)用 Gitee Pages 路径，开发时用根路径
const basePath = process.env.BASE_PATH || '/';

// Windows 下 path.join 会生成反斜杠，webpack alias 需要正斜杠
const toForwardSlash = (p: string) => p.replace(/\\/g, '/');

export default defineConfig({
  themeConfig: {
    name: 'Auron',
    //头部菜单栏
    nav: [
      // {
      //   title: '规范',
      //   link: '/spec',
      // },
      {
        title: '设计',
        link: '/designs/color',
      },
      {
        title: 'liquid-glass',
        link: '/liquid-glasses/liquid-glass',
      },
      {
        title: 'components',
        link: '/components',
      },
      {
        title: 'hooks',
        link: '/hooks',
      },
      {
        title: 'TODO',
        link: '/todo',
      },
    ],
    prefersColor: { default: 'light', switch: true }, //主题色
    socialLinks: {
      gitlab: 'https://gitlab.auson.cc/shilongfei',
    },
    editLink: false,
    lastUpdated: true,
    logo: '/logo.png',
    darkLogo: '/dark-logo.png',
  },
  outputPath: 'docs-dist', //打包后文档的包名
  base: basePath,
  publicPath: basePath,
  hash: true, //文档包名是否生成hash，防止浏览器缓存
  //解析目录
  resolve: {
    docDirs: ['docs'], //配置 Markdown 文档的解析目录
    atomDirs: [
      //配置子项目（例如组件、函数、工具等）Markdown 的解析目录。
      { type: 'design', dir: 'packages/design/src' },
      { type: 'components', dir: 'packages/components/src' },
      { type: 'hooks', dir: 'packages/hooks/src' },
      { type: 'liquid-glass', dir: 'packages/liquid-glass/src' },
      // Icon 独立发布，但文档归入 components 的“基础原子”分类
      { type: 'components', dir: 'packages/icons/src' },
      // { type: 'tools', dir: 'packages/tools/src' },
    ],
  },
  favicons: ['/favicon.ico'],
  //别名：dumi 2不再感知 monorepo,需要手动配置包名到 src 的 alias。
  alias: {
    '@my-dumi/components': toForwardSlash(
      join(__dirname, 'packages/components/src'),
    ),
    '@my-dumi/hooks': toForwardSlash(join(__dirname, 'packages/hooks/src')),
    '@my-dumi/liquid-glass': toForwardSlash(
      join(__dirname, 'packages/liquid-glass/src'),
    ),
    '@my-dumi/icons': toForwardSlash(join(__dirname, 'packages/icons/src')),
    // '@wjcao/utils': toForwardSlash(join(__dirname, 'packages/tools/src')),
  },
});
