// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: [
      '@/assets/css/main.css',
      '@/assets/scss/main.scss',
      '@mdi/font/css/materialdesignicons.css'
  ],

  alias: {
      "@components": "./components"
  },

  build: {
      transpile: ['@vuepic/vue-datepicker']
  },

  modules: [
      "@pinia/nuxt",
      '@element-plus/nuxt',
      '@nuxtjs/i18n'
  ], 
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },
  routeRules: { 
    "/": { redirect: "/dashboard" },
  },

  runtimeConfig: {
      public: {
          baseURL: process.env.BASE_URL,
          baseURLFront:process.env.BASE_URL_FRONT
      },
  },
  pinia: {
      autoImports: [
          // automatically imports `defineStore`
          // 'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
  },
  nitro: {
    output: {
      dir: '.output',
    },
  },

  compatibilityDate: '2024-07-25'
})