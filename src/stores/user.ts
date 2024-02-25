import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            jwtToken: ''
        }
    },
    getters: {
        getJwtToken(state) {
            return state.jwtToken
        }
    },
    actions:{
        setJwtToken(inputToken: string){
            this.jwtToken = inputToken
        },
        isTokenEmpty() {
            return this.jwtToken == "";
        }
    }
})
