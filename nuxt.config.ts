// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
    '@components': resolve(__dirname, 'components'),
    '@utils': resolve(__dirname, 'utils'),
    '@plugins': resolve(__dirname, 'plugins'),
  },
  css: [
    '~/assets/main.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
