import clickOutside from '../directives/clickOutside'

export default defineNuxtPlugin(nuxt => {
    nuxt.vueApp.directive("vClickOutside", clickOutside)
    // console.log(clickOutside)
})