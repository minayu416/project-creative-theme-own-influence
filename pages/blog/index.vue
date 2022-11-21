<template>

<div>
  <MyOwnInfluenceBlogHeader/>
  <!-- TODO: languages to filter + buttons -->
 
  <section class="text-gray-600 body-font">
  <div class="container py-12 mx-auto">
        <div class="flex flex-wrap">
      <div class="p-2">
        <div class="mx-auto flex flex-wrap bg-white">
            <!-- Left Side -->
          <div class="lg:w-2/3 w-full lg: h-full object-cover object-center bg-cover">
            <div class="px-3">

            <div class="mb-10 border border-solid py-4">
                <p class="font-bold text-center text-gray grid-subtitle text-md">FEATURED</p>
            </div>
          <!-- Carousel -->
            <div class="mb-10 py-4 px-4">
                <MyOwnInfluenceBlogCarousel/>
            </div>
            
            <!-- LATEST POSTS -->
            <div class="mb-10 border border-solid py-4">
                <p class="font-bold text-center text-gray grid-subtitle text-md">LATEST POSTS</p>
            </div>
            <div class="flex flex-wrap">
      
            <nuxt-i18n-link
              v-for="article in articles"
              :key="article.path"
              class="xl:w-1/4 md:w-1/3 sm: w-1/2 p-2 blog-link-style"
              :to="`/${toYearName(article.date)}/${toMonthRoute(article.date)}/${article.slug}`"
            >
            <div class="">
              <div class="bg-white rounded-lg border border-solid">
                <div class="text-2xl text-center text-gray-600 font-medium font-voll date-day-font-size mt-3 mb-2">{{ toDayName(article.date) }}</div>
                <h2 class="text-lg text-center text-gray-600 font-medium title-font font-voll mb-4">{{ toMonthName(article.date).substring(0, 3) }}. {{ toYearName(article.date) }}</h2>
                <img class="h-32 w-full object-cover object-center mb-6 border border-solid" v-if="article.featuredpath" :src="article.featuredpath + '/' + article.featured" alt="content">
                <div class="h-32 w-full mb-6 border border-solid bg-slate-100" v-else></div>
                <!-- <img class="h-full w-full object-cover object-center mb-6 border border-solid" v-else src="https://dummyimage.com/700x400/c4c0c4/fffaff" alt="content"> -->
                <h3 class="tracking-widest text-pink-500 text-xs font-medium title-font px-6 post-category font-fondamento break-all">{{ article.categories[0] }}</h3>
                <!-- <h3 class="tracking-widest text-pink-500 text-xs font-medium title-font px-6 pb-2 post-category break-all">{{ article.categories[1] }}</h3> -->
                <h2 class="text-sm text-gray-900 font-medium title-font px-6 py-1 font-fondamento break-all">{{ article.title.substring(0, 20) }}</h2>
                <p class="leading-relaxed text-sm text-gray-600 px-6 pb-4 font-voll break-all" v-if="article.description" >{{ article.description.substring(0, 20) }}</p>
                <p class="leading-relaxed text-sm text-gray-600 px-6 pb-4 font-voll" v-else></p>
              </div>
            </div>
            </nuxt-i18n-link>
            </div>

            <!-- Pagination -->

            <section id="next" v-if="nextPage" class="py-8 pl-2">
              <div class="inline-flex items-center py-3 px-5 mr-3 text-sm font-medium text-gray-300 bg-white border border-gray-300 tracking-wider font-fondamento cursor-default">
                  <!-- <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg> -->
                  PREVIOUS PAGE
              </div>
              <nuxt-i18n-link to="/blog/page/2" class="blog-link-style">
                <div class="inline-flex items-center py-3 px-5 text-sm font-medium text-gray-500 bg-white border border-gray-300 tracking-wider font-fondamento">
                  NEXT PAGE
                  <!-- <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg> -->
                </div>
              </nuxt-i18n-link>
            </section>



          </div>
          </div>
            <!-- Right Side -->
          <div class="lg:w-1/3 w-full lg:h-auto lg: mt-6 lg:mt-0">
            <div class="px-3">
            <!-- Profile -->
            <MyOwnInfluenceBlogSidebarProfile/>

            <!-- Category -->
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

            <!-- <div class="mb-10 border border-solid py-4 mt-4">
                <p class="font-bold text-center text-gray grid-subtitle text-md">NEW POSTS</p>
            </div> -->
            <!-- 9宮格 -->
              <!-- <div class="flex flex-wrap">
                  <nuxt-i18n-link
                  v-for="post in top_posts"
                  :key="post.title"
                  class="xl:w-1/3 md:w-1/3 blog-link-style"
                  :to="post.path">
                <div class="">
                  <div class="bg-white">
                    <img class="h-full w-full object-cover object-center border border-solid" v-if="post.featuredpath" :src="post.featuredpath + '/' + post.featured" alt="content">
                    <div class="h-full w-full border border-solid" v-else>{{ post.title.substring(0, 10) }}</div>
                  </div>
                </div>
                </nuxt-i18n-link>
                </div> -->

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
import 'tw-elements';

export default {
    name: "Blog",
    async asyncData({ $content }) {
        //const { $content } = context;
        // Query blog posts
        const tenArticles = await $content("posts").where({ status: { $eq: "published" } }).sortBy("date", "desc").limit(11).fetch();
        // console.log(articles);
        // const top_posts = articles.slice(0, 9);
        // console.log(top_posts);
        
        // Calculate page
        const nextPage = tenArticles.length === 11
        const articles = nextPage ? tenArticles.slice(0, -1) : tenArticles
        
        // Calculate category
        const articleCategory = await $content("posts").only(['categories']).where({ status: { $eq: "published" } }).fetch();
        
        var categories = {};
        for (var i = 0; i < articleCategory.length; i++) {
          // first-level category title
            if (categories.hasOwnProperty(articleCategory[i].categories[0])) {
              // sub-level category title
                if (categories[articleCategory[i].categories[0]]["sub"].hasOwnProperty(articleCategory[i].categories[1])) {
                    categories[articleCategory[i].categories[0]]["sub"][articleCategory[i].categories[1]] += 1;
                    categories[articleCategory[i].categories[0]]["count"] += 1;
                }
                else {
                    categories[articleCategory[i].categories[0]]["sub"][articleCategory[i].categories[1]] = 1;
                    categories[articleCategory[i].categories[0]]["count"] += 1;
                }
            }
            else {
                categories[articleCategory[i].categories[0]] = {};
                categories[articleCategory[i].categories[0]]["count"] = 1;
                categories[articleCategory[i].categories[0]]["sub"] = {};
                categories[articleCategory[i].categories[0]]["sub"][articleCategory[i].categories[1]] = 1;
            }
        }
        // console.log(categories);

        return {
            nextPage,
            articles,
            categories
            // top_posts,
        };
    },
    methods: {
        toDayName(date) {
            const options = { day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        },
        toMonthName(date) {
            const options = { month: "long", };
            return new Date(date).toLocaleDateString("en", options);
        },
        toMonthRoute(date) {
            const options = { month: "numeric", };
            const num = new Date(date).toLocaleDateString("en", options);
            return (num < 10) ? '0' + num.toString() : num.toString();
        },
        toYearName(date) {
            const options = { year: "numeric", };
            return new Date(date).toLocaleDateString("en", options);
        }
    }

}

</script>
