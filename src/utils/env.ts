/**
 * 环境检测工具函数
 */

// 获取当前环境
export const getCurrentEnv = () => {
  return import.meta.env.MODE
}

// 是否开发环境
export const isDev = () => {
  return import.meta.env.DEV
}

// 是否生产环境  
export const isProd = () => {
  return import.meta.env.PROD
}

// 是否测试环境
export const isTest = () => {
  return import.meta.env.MODE === 'test'
}

// 获取基础 URL
export const getBaseUrl = () => {
  return import.meta.env.BASE_URL
}

// 获取所有环境变量
export const getAllEnv = () => {
  return import.meta.env
}

// 环境信息打印
export const printEnvInfo = () => {
  console.group('📋 环境信息')
  console.log('🌍 当前环境:', getCurrentEnv())
  console.log('🔧 开发环境:', isDev())
  console.log('🚀 生产环境:', isProd())
  console.log('🧪 测试环境:', isTest())
  console.log('🌐 基础URL:', getBaseUrl())
  console.log('📦 所有变量:', getAllEnv())
  console.groupEnd()
}