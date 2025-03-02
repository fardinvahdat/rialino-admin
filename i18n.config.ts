import login from './locales/login.json'
import dashboard from './locales/dashboard.json'
import layout from './locales/layout.json'
import users from './locales/users.json'
import purchase from './locales/purchase.json'
import orders from './locales/orders.json'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {...login,...dashboard,...layout,...users,...purchase,...orders}
  }
}))