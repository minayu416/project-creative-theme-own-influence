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
            title: '[人類圖探討] 來說說G中心空白及未定義的心得感想',
            content: 'Posted on Jan 16, 2021',
            link: "/2021/01/human-design-g-center-not-define",
            image: "https://minayu0416.files.wordpress.com/2021/01//screen-shot-2021-01-16-at-8.18.07-pm.png"
        },
        {
            class: "carousel-item relative float-left w-full",
            topic: "Post",
            title: '兩年工作經驗的後端工程師技能樹與職涯發展 | 一年沒工作',
            content: 'Posted on Feb 25, 2022',
            link: "/2022/02/find-the-third-job",
            image: "https://minayu0416.files.wordpress.com/2020/12//img.jpg"
        },
        {
            class: "carousel-item relative float-left w-full",
            topic: "Category",
            title: '語言學習 Language Learning',
            content: '紀錄學習各種語言的小故事。',
            link: "/blog/category/語言相關%20LANGUAGE",
            image: require('~/static/img/carousel/index-block-language.jpg')
        },
        {
            class: "carousel-item relative float-left w-full",
            topic: "Post",
            title: '焦慮型依戀情人行為及思想分析以及如何改善(附上流程圖)',
            content: '在愛自己的道路上，我們一起努力！',
            link: "/2020/08/love-anxious-preoccupied-attachment-1-message",
            image: "https://minayu0416.files.wordpress.com/2019/02//1549967160772167437065539621526.jpg"
        },
        {
            class: "carousel-item relative float-left w-full",
            topic: "Category",
            title: '旅行日記 Travel Diary',
            content: '每一刻，都是如此美麗。',
            link: "/blog/category/%E6%97%85%E8%A1%8C%E6%97%A5%E8%A8%98%20Travel",
            image: require('~/static/img/carousel/index-block-travel.jpg')
        }
        ]
    })

}

</script>