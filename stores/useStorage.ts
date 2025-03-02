import { defineStore } from 'pinia'

export const useStorage = defineStore("storage", {
    state: () => ({
        userToken: useCookie('token'),
        user: useCookie('user'),
        packages: useCookie('packages'),
        wallet: useCookie('wallet'),
    }),

    getters: {
        getUserToken: state => {
            return state.userToken
        },
        getUser: state => {
            return state.user
        },
    },

    actions: {
        updateToken(token: any) {
            this.userToken = token     
            const newCookie = useCookie('token', {
                maxAge: 60 * 24 * 28,
                sameSite: true,
                secure: true,
            })
            newCookie.value = this.userToken
            refreshCookie('token')
        },
        updateUser(user: any) {
            this.user = user
            const newCookie = useCookie('user', {
                maxAge: 60 * 24 * 28,
                sameSite: true,
                secure: true,
            })
            newCookie.value = this.user
        },
    }
})

