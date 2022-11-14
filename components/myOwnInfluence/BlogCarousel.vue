<template>
    <div id="carouselExampleCaptions" class="carousel slide relative border border-solid blog-carousel-height" data-bs-ride="carousel">
        <MyOwnInfluenceBlogCarouselIndicator/>
            <div class="carousel-inner relative w-full overflow-hidden">
                <div v-for= "(slide, i) in slides" :key="i" :class="slide.class">
                <img
                    :src="slide.image"
                    class="block object-cover w-full blog-carousel-img"
                    alt="..."
                />
                <div class="carousel-caption md:block text-center">
                    <p class="pt-5 pb-3 text-center tracking-widest text-sm font-medium post-category font-fondamento">{{ slide.topic }}</p>
                    <nuxt-i18n-link class="blog-link-style" :to="slide.link">
                    <p class="pb-2 font-bold text-center grid-subtitle text-md font-fondamento px-4 pb-2 text-black">{{ slide.title }}</p>
                    <p class="pb-2 text-center italic tracking-wider font-mario text-gray-600 text-sm">{{ slide.content }}</p>
                    </nuxt-i18n-link>
                </div>
                </div>
            </div>
        <MyOwnInfluenceBlogCarouselController/>
    </div>
</template>

<script>

export default {
    name: "Blog",
    data: () => ({
        slides: [
        {
            class: "carousel-item active relative float-left w-full",
            topic: "Post",
            title: 'Human Design',
            content: 'Posted on Jan 16, 2021',
            link: "#",
            image: "https://minayu0416.files.wordpress.com/2021/01//screen-shot-2021-01-16-at-8.18.07-pm.png"
        },
        {
            class: "carousel-item relative float-left w-full",
            topic: "Post",
            title: 'The Future Path of Job',
            content: 'Posted on Feb 25, 2022',
            link: "#",
            image: "https://minayu0416.files.wordpress.com/2020/12//img.jpg"
        },
        {
            class: "carousel-item relative float-left w-full",
            topic: "Category",
            title: 'Language Learning',
            content: '紀錄學習各種語言的小故事。',
            link: "#",
            image: require('~/static/img/carousel/index-block-language.jpg')
        },
        {
            class: "carousel-item relative float-left w-full",
            topic: "Post",
            title: 'Remember to love yourself!',
            content: '在愛自己的道路上，我們一起努力！',
            link: "#",
            image: "https://minayu0416.files.wordpress.com/2019/02//1549967160772167437065539621526.jpg"
        },
        {
            class: "carousel-item relative float-left w-full",
            topic: "Category",
            title: 'Travel Diary',
            content: '每一刻，都是如此美麗。',
            link: "#",
            image: require('~/static/img/carousel/index-block-travel.jpg')
        }
        ]
    })

}

</script>