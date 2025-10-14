import type { App } from 'vue'

//引入项目中全部的全局组件
import SvgIcon from './SvgIcon/SvgIcon.vue'
import Pagination from './Pagination/Pagination.vue'

//全局组件对象
const allGlobalComponents: Record<string, any> = {
  SvgIcon,
  Pagination,
}

// 对外暴露插件对象
export default {
  install(app: App) {
    //注册项目全部的全局组件
    Object.keys(allGlobalComponents).forEach((key) => {
      //注册组件
      app.component(key, allGlobalComponents[key])
    })
  },
}
