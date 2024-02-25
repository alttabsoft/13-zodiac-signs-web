<template>
  <div class="logout">
    <h1>This is an Logout page</h1>
    <button @click = logout>나를 눌러 로그 아웃</button>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/user";
import router from "@/router";
import {setCookie} from "typescript-cookie";

const userStore = useUserStore()

function logout () {
  userStore.setJwtToken('')
  setCookie("XSRF-TOKEN", "")
  router.push('/login')
}
</script>

<style>
.logout{
  justify-content: center;
}
</style>
