<template>
  <div class="test">
    <h1>This is an Test page</h1>
    <button @click = sendGetHttpRequest>나를 눌러 데이터 정보가 들어오는지 확인하기</button>
    <button @click = sendPostHttpRequest>나를 눌러 데이터 정보가 업로드 되는지 확인하기</button>
    <button @click = sendPostVideoHttpRequest>나를 눌러 비디오 정보가 업로드 되는지 확인하기</button>
    <button @click = sendGetCSRFRequest>나를 눌러 CSRF 정보가 들어오는지 확인하기</button>
    <div>
      <input type="file" @change="uploadFile" />
      <button @click="sendPostHttpRequest">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {creatAxiosInstanceGetCsrfToken, createAxiosInstance, createAxiosPostInstance} from "@/intercepter";
import {getCookie} from "typescript-cookie";
import {reactive} from "vue";
import {useServerStore} from "@/stores/server";

interface Props{
  file: File | null
}
const serverStore = useServerStore()
const props : Props = reactive({file: null})

function uploadFile(event: Event){
  let target : HTMLInputElement = event.target! as HTMLInputElement;
  props.file = target.files![0]
  console.log(props.file)
}

function sendGetHttpRequest() {
  let axiosInstance = createAxiosInstance()
  axiosInstance.get(serverStore.url + "/account")
      .then((res) => {
        console.log('Got form get button\' cookie :  ' + getCookie('XSRF-TOKEN'))
      })
}

function sendPostHttpRequest(){
  console.log(props.file)
  let formData = new FormData();
  formData.append("file" , props.file!) //이름을 철저히 해놓을것..
  function postHttpRequest() {
    createAxiosPostInstance().post(serverStore.url+ "/upload", formData, {withCredentials: true})
        .then((res) => {
          console.log(res.data)
        })
  }

  if (getCookie('XSRF-TOKEN') == null){
    creatAxiosInstanceGetCsrfToken()
        .then(()=>{
          postHttpRequest();
        })} else {
    postHttpRequest();
  }
}

function sendPostVideoHttpRequest(){
  console.log(props.file)
  let formData = new FormData();
  formData.append("file" , props.file!) //이름을 철저히 해놓을것..
  function postHttpRequest() {
    createAxiosPostInstance().post(serverStore.url+ "/video", formData, {withCredentials: true})
        .then((res) => {
          console.log(res.data)
        })
  }

  if (getCookie('XSRF-TOKEN') == null){
    creatAxiosInstanceGetCsrfToken()
        .then(()=>{
          postHttpRequest();
        })} else {
    postHttpRequest();
  }
}

function sendGetCSRFRequest(){
  let axiosInstance = createAxiosInstance()
  axiosInstance.get(serverStore.url + "/csrf",{withCredentials: true})
      .then((res)=> {
        console.log(res.headers["set-cookie"])
      })
}
</script>

<style scoped>

</style>
