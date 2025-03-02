
import { useStorage } from '~/stores/useStorage';
import configs from "../config/base"

export default defineNuxtPlugin(async () => {
    // const { updateToken, getUserToken, updateUser, updateWallet } = useStorage()
    // const router = useRouter()
    // let baseURL = "configs.Sms_back"
    // const route = useRoute()
    // const token = getUserToken

    // if (route.path !== '/auth') {
    //     const { data, error } = await useFetch(`${baseURL}/auth/user `, {
    //         method: "GET",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Cache-Control': 'no-cache',
    //             "Access-Control-Allow-Origin": '*',
    //             'Authorization': 'Bearer' + ' ' + token,
    //         }
    //     })
    //     if (data?.value) {
    //         const user = data?.value.user
    //         updateToken(token)
    //         updateWallet(user?.wallet)
    //         updateUser({
    //             id: user.id,
    //             first_name: user?.first_name,
    //             last_name: user?.last_name,
    //             email_verified: user?.email_verified,
    //             phone: user?.phone,
    //             bms_url: user?.bms_url,
    //             username: user?.username,
    //             numbers: user?.numbers,
    //             roles: user.roles,
    //             permissions: user.permissions,
    //             store: user.store,
    //             count_user_dedicated_line: user?.count_user_dedicated_line,
    //             count_user_dedicated_line_have: user?.count_user_dedicated_line_have,
    //             count_user_public_line: user?.count_user_public_line,
    //             count_user_public_line_have: user?.count_user_public_line_have,
    //             have_package: user?.have_package
    //         })
    //     }
    //     else if (error.value) {
    //         updateToken(null)
    //         updateUser(null)
    //         router.push({ path: '/auth' })
    //     }
    // }
    // addRouteMiddleware('global-test', (to, from) => {
    //     if (to.path !== '/auth' && !useCookie('token').value) {
    //         router.replace({ path: '/auth' })
    //     }
    // }, { global: true })
})