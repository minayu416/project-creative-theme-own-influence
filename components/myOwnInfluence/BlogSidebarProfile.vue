<template>
<div>
    <div class="mb-10 border border-solid py-4">
                    <p class="font-bold text-center text-gray grid-subtitle text-md">ABOUT ME</p>
                </div>
                <div class="flex items-center justify-center">
                <img class="object-cover rounded-full" width="175" height="175" src="~/static/img/block/img_9342.jpeg" alt="Author Profile"/>
                </div>
                <p class="leading-relaxed text-md text-center pt-3 pb-3 px-2 motto-block">
                  {{ $t('blog.SidebarProfile') }}
                  </p>
                  <p class="leading-relaxed text-2xl text-center pt-1 pb-4 motto-block">
                  @MinaYu Signed
                  </p>

            <!-- Icons -->

            <div class="border border-solid py-4">
                <p class="font-bold text-center text-gray grid-subtitle text-md">BLOG STATS</p>
            </div>
            <!-- busuanzi -->
                <div class="my-5 pl-5 font-bold font-voll">
                        <p class="pb-2">Visits: 9,231 (test number)</p>
                        <p>Visitors: 5,724 (test number)</p>
                </div>
            </div>
</template>

<script>
export default {
}

</script>