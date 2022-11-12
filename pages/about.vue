
<template>

<div>

  <MyOwnInfluenceHeader :image-url="require('~/static/img/img_8973.jpg')" />
    
 
  <!-- site content -->
  <div class="w-full h-full bg-white">

    <div>
        <section class="body-font overflow-hidden border-b border-solid">
        <div class="container px-5 py-24 mx-auto">
            <h1 class="font-bold text-center pb-2 grid-title">FEATURED</h1>

            <div class="lg:mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0">
            <div class="bg-gray-100 rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 post-list">
        
            <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
              <nuxt-i18n-link to="/blog">
                <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/20180219_190126_0040.jpeg" alt="Blog Block Grid"/>

                <div class="absolute bottom-0 left-0 px-6 py-4">
                  <h4 class="mb-3 text-xl font-semibold tracking-tight text-white font-fondamento">{{ $t('about.IndexBlockBox.blog.title') }}</h4>
                  <p class="leading-normal text-gray-100 font-voll">{{ $t('about.IndexBlockBox.blog.description') }}</p>
                </div>
              </nuxt-i18n-link>
            </div>
            
            <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
              <nuxt-i18n-link to="/portfolio">
                <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/img_8997.jpeg" alt="Portfolio Block Grid"/>

                <div class="absolute bottom-0 left-0 px-6 py-4">
                  <h4 class="mb-3 text-xl font-semibold tracking-tight text-white font-fondamento">{{ $t('about.IndexBlockBox.portfolio.title') }}</h4>
                  <p class="leading-normal text-gray-100 font-voll">{{ $t('about.IndexBlockBox.portfolio.description') }}</p>
                </div>
              </nuxt-i18n-link>
            </div>
            
            <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
              <!-- TODO This needs have en/tw trasfer -->
              <a :href = "$t('resume.url')" >
                <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/index-block-category.jpg" alt="Resume Block Grid"/>

                <div class="absolute bottom-0 left-0 px-6 py-4">
                  <h4 class="mb-3 text-xl font-semibold tracking-tight text-white font-fondamento">{{ $t('about.IndexBlockBox.resume.title') }}</h4>
                  <p class="leading-normal text-gray-100 font-voll">{{ $t('about.IndexBlockBox.resume.description') }}</p>
                </div>
              </a>
            </div>

        </div>
            </div>
            </div>

            <div class="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0">
            <div class="site-branding-intro motto-block">
            <section class="text-gray-500 body-font">
              <div class="container px-5 mx-auto">
                <div class="w-full mx-auto text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-6 h-6 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed">
                    {{ $t('about.motto1') }}
                    </p>
                  <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-lg">Sign @MinaYu.</h2>
                </div>
              </div>
            </section>
            </div>
            </div>
            </div>
            </div>
      </section>
    </div>

    <div>
        <section class="body-font">
            <div class="container px-4 py-12 mx-auto flex flex-wrap">
                <div class="bg-white">
                <div class="flex flex-col flex-wrap -mb-10 lg:w lg:text-left">
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="flex-grow about-content">
                    <h1 class="font-bold text-center pb-2 grid-title text-black">ABOUT</h1>
                    <p class="text-center italic tracking-wider">Posted on May 23, 2022</p>

                    <div class="py-6">
                    <h2 class="text-gray-900 text-xl title-font font-medium article-title">{{ $t('about.introduction.question1.title') }}</h2>
                    <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-2 mb-6"></span>
                    <p class="leading-relaxed text-base motto-block font-voll">

                        {{ $t('about.introduction.question1.description') }}
                        <br>
                        <br>
                        {{ $t('about.introduction.question1.description2') }}
                        <br>
                        {{ $t('about.introduction.question1.description3') }}
                        <br>
                        {{ $t('about.introduction.question1.description4') }}
                        <br>
                        <br>
                        {{ $t('about.introduction.question1.description5') }}
                        <br>
                        <br>
                        {{ $t('about.introduction.question1.description6') }}
                        </p>
                    </div>

                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>

    </div>

  </div>

  <MyOwnInfluenceFooter/>
</div>

</template>
