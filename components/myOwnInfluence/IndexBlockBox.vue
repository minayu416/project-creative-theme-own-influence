<template>
          <!-- 浮動, 彈跳 Effect -->
      <div class="bg-gray-100 index-block-box">
        <h1 class="font-bold text-center grid-title">{{ $t('index.feature') }}</h1>
        
        <div class="pt-8 pb-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 post-list">
        
        <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
          <nuxt-i18n-link to="/blog">
            <img class="brightness-75 object-cover w-full h-full" src="~/static/img/20180219_190126_0040.jpeg" alt="Blog Block Grid"/>

            <div class="absolute bottom-0 left-0 px-6 py-4">
              <h4 class="mb-3 text-xl font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.blog.title') }}</h4>
              <p class="leading-normal text-gray-100 font-voll">{{ $t('index.IndexBlockBox.blog.description') }}</p>
            </div>
          </nuxt-i18n-link>
        </div>

        <div class="bg-gray-100 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 post-list">
              
              <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
                <nuxt-i18n-link to="/blog">
                  <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/snow_photo1.jpeg" alt="IT Category Block Grid"/>

                  <div class="absolute bottom-0 px-6 py-4 lg:px-6 lg:py-4 md:px-4 md:py-2">
                    <h4 class="mb-3 text-xl lg:text-xl md:text-base font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.itthings.title') }}</h4>
                    <p class="leading-normal text-base lg:text-base md:text-xs text-gray-100 font-voll">{{ $t('index.IndexBlockBox.itthings.description') }}</p>
                  </div>
                </nuxt-i18n-link>
              </div>
              
              <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
                <nuxt-i18n-link to="/blog">
                  <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/index-block-travel.jpg" alt="Travel Category Block Grid"/>

                  <div class="absolute bottom-0 left-0 px-6 py-4 lg:px-6 lg:py-4 md:px-4 md:py-2">
                    <h4 class="mb-3 text-xl lg:text-xl md:text-base font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.travel.title') }}</h4>
                    <p class="leading-normal text-base lg:text-base md:text-xs text-gray-100 font-voll">{{ $t('index.IndexBlockBox.travel.description') }}</p>
                  </div>
                </nuxt-i18n-link>
              </div>
              
              <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
                <nuxt-i18n-link to="/blog">
                  <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/index-block-language.jpg" alt="Language Category Block Grid"/>

                  <div class="absolute bottom-0 left-0 px-6 py-4 lg:px-6 lg:py-4 md:px-4 md:py-2">
                    <h4 class="mb-3 text-xl lg:text-xl md:text-base font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.languages.title') }}</h4>
                    <p class="leading-normal text-base lg:text-base md:text-xs text-gray-100 font-voll">{{ $t('index.IndexBlockBox.languages.description') }}</p>
                  </div>
                </nuxt-i18n-link>
              </div>

              <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
                <nuxt-i18n-link to="/blog">
                  <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/index-block-fortune-telling.jpg" alt="Blog Category Block Grid"/>

                  <div class="absolute bottom-0 left-0 px-6 py-4 lg:px-6 lg:py-4 md:px-4 md:py-2">
                    <h4 class="mb-3 text-xl lg:text-xl md:text-base font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.fortune-telling.title') }}</h4>
                    <p class="leading-normal text-base lg:text-base md:text-xs text-gray-100 font-voll">{{ $t('index.IndexBlockBox.fortune-telling.description') }}</p>
                  </div>
                </nuxt-i18n-link>
              </div>
 
        </div>

        </div>

        <div class="bg-gray-100 rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 post-list">
        
            <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
              <nuxt-i18n-link to="/about">
                <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/img_9342.jpeg" alt="About Me Block Grid"/>

                <div class="absolute bottom-0 left-0 px-6 py-4 lg:px-6 lg:py-4 md:px-4 md:py-2">
                  <h4 class="mb-3 text-xl lg:text-xl md:text-base font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.about.title') }}</h4>
                  <p class="leading-normal text-base lg:text-base md:text-xs text-gray-100 font-voll">{{ $t('index.IndexBlockBox.about.description') }} </p>
                </div>
              </nuxt-i18n-link>
            </div>
            
            <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
              <nuxt-i18n-link to="/blog">
                <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/snow_photo2.jpeg" alt="Miri Block Grid"/>

                <div class="absolute bottom-0 left-0 px-6 py-4 lg:px-6 lg:py-4 md:px-4 md:py-2">
                  <h4 class="mb-3 text-xl lg:text-xl md:text-base font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.miri.title') }}</h4>
                  <p class="leading-normal text-base lg:text-base md:text-xs text-gray-100 font-voll">{{ $t('index.IndexBlockBox.miri.description') }}</p>
                </div>
              </nuxt-i18n-link>
            </div>
            
            <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
              <nuxt-i18n-link to="/portfolio">
                <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/img_8997.jpeg" alt="Portfolio Block Grid"/>

                <div class="absolute bottom-0 left-0 px-6 py-4 lg:px-6 lg:py-4 md:px-4 md:py-2">
                  <h4 class="mb-3 text-xl lg:text-xl md:text-base font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.portfolio.title') }}</h4>
                  <p class="leading-normal text-base lg:text-base md:text-xs text-gray-100 font-voll">{{ $t('index.IndexBlockBox.portfolio.description') }}</p>
                </div>
              </nuxt-i18n-link>
            </div>
            
            <div class="relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95">
              <nuxt-i18n-link to="/#">
                <img class="brightness-75 object-cover w-full h-full" src="~/static/img/block/index-block-category.jpg" alt="Resume Block Grid"/>

                <div class="absolute bottom-0 left-0 px-6 py-4 lg:px-6 lg:py-4 md:px-4 md:py-2">
                  <h4 class="mb-3 text-xl lg:text-xl md:text-base font-semibold tracking-tight text-white font-fondamento">{{ $t('index.IndexBlockBox.resume.title') }}</h4>
                  <p class="leading-normal text-base lg:text-base md:text-xs text-gray-100 font-voll">{{ $t('index.IndexBlockBox.resume.description') }}</p>
                </div>
              </nuxt-i18n-link>
            </div>
 
          </div>
        </div>

        <div class="relative overflow-hidden rounded-lg">
          <!-- <a href="/#">  -->
            <img class="brightness-75 object-cover w-full h-full" src="https://dummyimage.com/500x500/d1d1d1/d1d1d1" alt="Sample Block Grid"/>

            <div class="absolute bottom-0 left-0 px-6 py-4">
              <h4 class="mb-3 text-xl font-semibold tracking-tight text-white font-fondamento"></h4>
              <p class="leading-normal text-gray-100 font-voll">{{ $t('index.IndexBlockBox.tobecontinue.description') }}</p>
            </div>
          <!-- </a> -->
        </div>

        </div>
        </div>
      </div>
</template>
