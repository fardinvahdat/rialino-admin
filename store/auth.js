import { defineStore } from 'pinia'
import UseApi from "../services/useApi";
// pD@fGq2Y@F6a%UZhvX
// @ts-ignore
export const useAuthStore = defineStore('authStore', {
    state: ()=> {
        return {
            userToken: "",
            user: "",
            packages: [],
            wallet: "",
            isLoadingFetch: false
        }
    },
    getters: {
      getUserInfo(state) {
          return state.user
      },
      getLoadingStatus(state) {
          return state.isLoadingFetch
      }
    },

    actions: {
        //======================================================================================================================
        // Make a POST request to the '/auth/login' endpoint
        async login(data) {

        },
        //======================================================================================================================
        //Save Token user in local storage
        async setTokenInLocalStorage(data) {
            if (data) {
                localStorage.setItem("token", JSON.stringify(data))
                return true
            }
            return false
        },

    }
})