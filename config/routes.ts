/**
 * 1/这个文件不需要格式化。
 * 2/书写顺序有要求：exact - path - component - title - menu - other。
 * 3/菜单项 icon name 为 组件名小写后去掉 outlined 或者 filled 或者 twotone，所得值；
 *   举例：<UserOutlined /> 的 icon name 即： user。
 * 4/一级路由和一级路由之间间隔一行进行区分并添加注释方便维护。
 */
export default [
  /** 首页 */
  { 
    exact: true, path: '/', component: '@/pages/index', title: '首页',
    menu: { name: '首页', icon: 'home' }
  },

  /** a 页面 */
  { 
    exact: true, path: '/github', component: '@/pages/github', title: 'github', 
    menu: { name: 'github', icon: 'github' }
  },

  /** b 页面 */
  { 
    path: '/alibaba', title: 'alibaba',
    menu: { name: '阿里巴巴', icon: 'alibaba' },
    routes: [
      {
        exact: true, path: '/alibaba/taobao', component: '@/pages/alibaba', title: '淘宝',
        menu: { name: '淘宝' },
      },
      { 
        exact: true, path: '/alibaba/alipay', component: '@/pages/alibaba/alipay', title: '支付宝',
        menu: { name: '支付宝' }
      }, 
    ]
  }, 
];