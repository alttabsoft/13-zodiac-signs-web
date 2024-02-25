<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="45" height="45"/>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/login" v-if = "userStore.isTokenEmpty()">Login</RouterLink>
        <RouterLink to="/logout" v-else>Logout</RouterLink>
        <RouterLink to="/public">Public</RouterLink>
        <RouterLink to="/private">Private</RouterLink>
      </nav>
    </div>
  </header>
</template>
<script setup lang = "ts">
import {useUserStore} from "@/stores/user";
const userStore = useUserStore();
</script>
<style scoped>
header {
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
  align-items: center;
  align-self: center;
  justify-content: center;
}

.logo {
  display: flex;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
</style>
