<template>
<div>

  <MyOwnInfluenceHeader :image-url="require('~/static/img/img_8974.jpg')" />

  <section class="text-gray-600 body-font relative">
  <div class="container px-4 py-24 mx-auto">
    <div class="bg-white px-5 py-24">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-black grid-title">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base motto-block">{{ $t('contact.description') }}</p>
    </div>

    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">

      <div class="p-2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <!-- <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"> -->
          <div class="rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="80" height="80"
              viewBox="0 0 48 48"
              style=" fill:#000000;">
              <path fill="#1e88e5" d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"></path>
              <path fill="#fff" d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"></path></svg>
          </div>

          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">E-mail</h2>
            <p class="text-blue-500 break-all">example@gmail.com</p>
          </div>
        </div>
      </div>

            <div class="p-2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <!-- <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"> -->
          <div class="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="80" height="80"
viewBox="0 0 48 48"
style=" fill:#000000;"><path fill="#0078d4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path d="M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18	c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12	c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z" opacity=".05"></path><path d="M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534	c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5	c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489	c0,1.459-1.057,2.511-2.512,2.511H15.966z" opacity=".07"></path><path fill="#fff" d="M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13	c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5	c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z"></path></svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">LinkedIn</h2>
            <a href="#" class="text-blue-500 break-all">https://www.linkedin.com/in/example/</a>
          </div>
        </div>
      </div>

        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">

          <p class="leading-normal my-2 motto-block">
            {{ $t('contact.description1') }}
          </p>

        </div>
      </div>
    </div>
    </div>
  </div>
</section>
  <MyOwnInfluenceFooter/>
</div>
</template>
