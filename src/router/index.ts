//通过vue-router的createRouter方法创建路由实例
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
//创建路由实例
const router = createRouter({
  //路由模式hash
  history: createWebHashHistory(),
  //路由配置
  routes: constantRoutes,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
