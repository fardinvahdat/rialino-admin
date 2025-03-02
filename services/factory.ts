import { UseFetchOptions } from "nuxt/dist/app/composables";
import { FetchCustomConfig } from "../types/fetch";
import { toast } from "vue3-toastify";


class HttpFactory {
  private $fetch: {};

  constructor() {
    const fetchFunction = async (
      path: string,
      opts?: UseFetchOptions<any>,
      customConfig: FetchCustomConfig = {},
      type = "api"
    ) => {
      
      const { getUserToken } = useStorage();
      const {$runtimeData} = useNuxtApp()
      const token = getUserToken;
      let baseURL = $runtimeData.public.baseURL;
      let config = {
        baseURL: baseURL,
        retry: 0,
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache",
          "Access-Control-Allow-Origin": "*",
        },
      };
      customConfig = {
        goToLogin: true,
        toastError: true,
        ...customConfig,
      };
      if (customConfig.setToken) {
        if (!config.headers) config.headers = {};
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      let options: UseFetchOptions<any> = {
        ...opts,
        baseURL: baseURL,
        query: {
          ...opts?.query,
        },
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache",
          "Access-Control-Allow-Origin": "*",
          ...opts?.headers,
          Authorization: "Bearer" + " " + (token||''),
        },
        onResponseError(context) {
          
          if (!toast) return;
          const responseData = context.response._data;
          if (context.response.status == 401) {
            // useRouter().replace({ path: "/auth/login" });
            useRouter().push("/auth/login")
          }
          if (typeof responseData === "string") {
            // Handle non-JSON response
            toast.error(responseData);
          } else {
            // Handle JSON response
            const errorMessage =
              responseData?.message ||
              context.response?.statusText ||
              context.error ||
              responseData.user_message;
            toast.error(errorMessage);
          }
        },
      };
      return await $fetch(`${path}`, options);
    };
    this.$fetch = fetchFunction;
  }

  /**
   * method - GET, POST, PUT
   * URL
   **/
  async call<T>(
    path: string,
    opts?: UseFetchOptions<any>,
    customConfig: FetchCustomConfig = {},
    type = "api"
  ): Promise<T> {
    
    return await this.$fetch(path, opts, customConfig, type);
  }
}

export default HttpFactory;
