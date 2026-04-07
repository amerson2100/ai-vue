<template>
  <div class="frontend-layout">
    <div class="navbar-container">
      <div class="brand-section">
        <el-image
          style="width: 50px; height: 50px"
          :src="iconUrl"
          alt="品牌图标"
          class="brand-logo"
        />
        <h1 class="brand-name">心理健康AI助手</h1>
      </div>
      <div class="nav-section">
        <router-link class="nav-link" to="/">首页</router-link>
        <router-link class="nav-link" to="/consultation" v-if="isLoggedIn"
          >AI咨询</router-link
        >
        <router-link class="nav-link" to="/emotion-diary" v-if="isLoggedIn"
          >情绪日记</router-link
        >
        <router-link class="nav-link" to="/knowledge">知识库</router-link>
        <el-button class="logout-btn" v-if="isLoggedIn" @click="handleLogout"
          >退出登录</el-button
        >
        <template v-else>
          <router-link class="nav-link" to="/auth/login">登录</router-link>
          <router-link class="nav-link" to="/auth/register">
            <el-button type="primary">注册</el-button>
          </router-link>
        </template>
      </div>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <div class="footer-container">
      <div class="footer-bottom">
        <p>&copy; 2026 心理健康AI助手. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { logout } from "@/api/admin";
import router from "@/router";

const iconUrl = new URL("@/assets/images/机器人.png", import.meta.url).href;

const isLoggedIn = ref(false);

//登出
const handleLogout = () => {
  logout().then(() => {
    //清除缓存
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    isLoggedIn.value = false;
    router.push("/auth/login");
  });
};

onMounted(() => {
  // 检查是否有登录状态
  isLoggedIn.value = localStorage.getItem("token") !== null;
});
</script>

<style scoped lang="scss">
.frontend-layout {
  background-color: #fff;
  .navbar-container {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .brand-section {
      display: flex;
      align-items: center;
      .brand-name {
        margin-left: 10px;
        font-size: 24px;
        font-weight: 600;
        color: #333;
      }
    }
    .nav-section {
      display: flex;
      align-items: center;
      gap: 40px;
      .nav-link {
        color: #4b5563;
        font-size: 16px;
        font-weight: 500;
        &:hover {
          color: #4a90e2;
        }
      }
    }
  }

  .footer-container {
    background: #1f2937;
    color: white;
    padding: 15px 0;
    margin-top: auto;
    .footer-bottom {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 10px;
      text-align: center;
    }
  }
}
</style>
