export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'B.B. Metal Creation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "B.B. Metal Creation - métallerie, soudage, pliage sur Castres, Toulouse, Montauban, Cahors, l'Occitanie.",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* BULMA CSS */
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css',
      },
      /* FONTAWESOME */
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
        integrity:
          'sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu',
        crossorigin: 'anonymous',
      },
      /* GOOGLE FONT */
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Raleway&family=Parisienne&family=Russo+One&family=Righteous&family=Anton&family=Montserrat&family=Shippori+Mincho+B1&display=swap',
      },
      /* BULMA CAROUSEL */
      {
        rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
      }, {
        rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.6.0.min.js",
        type: "text/javascript",
        integrity: "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=",
        crossorigin: "anonymous",
        body: true
      },
      {
        src: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        type: "text/javascript",
        body: true
      }, {
        src: "https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/js/bulma-carousel.min.js",
        type: "text/javascript",
        body: true
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@splidejs/splide/dist/css/themes/splide-default.min.css' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-splide.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [ 'vue-splide' ]
  },
}
