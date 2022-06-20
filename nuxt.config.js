export default {

  // Target Deployment
  target: 'server',

  //rendering mode SSR	

  ssr: true,

  loading: {
    color: 'black',	
// <-- color
    height: '7px'	
// <-- height
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bicaralive.id',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      // { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
      },
      // { rel: "stylesheet", href: "/css/bootstrap.css" },
      // { rel: "stylesheet", href: "/css/animate.css" },
      // { rel: "stylesheet", href: "/css/fontawesome-all.css" },
      // { rel: "stylesheet", href: "/css/flaticon.css" },
      // { rel: "stylesheet", href: "/css/hover.css" },
      // { rel: "stylesheet", href: "/css/custom-animate.css" },
      // { rel: "stylesheet", href: "/plugins/glightbox/glightbox.min.css" },
      // { rel: "stylesheet", href: "/css/style.css" },
      // { rel: "stylesheet", href: "/css/rtl.css" },
      // { rel: "stylesheet", href: "/css/responsive.css" },
      // { rel: "stylesheet", href: "/css/colors/color-default.css" },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
      }
    ],

    script: [
      // { src: "/plugins/glightbox/glightbox.min.js", body: true },
      // { src: "/plugins/accordion/accordion.min.js", body: true },
      { src: '/js/coreui.bundle.min.js' },
      { src: 'https://app.sandbox.midtrans.com/snap/snap.js', 'data-client-key': 'paste_client_Key_midtrans_disini' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.min.css',
    '@/assets/css/custom.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // {src: 'plugins/owl.js', ssr: false},
    // {src: 'plugins/mixitup.js', ssr: false},
    { src: '~/plugins/vue-star-rating.js', mode: 'client' },
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/mixins.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //https://dev.auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    //https://github.com/avil13/vue-sweetalert2
    'vue-sweetalert2/nuxt',
  ],
  
auth: {
  strategies: {
      //strategy "admin"
      admin: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/admin/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/admin/logout',
            method: 'post'
          },
          user: {
            url: '/api/admin/user',
            method: 'get',
            propertyName: 'user'
          }
        },
      },
  
      //strategy "customer"
      customer: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/customer/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/customer/logout',
            method: 'post'
          },
          user: {
            url: '/api/customer/user',
            method: 'get',
            propertyName: 'user'
          }
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}