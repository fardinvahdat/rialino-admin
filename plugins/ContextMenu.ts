import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

export default defineNuxtPlugin(nuxt => {
    nuxt.vueApp.component("ContextMenu", ContextMenu)
})