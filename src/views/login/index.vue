<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <!-- 用户名输入框：绑定 username 变量 -->
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <!-- 密码输入框：绑定 password 变量 -->
          <el-form-item>
            <el-input :prefix-icon="Lock" v-model="loginForm.password" type="password" show-password
              placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading=loading class="login_btn" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()
//获取路由器
let $router = useRouter()
//定义变量控制按钮加载的效果
let loading = ref(false);
let loginForm = reactive({
  username: 'admin',
  password: '111111',
});
//登录按钮的回调
const login = async () => {
  //开始加载
  loading.value = true;
  //点击登录按钮以后要干什么  通知仓库发送登录请求 
  //请求成功》跳转到首页
  //请求失败》提示用户
  try {
    //保证登录成功
    await useStore.userLogin(loginForm)
    //编程式导航跳转到展示数据首页
    $router.push('/')
    //提示用户登录成功
    ElNotification({
      title: '登录成功',
      message: '欢迎来到硅谷甄选',
      type: 'success',
    });
    //登录成功加载效果消失
    loading.value = false;
  } catch (error) {
    //登录失败加载效果失效
    loading.value = false;
    //登录失败
    ElNotification({
      title: '登录失败',
      message: (error as Error).message,
      type: 'error',
    });
  }

};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}

.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
}

h1 {
  font-size: 40px;
  color: #fff;
}

h2 {
  font-size: 20px;
  color: #fff;
  margin: 20px 0;
}

.login_btn {
  width: 100%;
}
</style>
