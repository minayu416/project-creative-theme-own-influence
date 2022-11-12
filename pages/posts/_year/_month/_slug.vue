<template>

<div>
  <MyOwnInfluenceBlogHeader/>
 
  <section class="text-gray-600 body-font">
  <div class="container py-12 mx-auto">
      <!-- TODO: Fix post over website size-->
      <!-- <div class="flex flex-wrap"> -->
      <div class="flex-wrap">
      <div class="p-2">
        <div class="mx-auto flex flex-wrap bg-white">
          <div class="lg:w-2/3 w-full lg: h-full object-cover object-center bg-cover">
            <div class="px-4">

            <div class="mb-10 border border-solid py-4">
              <nuxt-i18n-link class="blog-link-style" :to="`/blog/category/${post.categories[0]}`">
                <p class="text-center tracking-widest text-md font-medium post-category">{{ post.categories[0] }}</p>
              </nuxt-i18n-link>
              <nuxt-i18n-link class="blog-link-style" :to="`/blog/category/${post.categories[1]}`">
                <p class="text-center tracking-widest text-md font-medium pb-2 post-category">{{ post.categories[1] }}</p>
              </nuxt-i18n-link>
              <p class="font-bold text-center text-gray grid-subtitle text-md font-fondamento px-4 pb-2">{{ post.title }}</p>
              <p class="text-center test-gray italic tracking-wider font-mario">Posted on {{ toMonthName(post.date).substring(0, 3) }} {{ toDayName(post.date) }}, {{ toYearName(post.date) }}</p>
            </div>

            <!-- TODO: Fix post over website size-->
            <!-- <div class="flex flex-wrap"> -->
            <div class="flex-wrap">
              <img class="h-full w-full object-cover object-center mb-6 border border-solid" v-if="post.featuredpath" :src="post.featuredpath + '/' + post.featured" alt="content">
            <article class="prose prose-slate">
            <nuxt-content :document="post" />
            </article>
            </div>

            <!-- Disqus -->
            <!-- <div class="mt-20 mb-10 border border-solid py-4">
              <p class="font-bold text-center text-gray grid-subtitle text-md font-fondamento px-4">{{ $t('blog.comments.title') }}</p>
            </div> -->

            <!-- <div class="mb-10 border border-solid p-4">
              <details> -->
              <!-- html summary tag is used here -->
              <!-- <summary class="font-bold text-center text-gray grid-subtitle text-md font-fondamento px-4 pb-2 cursor-pointer blog-link-style">{{ $t('blog.comments.description') }}</summary>
              <div class="comments">
                <Disqus />
              </div>
              </details>
            </div> -->


          </div>
          </div>
            <!-- Right Side -->
          <div class="lg:w-1/3 w-full lg:h-auto lg: mt-6 lg:mt-0">
        <div class="px-4">
        <!-- Profile -->
        <MyOwnInfluenceBlogSidebarProfile/>

        <div class="mb-5 border border-solid py-4">
            <p class="font-bold text-center text-gray grid-subtitle text-md">CATEGORY</p>
        </div>

        <div :key="main.id" v-for="(value, main) in categories" class="px-5">
          <nuxt-i18n-link :key="main" class="blog-link-style" :to="`/blog/category/${main}`">
            <div class = "py-3 text-sm border-b border-solid font-fondamento">{{ main }}
            <span class="font-color-gold-1">({{ value.count }})</span>
            </div>
          </nuxt-i18n-link>
          <div :key="category.id" v-for="(count, category) in categories[main].sub">
          <nuxt-i18n-link :key="main" :to="`/blog/category/${category}`">
            <div class="py-3 pl-6 text-sm border-b border-solid font-color-black-1 font-fondamento">{{ category }} 
              <span class="font-color-gold-1">({{ count }})</span>
            </div>
          </nuxt-i18n-link>
          </div>
        </div>

        <div class="mb-10 border border-solid py-4 mt-10">
            <p class="font-bold text-center text-gray grid-subtitle text-md">GALLERY</p>
        </div>

        </div>
          </div>
        </div>


      </div>
    </div>


  
  </div>
