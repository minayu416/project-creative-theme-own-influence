<template>
<div>
    <div class="mb-10 border border-solid py-4">
                    <p class="font-bold text-center text-gray grid-subtitle text-md">ABOUT ME</p>
                </div>
                <div class="flex items-center justify-center">
                <img class="object-cover rounded-full" width="175" height="175" src="~/static/img/logo.jpg" alt="Author Profile"/>
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
                    <span id="busuanzi_container_site_pv">
                        <p class="pb-2">Visits: <span id="busuanzi_value_site_pv"></span></p>
                    </span>
                    <span id="busuanzi_container_site_uv">
                        <p>Visitors: <span id="busuanzi_value_site_uv"></span></p>
                    </span>
                </div>
            </div>
</template>

<script>
export default {
}

</script>