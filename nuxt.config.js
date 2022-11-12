const seoSetting = {}
seoSetting.title = "Own Influence Creative Theme"
seoSetting.description = "A creative front-end design theme developed by Nuxt.js."
seoSetting.image = "~/static/favicon.jpg"

export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: seoSetting.title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: seoSetting.description },
      { hid: 'keywords', name: 'keywords', content: 'Website Development, Front-end Design, Creative Theme' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title'  , property: 'og:title'  , content: seoSetting.title},
      { hid: 'og:description' , property: 'og:description' , content: seoSetting.description },
      { hid: 'og:type' , property: 'og:type' , content: 'website'},
      { hid: 'og:image' , property: 'og:image' , content: seoSetting.image },
      { hid: 'og:image:type' , property: 'og:image:type' , content: 'image/jpg'},
      { hid: 'og:image:width' , property: 'og:image:width' , content: '512'},
      { hid: 'og:image:height' , property: 'og:image:height' , content: '512'},
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: seoSetting.title },
      { hid: 'twitter:description', name: 'twitter:description', content: seoSetting.description },
      { hid: 'twitter:image', name: 'twitter:image', content: seoSetting.image },
      { hid: 'itemprop:name' , itemprop: 'name' , content: seoSetting.title},
      { hid: 'itemprop:description' , itemprop: 'description' , content: seoSetting.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: seoSetting.image }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
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
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/composition-api/module',
    'nuxt-i18n-link'
  ],

  i18n: {
    locales: ['tw', 'en'],
    defaultLocale: 'tw',
    langDir: '~/locales/',
    locales: [ 
      { code: 'en', iso: 'en-EN', file: 'en.json', },
      { code: 'tw', iso: 'zh-TW', file: 'tw.json', },
    ],
    detectBrowserLanguage: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
