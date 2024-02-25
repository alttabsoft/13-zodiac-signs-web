<template>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import axios, {Axios} from "axios";
import {useServerStore} from "@/stores/server";
const serverStore = useServerStore();
onMounted(()=>{
  const urlParams = new URLSearchParams(window.location.search)
  axios.get(serverStore.url + "/verify?" + urlParams).then((res)=>{
    console.log(res.data)
  })
})
</script>

<style scoped>
</style>
