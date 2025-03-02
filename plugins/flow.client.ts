
import { VueFlow, Handle } from '@vue-flow/core'
import { Controls, ControlButton } from '@vue-flow/controls'


/* import the necessary styles for Vue Flow to work */
import '@vue-flow/core/dist/style.css';
import '@vue-flow/controls/dist/style.css';

/* import the default theme, this is optional but generally recommended */
import '@vue-flow/core/dist/theme-default.css';

export default defineNuxtPlugin(nuxt => {
    nuxt.vueApp.component("VueFlow", VueFlow)
    nuxt.vueApp.component("Controls", Controls)
    nuxt.vueApp.component("ControlButton", ControlButton)
    nuxt.vueApp.component("Handle", Handle)
    // nuxt.vueApp.component("Position", Position)
})