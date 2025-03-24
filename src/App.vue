<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import {onMounted} from "vue";
import {useMainStore} from "@/stores/MainStore.js";

const MainStore = useMainStore();
const route = useRoute();

onMounted(() => {
  try {
    MainStore.dataList = JSON.parse(localStorage.getItem("dataList")) || [];
  } catch {
    MainStore.dataList = [];
  }
});
</script>

<template>
  <div class="main-container container">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/" :class="route.path === '/' ? 'active' : 'not-active'">Форма</RouterLink>
          <RouterLink to="/table" :class="route.path === '/table' ? 'active' : 'not-active'">Данные</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  margin-bottom: 40px;
}

nav {
  display: flex;
  justify-content: center;
}

.main-container {
  display: flex;
  flex-direction: column;
}

.active {
  border-bottom: 4px solid #41BA4E;
}

.not-active {
  color: #969696;
}

a {
  display: inline-block;
  padding: 10px 16px;
  text-align: center;
  width: 140px;
  border-bottom: 4px solid #F5F5F4;
}
</style>
