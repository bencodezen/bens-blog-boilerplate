export default {
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,700&family=Poppins:wght@500;700&display=swap'
        // 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex']
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('blog').fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    }
  }
}
