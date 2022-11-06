export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'realestate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
  ],

  env: {
    CMS_DATOCMS_API_TOKEN: process.env.CMS_DATOCMS_API_TOKEN
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/config.js',
    },
  },
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...')
    },
  },
}
