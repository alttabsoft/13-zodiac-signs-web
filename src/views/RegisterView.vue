<template>
  <div class="register">
    <h1>This is an register page</h1>
    <label> Email : </label>
    <input type="email" v-model="prop.email"/>
    <label> Password : </label>
    <input type="password" v-model="prop.password">
    <div class="submit">
      <button @click=register>Create an Account</button>
    </div>
  </div>
  <button>데이터 가져오기</button>
</template>

<script setup lang="ts">
import axios from "axios";
import {reactive} from 'vue'
import {useServerStore} from "@/stores/server";

interface Props {
  email: string
  password: string
}

const serverStore = useServerStore()
const prop: Props = reactive({ email : "", password: ""})

function register() {
  axios.post(
      serverStore.url +"/register",
      {
        'email': prop.email,
        'password': prop.password
      },
      {}).then((res) => {
    console.log(res);
    window.alert(("register good!.~"))
  })
}
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: var(--color-background);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: var(--color-text);
  display: var(--color-background-mute);
}

.register {
  justify-content: center;
}
</style>
