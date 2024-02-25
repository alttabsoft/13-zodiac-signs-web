// 요청 인터셉터 추가하기
import axios from "axios";
import {useUserStore} from "@/stores/user";
import {getCookie} from "typescript-cookie";
import {useServerStore} from "@/stores/server";

const serverStore = useServerStore()
const loginAxiosInstance = (email: string, password: string) => {
    console.log(window.btoa(email + ':' + password))
    return axios.create({
        headers: {
            'Authorization': 'Basic ' + window.btoa(email + ':' + password), // 이메일, 비밀번호 입력하는 부분
            'X-Requested-With': 'XMLHttpRequest', // XMLHttpRequest 속성 값(없으면 인식 못함)
        }
    });
}

const createAxiosInstance = () => {
    let userStore = useUserStore()
    return axios.create({
        headers: {
            'Authorization': userStore.getJwtToken,
            'X-XSRF-TOKEN' : getCookie('XSRF-TOKEN'),
            'X-Requested-With': 'XMLHttpRequest', // XMLHttpRequest 속성 값(없으면 인식 못함)
        }
    });
}

const createAxiosPostInstance = () => {
    let userStore = useUserStore()
    return axios.create({
        headers: {
            'Authorization': userStore.getJwtToken,
            'X-XSRF-TOKEN' : getCookie('XSRF-TOKEN'),
            'Content-Type': 'multipart/form-data',
            'X-Requested-With': 'XMLHttpRequest', // XMLHttpRequest 속성 값(없으면 인식 못함)
        }
    });
}



const creatAxiosInstanceGetCsrfToken= ()=> {
    return axios.create({
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }
    }).get(serverStore.url + "/csrf", {withCredentials: true});
}

export {loginAxiosInstance, createAxiosInstance, creatAxiosInstanceGetCsrfToken,createAxiosPostInstance}