</section>


<MyOwnInfluenceFooter/>
</div>


</template>

<script>
export default {
async asyncData ({ params, $content }) {
    let postGet
    // console.log(params)
    postGet = await $content('posts').where({ slug: { $eq: params.slug } }).fetch()
    const post = postGet[0]
    // console.log(post)
    const articles = await $content('posts').only(['categories']).where({ status: { $eq: 'published' } }).fetch()
    // console.log(articles) 

    var categories = {}
    for(var i = 0; i < articles.length; i++) {
    if (categories.hasOwnProperty(articles[i].categories[0])) {
      if (categories[articles[i].categories[0]]["sub"].hasOwnProperty(articles[i].categories[1])){
          categories[articles[i].categories[0]]["sub"][articles[i].categories[1]] += 1;
          categories[articles[i].categories[0]]["count"] += 1;
      } else {
        categories[articles[i].categories[0]]["sub"][articles[i].categories[1]] = 1;
        categories[articles[i].categories[0]]["count"] += 1;
      }
    } else {
      categories[articles[i].categories[0]] = {};
      categories[articles[i].categories[0]]["count"] = 1;
      categories[articles[i].categories[0]]["sub"] = {};
      categories[articles[i].categories[0]]["sub"][articles[i].categories[1]] = 1;
    }
    }
    
    if (post.hasOwnProperty("keywords")) {
      var keywords = post.keywords
      var seoKeywords = keywords.join()
      // console.log(keywords.join());
    } else {
      var seoKeywords = ""
    }

    var seoPhoto = null
    if (post.hasOwnProperty("keywords")) {
      if (post.featured !== "") {
        seoPhoto = post.featuredpath + post.featured
      } else {
        // Need to extract to env
        seoPhoto = "https://minayu.site/favicon.jpg"
      }
    } else {
      var seoKeywords = "https://minayu.site/favicon.jpg"
    }


    return { post, categories, postName: post.title, seoPhoto: seoPhoto,
            description: post.description, seoKeywords: seoKeywords}
},  
    methods: {
        toDayName(date) {
          const options = { day: 'numeric' }
          return new Date(date).toLocaleDateString('en', options)
        },
        toMonthName(date) {
          const options = { month: 'long', }
          return new Date(date).toLocaleDateString('en', options)
        },
        toYearName(date) {
          const options = { year: 'numeric', }
          return new Date(date).toLocaleDateString('en', options)
        }
    },
    head(){
      return{
        title: this.postName + ' - ' + this.$t('seo.title'),
          htmlAttrs: {
            lang: this.$i18n.locale,
          },
        meta: [
            { hid: 'description', name: 'description', content: this.description},
            { hid: 'keywords', name: 'keywords', content: this.seoKeywords },
            
            { hid: 'og:title'  , property: 'og:title' , content: this.postName },
            { hid: 'og:description' , property: 'og:description' , content: this.description },
            { hid: 'og:url' , property: 'og:url' , content: this.$t('seo.url') + $nuxt.$route.path + '/'},
            { hid: 'og:type' , property: 'og:type' , content: 'article'},
            { hid: 'og:image' , property: 'og:image' , content: this.seoPhoto },
            { hid: 'og:image:type' , property: 'og:image:type' , content: 'image/jpg'},
            { hid: 'og:locale' , property: 'og:locale' , content: this.$i18n.locale},

            // Twitter
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
            { hid: 'twitter:title', name: 'twitter:title', content: this.postName },
            { hid: 'twitter:description', name: 'twitter:description', content: this.description },
            { hid: 'twitter:image', name: 'twitter:image', content: this.seoPhoto },
            // itemprop
            { hid: 'itemprop:name' , itemprop: 'name' , content: this.postName },
            { hid: 'itemprop:description' , itemprop: 'description' , content: this.description },
        ]
      }
    }
}

</script>
