(window.webpackJsonp=window.webpackJsonp||[]).push([[5,10],{354:function(t,l,e){"use strict";e.r(l);var n={data:function(){return{showMobileMenu:!0}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{toggle:function(){this.showMobileMenu=!this.showMobileMenu},close:function(t){this.$el.contains(t.target)||(this.showMobileMenu=!0)}}},o=e(57),component=Object(o.a)(n,(function(){var t=this,l=t._self._c;return l("nav",[l("div",{staticClass:"absolute top-0 left-0 px-2 py-2 z-10 header-navbar"},[l("div",{staticClass:"px-6"},[l("div",{staticClass:"mx-auto"},[l("div",{staticClass:"flex"},[l("div",{staticClass:"flex space-x-4"},[l("div",{staticClass:"hidden md:flex items-center space-x-1 header-navbar-menu"},[l("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/about"}},[t._v(t._s(t.$t("navbar.about.title")))]),t._v(" "),l("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/"}},[t._v(t._s(t.$t("navbar.home.title")))]),t._v(" "),l("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/blog"}},[t._v(t._s(t.$t("navbar.blog.title")))]),t._v(" "),l("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("navbar.portfolio.title")))]),t._v(" "),l("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/contact"}},[t._v(t._s(t.$t("navbar.contact.title")))])],1)]),t._v(" "),l("div",{staticClass:"md:hidden flex items-center"},[l("button",{staticClass:"pt-4 px-2",on:{click:function(l){return t.toggle()}}},[l("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"}})])])])])])]),t._v(" "),l("div",{staticClass:"md:hidden absolute w-full rounded header-mobile-menu",class:{hidden:t.showMobileMenu}},[l("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/about"}},[t._v(t._s(t.$t("navbar.about.title")))]),t._v(" "),l("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/"}},[t._v(t._s(t.$t("navbar.home.title")))]),t._v(" "),l("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/blog"}},[t._v(t._s(t.$t("navbar.blog.title")))]),t._v(" "),l("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("navbar.portfolio.title")))]),t._v(" "),l("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/contact"}},[t._v(t._s(t.$t("navbar.contact.title")))]),t._v(" "),l("div",{staticClass:"block py-3 px-4"},[l("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("tw")}},[t._v("中文")]),t._v("\n                /\n                "),l("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1)],1)]),t._v(" "),l("div",{staticClass:"absolute top-0 right-0 px-2 py-2 z-10"},[l("div",{staticClass:"px-6"},[l("div",{staticClass:"mx-auto"},[l("div",{staticClass:"flex"},[l("div",{staticClass:"flex space-x-4"},[l("div",{staticClass:"hidden md:flex items-center space-x-1 header-navbar-menu"},[l("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("tw")}},[t._v("中文")]),t._v(" "),l("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1)])])])])])])}),[],!1,null,null,null);l.default=component.exports},360:function(t,l,e){t.exports=e.p+"img/20180219_190126_0040.87a6f5e.jpeg"},361:function(t,l,e){"use strict";e.r(l);var n={props:{imageUrl:{type:String,default:""}}},o=e(57),component=Object(o.a)(n,(function(){var t=this,l=t._self._c;return l("header",[l("div",{staticClass:"max-auto"},[l("div",{staticClass:"mx-auto flex flex-wrap border-b border-solid"},[l("div",{staticClass:"lg:w-1/2 w-full lg: h-full object-cover object-center bg-cover"},[l("div",{staticClass:"w-full h-full"},[l("div",{staticClass:"relative overflow-hidden"},[l("img",{staticClass:"object-cover w-full header-image-size",attrs:{src:e(360),alt:"Flower and sky"}}),t._v(" "),l("div",[l("MyOwnInfluenceNavbar"),t._v(" "),l("div",{staticClass:"absolute px-2 py-2 site-branding"},[l("div",{staticClass:"site-title"},[l("p",[l("nuxt-i18n-link",{attrs:{to:"/"}},[t._v("Own Influence")])],1)]),t._v(" "),t._m(0)])],1)])])]),t._v(" "),l("div",{staticClass:"lg:w-1/2 w-full lg:h-auto lg:py-6 mt-6 lg:mt-0"},[l("div",{staticClass:"blog-branding-intro motto-block"},[l("section",{staticClass:"text-gray-500 body-font"},[l("div",{staticClass:"container px-5 mx-auto"},[l("div",{staticClass:"w-full mx-auto text-center"},[l("svg",{staticClass:"inline-block w-6 h-6 text-gray-400 mb-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 975.036 975.036"}},[l("path",{attrs:{d:"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"}})]),t._v(" "),l("p",{staticClass:"leading-relaxed"},[t._v("\n                      "+t._s(t.$t("blog.motto1"))+"\n                    ")]),t._v(" "),l("span",{staticClass:"inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"}),t._v(" "),l("h2",{staticClass:"text-gray-900 font-medium title-font tracking-wider text-lg"},[t._v("Sign @MinaYu.")])])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"site-description"},[t("p",[this._v("A creative front-end design theme by Mina.")])])}],!1,null,null,null);l.default=component.exports;installComponents(component,{MyOwnInfluenceNavbar:e(354).default})}}]);