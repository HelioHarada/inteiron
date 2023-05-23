export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Interion As Crônicas de Júpiter',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Interion As Crônicas de Júpiter de Patrícia Criado' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },

  // acessar pelo celular 
  server: {
    port: '8000',
    host: '0.0.0.0' // default: localhost

  },

  // Setar tipo de projeto server ou static
  // target: 'static',
  target: 'static',
  
  ssr: true,

  generate: {
    fallback: '404.html',    
  },

  router: {
   routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    
    },
    {
      name: 'about',
      path: 'test',
      component: 'pages/about.vue'
    }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',

  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          backgroundImage: {
            'hero': "url('/img/kiara.jpg)"
          },
          backgroundColor: {
            'redo' : "background-color : red"
          }
        }
      }
    }
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/main.scss'
  ],

  styleResources: {
    scss: [
      '@/assets/style/variables.scss',
      '@/assets/style/mixins.scss',
    ],
  },
  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
