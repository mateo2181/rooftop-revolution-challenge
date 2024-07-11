// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxt/eslint"
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  alias: {
    "@": "../..",
    "@/*": "../../*"
  }
})