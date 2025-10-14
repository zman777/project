<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除</el-button>
    <!-- 使用 SVG 图标 -->
    <div style="margin-top: 20px">
      <h3>SVG 图标演示：</h3>
      <Pagination />
      <SvgIcon name="phone" color="#f56c6c" />
    </div>

    <!-- API 测试 -->
    <ApiTest />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

//引入图标组件
import { Delete, Edit, Plus } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

// 导入环境检测工具
import { printEnvInfo, isDev, isProd } from '@/utils/env'

// 检查当前环境
onMounted(() => {
  printEnvInfo()

  if (isDev()) {
    console.log('🔧 当前处于开发模式，Mock 接口已启用')
  }

  if (isProd()) {
    console.log('🚀 当前处于生产模式，Mock 接口已禁用')
  }
})
</script>

<style scoped></style>
