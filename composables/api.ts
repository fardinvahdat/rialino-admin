import type { UseFetchOptions } from 'nuxt/dist/app/composables';
import { toast } from 'vue3-toastify';
import { useStorage } from '~/stores/useStorage';
export const api = (path: string, opts?: UseFetchOptions<any>) => {

    
    const config = useRuntimeConfig();

    const { getUserToken } = useStorage()

    const token = getUserToken

    let baseURL = config.public.baseURL

    console.log("base url :", baseURL + path);

    let options: UseFetchOptions<any> = {
        ...opts,
        baseURL: baseURL,
        query: {
            ...opts?.query
        },
        headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache',
            "Access-Control-Allow-Origin": '*',
            'Authorization': 'Bearer' + ' ' + token,
            ...opts?.headers
        },
        onResponseError(context) {
            if (!toast) return;
            const responseData = context.response._data;
            if (context.response.status == 401) {
                useRouter().replace({ path: '/auth' })
            }
            if (typeof responseData === 'string') {
                // Handle non-JSON response
                toast.error(responseData);
            } else {
                // Handle JSON response
                const errorMessage = responseData?.message || context.response?.statusText || context.error;
                toast.error(errorMessage);
            }
        }
    };

    if (!options.onResponse) {
        options.onResponse = (context) => {
            if (!toast || !context.response._data?.message || context.response.status != 200) return;
        }
    };


    return useFetch(`${path}`, options);
}