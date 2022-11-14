<template>

<div>
  <MyOwnInfluenceBlogHeader/>

  <!-- languages to filter + buttons -->
 
  <section class="text-gray-600 body-font">
  <div class="container py-12 mx-auto">
        <div class="flex flex-wrap">
      <div class="p-2">
        <div class="mx-auto flex flex-wrap bg-white">
            <!-- Left Side -->
          <div class="lg:w-2/3 w-full lg: h-full object-cover object-center bg-cover">
            <div class="px-3">

            <div class="mb-10 border border-solid py-4">
              <p class="font-bold text-center text-gray grid-subtitle text-md">CATEGORY POSTS</p>
              <p class="text-center tracking-widest text-md font-medium post-category">{{ categoryName }}</p>
            </div>

            <div class="flex flex-wrap">
      
            <nuxt-i18n-link
              v-for="post in posts"
              :key="post.path"
              class="xl:w-1/4 md:w-1/3 sm: w-1/2 p-2 blog-link-style"
              :to="`/${toYearName(post.date)}/${toMonthRoute(post.date)}/${post.slug}`"
            >
            <div class="">
              <div class="bg-white rounded-lg border border-solid">
                <div class="text-2xl text-center text-gray-600 font-medium font-voll date-day-font-size mt-3 mb-2">{{ toDayName(post.date) }}</div>
                <h2 class="text-lg text-center text-gray-600 font-medium title-font font-voll mb-4">{{ toMonthName(post.date).substring(0, 3) }}. {{ toYearName(post.date) }}</h2>
                <img class="h-32 w-full object-cover object-center mb-6 border border-solid" v-if="post.featuredpath" :src="post.featuredpath + '/' + post.featured" alt="content">
                <div class="h-32 w-full mb-6 border border-solid bg-slate-100" v-else></div>
                <!-- <img class="h-full w-full object-cover object-center mb-6 border border-solid" v-else src="https://dummyimage.com/700x400/c4c0c4/fffaff" alt="content"> -->
                <h3 class="tracking-widest text-pink-500 text-xs font-medium title-font px-6 post-category font-fondamento break-all">{{ post.categories[0] }}</h3>
                <h3 class="tracking-widest text-pink-500 text-xs font-medium title-font px-6 pb-2 post-category font-fondamento break-all">{{ post.categories[1] }}</h3>
                <h2 class="text-sm text-gray-900 font-medium title-font px-6 py-1 font-fondamento break-all">{{ post.title.substring(0, 20) }}</h2>
                <p class="leading-relaxed text-sm text-gray-600 px-6 pb-4 font-voll break-all" v-if="post.description" >{{ post.description.substring(0, 20) }}</p>
                <p class="leading-relaxed text-sm text-gray-600 px-6 pb-4 font-voll" v-else></p>
              </div>
            </div>
            </nuxt-i18n-link>
            </div>
          </div>
          </div>
            <!-- Right Side -->
          <div class="lg:w-1/3 w-full lg:h-auto lg: mt-6 lg:mt-0">
        <div class="px-3">
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
    // console.log(params)
    var categoryName = params['name']
    const posts = await $content('posts').where({ status: { $eq: 'published' }, categories: { $contains: categoryName }}).sortBy('date', 'desc').fetch()
    // console.log(posts)
    
    const articles = await $content('posts').only(['categories']).where({ status: { $eq: 'published' } }).fetch()
    // console.log(articles) 

    // const top_posts = articles.slice(0, 9)
    // console.log(top_posts) 

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

    // console.log(categories);
    return { categoryName: categoryName, posts, categories }
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
    toMonthRoute(date) {
      const options = { month: "numeric", };
      const num = new Date(date).toLocaleDateString("en", options);
      return (num < 10) ? '0' + num.toString() : num.toString();
    },
    toYearName(date) {
      const options = { year: 'numeric', }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
}

</script>
