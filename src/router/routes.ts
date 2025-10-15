//对外暴露配置路由(常量路由)

export const constantRoutes = [
  {
    //登录
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    //登录成功以后展示数据的页面
    path: '/',
    name: 'layout',
    component: () => import('@/views/home/index.vue'),
  },
  {
    //404页面
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
]
