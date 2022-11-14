function toYearName(date) {
  const options = { year: "numeric", };
  return new Date(date).toLocaleDateString("en", options);
}

function toMonthRoute(date) {
  const options = { month: "numeric", };
  const num = new Date(date).toLocaleDateString("en", options);
  return (num < 10) ? '0' + num.toString() : num.toString();
}

const createRoutes = async () => {
    const { $content } = require('@nuxt/content')
    const posts = await $content("posts").only(['slug', 'date', 'categories']).where({ status: { $eq: "published" } }).fetch();
    const pageNumber = Math.ceil(posts.length/16);
    const categorySet = new Set();
    const workRoutes = []
    // Get category list
    posts.forEach(post => {
    categorySet.add(post.categories[0])
    categorySet.add(post.categories[1])
    })
    // Get all posts routes
    posts.forEach(post => {
      workRoutes.push("/" + toYearName(post.date) + "/" + toMonthRoute(post.date) + "/" + post.slug)
      workRoutes.push("/en/" + toYearName(post.date) + "/" + toMonthRoute(post.date) + "/" + post.slug)
    })
    // Get all category routes
    categorySet.forEach(category => {
      workRoutes.push("/blog/category/" + category)
      workRoutes.push("/en/blog/category/" +category)
    })
    // Get all pages
    for (let page = 2; page <= pageNumber; page++) {
      workRoutes.push("/blog/page/" + page)
      workRoutes.push("/en/blog/page/" + page)
    }
    // workRoutes.push("/2022/1/human-design-g-center-not-define-2")
    return workRoutes
}

const seoSetting = {}
seoSetting.title = "Own Influence Creative Theme"
seoSetting.description = "A creative front-end design theme by Mina."
seoSetting.image = "~/static/favicon.jpg"

export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  router:{
    // Staging setting
    // base: '/staging/'
    base: '/'
    },
    generate: {
      fallback: true,
      routes: createRoutes
    },
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
