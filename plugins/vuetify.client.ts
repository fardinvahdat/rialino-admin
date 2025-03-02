// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
    let theme = {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#116DFF',
                    'primary-b3': '#072C66',
                    'primary-b2': '#0A4199',
                    'primary-b1': '#0E57CC',
                    'primary-w2': '#70A7FF',
                    'primary-w4': '#E7F0FF',
                    'primary-w5': '#F3F8FF',
                    secondary: '#FFA311',
                    'secondary-b1': '#CC820E',
                    'secondary-w2': '#FFC870',
                    'secondary-w4': '#FFF6E7',
                    gray: '#333333',
                    'gray-b1': '#191919',
                    'gray-b3': '#4C4C4C',
                    'gray-w1': '#7F7F7F',
                    'gray-w2': '#999999',
                    'gray-w3': '#B2B2B2',
                    'gray-w4': '#E5E5E5',
                    'gray-w5': '#F2F2F2',
                    'gray-w6': '#FAFAFA',
                    error: '#CC0E0E',
                    'error-b1': '#660707',
                    'error-b2': '#990A0A',
                    'error-w2': '#FF1111',
                    'error-w1': '#FFA0A0',
                    sucsess: '#1DCC0E',
                    'sucsess-b1': '#0E6607',
                    'success-b2': '#16990A',
                    'success-w2': '#24FF11',
                    'success-w1': '#A7FFA0',

                },
            },
        },
    }
    let defaults = {
        VBtn: {
            rounded: 10,
            color: 'primary',
            height: 48,
            borderWidth: 2,
        },
        VCardActions: {
            VBtn: {
                rounded: 10,
                layout: 'default',
                color: 'primary',
                height: 48,
            },
        },
        VCard: {
            elevation: 4,
            rounded: 16,
        },
        VList: {
            elevation: 0,
        },
        VTable: {
        },
        VTextField: {
            variant: 'outlined',
            density: "compact",
            color: 'primary',
            rounded: 10,
        },
        VTextarea: {
            variant: 'outlined',
            density: "compact",
            color: 'primary',
            rounded: 10,
        },
        VFileInput: {
            density: 'compact',
            variant: '',
            color: 'info'
        },
        VAutocomplete: {
            density: 'compact',
            variant: 'outlined',
            color: 'primary',
            rounded: 10,
        },
        VSheet: {
            elevation: 4,
        },
        VSystemBar: {
            color: 'dark',
        },
        VCarouselItem: {
            rounded: 'md',
            elevation: 4,
        },
        VDivider: {
            thickness: 4,
        },
        VSelect: {
            variant: 'outlined',
            density: "compact",
            color: 'primary',
            rounded: 10,
        },
        VAppBar: {
            elevention: 0,
            density: 'compact',
        },
        VBottomNavigation: {
            elevention: 0,
            color: 'primary',
            density: 'compact',
        },
    };
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        defaults: defaults,
        theme: theme,
    })
    nuxtApp.vueApp.use(vuetify)
})
