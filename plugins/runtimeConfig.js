// plugins/runtimeConfig.js
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    nuxtApp.provide('runtimeData', config);
});
