export default defineNuxtRouteMiddleware(async(to, from) => {
    const router = useRouter()
    const authToken = useCookie('token')?.value
    if (to.path !== "/auth/login" && !authToken) {
        router.push('/auth/login')
    } 
})