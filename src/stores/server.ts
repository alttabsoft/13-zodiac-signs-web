import {defineStore} from "pinia";

export const useServerStore = defineStore('server', {
    state: () => {
        return {
            url: 'http://localhost:8080',
        }
    },
    getters: {
        getUrl(state) {
            return state.url
        }
    }
})
