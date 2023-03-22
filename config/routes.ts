export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  // { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name: '管理页面',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { name: "管理页面", path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
      { name: '接口管理', icon: 'table', path: '/admin/interface_info', component: './InterfaceInfo' },
    ],
  },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
