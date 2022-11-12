<template>
    <header>
    <div class="w-full h-full">
    <div class="relative overflow-hidden">
	<img class="object-cover w-full header-image-size" :src="imageUrl" alt="Flower and sky"/>
    
	<div>
        <MyOwnInfluenceNavbar/>
        <div class="absolute px-2 py-2 site-branding">
          <div class="site-title">
            <p>
              <nuxt-i18n-link to="/">Own Influence</nuxt-i18n-link>
              </p>
          </div>
            <div class="site-description">
            <p>A creative front-end design theme by Mina.</p>
          </div>
          </div>

        </div>
	</div>
  </div>
  </header>
</template>


<script>
export default {
    props: {
    imageUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
