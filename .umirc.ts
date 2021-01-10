import { defineConfig } from 'umi';
import routes from './config/routes';
import theme from './config/theme';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'umi 搭建',
    layout: 'side',
    logo: 'favicon.ico',
    theme: 'pro',
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  // 单独配置路由
  routes: routes,
  // 单独配置主题，实际上是配 less 变量。
  theme: theme,
  dva: {
    immer: true,
    hmr: false,
  },
  // Umi 内置了 @ 为 项目 src 目录的别名
  // alias: {
  //   'utils': './src/utils',
  //   'constans': './src/constans',
  // },
  // analyze: ANALYZE=1 umi build 或 ANALYZE=1 umi dev 开启
  // analyze: {
  //   analyzerMode: 'server',
  //   analyzerPort: 8888,
  //   openAnalyzer: true,
  //   // generate stats file while ANALYZE_DUMP exist
  //   generateStatsFile: false,
  //   statsFilename: 'stats.json',
  //   logLevel: 'info',
  //   defaultSizes: 'parsed', // stat  // gzip
  // },
  // 对按照 css modules 方式引入的 css 或 less 等样式文件，自动生成 ts 类型定义文件。
  // cssModulesTypescriptLoader: {
  //   mode: 'emit',
  // },
  // 配置 html 的输出形式, 针对每个路由输出 html 文件。
  // exportStatic: { htmlSuffix: true },
  // 配置 favicon 地址（href 属性）。
  // favicon: './public/favicon.ico',
  // 开启 TypeScript 编译时类型检查，默认关闭。
  // forkTSChecker: {},
  // 快速刷新（Fast Refresh），开发时可以保持组件状态，同时编辑提供即时反馈。
  // fastRefresh: {},
  // 忽略 moment 的 locale 文件，用于减少尺寸。
  // ignoreMomentLocale: true,
  // 指定输出路径, 不允许设定为 src、public、pages、mock、config 等约定目录
  // outputPath: 'dist',
  // 开启服务端渲染
  // ssr: {}
  // 配置代理能力。然后访问 /api/users 就能访问到 http://jsonplaceholder.typicode.com/users 的数据。
  // proxy: {
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
});
