<template>
          <div>
        <section class="body-font font-voll">
            <div class="container px-4 py-12 mx-auto flex flex-wrap">
                <div class="bg-white">
                <div class="flex flex-col flex-wrap -mb-10 lg:w lg:text-left">
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <div class="flex-grow portfolio-timeline">
                      <ol class="relative border-l border-gray-700">                  
                          <li class="mb-10 ml-6">
                            <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>            
                              <time class="block mb-2 text-sm font-normal leading-none text-gray-500">{{ $t('portfolio.projects.project1.date') }}</time>
                              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">{{ $t('portfolio.projects.project1.title') }}
                              <span class="bg-orange-200 text-orange-700 text-sm font-medium px-2.5 py-0.5 rounded ml-3">{{ $t('portfolio.tags.selfProduct') }}</span>
                              <span class="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded ml-3">{{ $t('portfolio.tags.developing') }}</span>
                              <span class="bg-amber-200 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">{{ $t('portfolio.tags.release') }}</span>
                              </h3>
                              <p class="mb-4 text-base font-normal text-gray-400">
                                {{ $t('portfolio.projects.project1.description') }}<br>
                                {{ $t('portfolio.projects.project1.description1') }}
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Vue.js</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Nuxt.js</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                </p>
                              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg> View Website
                              </a>
                          </li>
                            <li class="mb-10 ml-6">
                              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div> 
                              <time class="block mb-2 text-sm font-normal leading-none text-gray-500">{{ $t('portfolio.projects.project2.date') }}</time>
                              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">{{ $t('portfolio.projects.project2.title') }}
                              <span class="bg-orange-200 text-orange-700 text-sm font-medium px-2.5 py-0.5 rounded ml-3">{{ $t('portfolio.tags.selfProduct') }}</span>
                              <span class="bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded ml-3">{{ $t('portfolio.tags.developing') }}</span>
                              <span class="bg-amber-200 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">{{ $t('portfolio.tags.release') }}</span>
                              </h3>
                              <p class="mb-4 text-base font-normal text-gray-400">
                                {{ $t('portfolio.projects.project2.description') }}
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Python</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#PostgreSQL</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                </p>
                              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg> Official Web
                              </a>
                            </li>

                          <li class="mb-10 ml-6">
                              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div> 
                              <time class="block mb-2 text-sm font-normal leading-none text-gray-500">{{ $t('portfolio.projects.project3.date') }}</time>
                              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">{{ $t('portfolio.projects.project3.title') }}<span class="bg-emerald-200 text-emerald-700 text-sm font-medium px-2.5 py-0.5 rounded ml-3">{{ $t('portfolio.tags.inCompany') }}</span></h3>
                              <p class="text-base font-normal text-gray-400">
                                {{ $t('portfolio.projects.project3.description') }}
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Python</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#MQTT</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                </p>
                          </li>

                            <li class="mb-10 ml-6">
                              <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div> 
                              <time class="block mb-2 text-sm font-normal leading-none text-gray-500">{{ $t('portfolio.projects.project14.date') }}</time>
                              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">{{ $t('portfolio.projects.project14.title') }}<span class="bg-fuchsia-200 text-fuchsia-700 text-sm font-medium px-2.5 py-0.5 rounded ml-3">{{ $t('portfolio.tags.inSchool') }}</span></h3>
                              <p class="mb-4 text-base font-normal text-gray-400">
                                {{ $t('portfolio.projects.project14.description') }}
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Python2</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Django</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                                <span class="bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded">#Skill</span>
                              </p>
                              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg> Demo
                              </a>

                              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg> View on Github
                              </a>
                          </li>
                      </ol>

                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>
      </div>
</template>