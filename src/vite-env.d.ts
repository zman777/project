/// <reference types="vite/client" />

// 声明 svg-icons 虚拟模块类型
declare module 'virtual:svg-icons-register' {
  const register: () => void
  export default register
}