<template>
  <div class="login">
    <h1>This is an Login page</h1>
    <form>
      <input type = "email" placeholder="happy@example.com"/>
      <input type = "password" placeholder="123456"/>
    </form>
    <button @click= "submitLogin" >로그인</button>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {loginAxiosInstance} from "@/intercepter";
import router from "@/router";
import {useUserStore} from "@/stores/user";
import {useServerStore} from "@/stores/server";

const userStore = useUserStore();
const serverStore = useServerStore();
interface Props{
  email: string
  password: string
}

const form : Props = reactive({email: "happy@example.com", password : "123456"})

function submitLogin() {
  let axiosInstance = loginAxiosInstance(form.email, form.password);
  axiosInstance
      .get(serverStore.url + "/user", {withCredentials: true}) //XSRF 토큰은 자동으로 주입됨
      .then((response)=>{
        userStore.setJwtToken(response.headers['authorization'])
        router.push('/private')
      }).catch((error)=>{
    console.log(error.message)
  })
}
</script>

<style>
.login{
  justify-content: center;
  align-content: center;
}
</style>
