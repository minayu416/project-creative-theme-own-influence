<template>
    <nav>
        <div class="absolute top-0 left-0 px-2 py-2 z-10 header-navbar">
            <!-- Desktop Menu -->
            <div class="px-6">
            <div class="mx-auto">
                <div class="flex">
                <div class="flex space-x-4">
                    <div class="hidden md:flex items-center space-x-1 header-navbar-menu">
                    <nuxt-i18n-link to="/about" class="py-4 px-3">{{ $t('navbar.about.title') }}</nuxt-i18n-link>
                    <nuxt-i18n-link to="/" class="py-4 px-3">{{ $t('navbar.home.title') }}</nuxt-i18n-link>
                    <nuxt-i18n-link to="/blog" class="py-4 px-3">{{ $t('navbar.blog.title') }}</nuxt-i18n-link>
                    <nuxt-i18n-link to="/portfolio" class="py-4 px-3">{{ $t('navbar.portfolio.title') }}</nuxt-i18n-link>
                    <nuxt-i18n-link to="/contact" class="py-4 px-3">{{ $t('navbar.contact.title') }}</nuxt-i18n-link>
                    </div>
                </div>

                <div class="md:hidden flex items-center">
                    <button @click="toggle()" class="pt-4 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
                </div>
            </div>
            </div>

            <!-- Mobile Menu -->
            <div class="md:hidden absolute w-full rounded header-mobile-menu" :class="{ hidden: showMobileMenu }">
                <nuxt-i18n-link to="/about" class="block py-3 px-4">{{ $t('navbar.about.title') }}</nuxt-i18n-link>
                <nuxt-i18n-link to="/" class="block py-3 px-4">{{ $t('navbar.home.title') }}</nuxt-i18n-link>
                <nuxt-i18n-link to="/blog" class="block py-3 px-4">{{ $t('navbar.blog.title') }}</nuxt-i18n-link>
                <nuxt-i18n-link to="/portfolio" class="block py-3 px-4">{{ $t('navbar.portfolio.title') }}</nuxt-i18n-link>
                <nuxt-i18n-link to="/contact" class="block py-3 px-4">{{ $t('navbar.contact.title') }}</nuxt-i18n-link>
                <div class="block py-3 px-4">
                    <nuxt-link :to="switchLocalePath('tw')" class="py-4 px-2">中文</nuxt-link>
                    /
                    <nuxt-link :to="switchLocalePath('en')" class="py-4 px-2">EN</nuxt-link>
                </div>
            </div>
        </div>

        <div class="absolute top-0 right-0 px-2 py-2 z-10">
            <div class="px-6">
            <div class="mx-auto">
                <div class="flex">
                <div class="flex space-x-4">
                    <div class="hidden md:flex items-center space-x-1 header-navbar-menu">
                    <nuxt-link :to="switchLocalePath('tw')" class="py-4 px-2">中文</nuxt-link>
                    <nuxt-link :to="switchLocalePath('en')" class="py-4 px-2">EN</nuxt-link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
</template>

<script>
export default {
    data() {
    return { 
        showMobileMenu: true
        }
  },
    // Close Menu by click outside
    created() {
        window.addEventListener('click', this.close)
    },

    beforeDestroy() {
        window.removeEventListener('click', this.close)
    },

    methods: {
        toggle() {
        this.showMobileMenu = ! this.showMobileMenu
        },

        close(e) {
        if (! this.$el.contains(e.target)){
            this.showMobileMenu = true
        }
        }
    }
}
</script>