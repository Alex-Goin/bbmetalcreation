export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bbmetalcreation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "BB Metal Creation - métallerie, soudage, pliage sur Castres, Toulouse, Montauban, Cahors, l'Occitanie." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* FONTAWESOME */
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
        integrity: 'sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu',
        crossorigin: 'anonymous',
      },
      /* GOOGLE FONT */
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway&family=Parisienne&family=Russo+One&family=Righteous&family=Anton&family=Montserrat&family=Shippori+Mincho+B1&display=swap',
      },
      /* BULMA CSS */
      {
        rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/tokenValidator.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/recaptcha',
    'nuxt-buefy'
  ],

/*   env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }, */


  publicRuntimeConfig: {
    recaptcha: {
      hideBadge: false,
      siteKey: process.env.NUXT_ENV_RECAPTCHA_SITE_KEY,
      version: 2,
      size: 'normal'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  toast: {
    position: 'top-center',
    duration: '2000'
  },
}
