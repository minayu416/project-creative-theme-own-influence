(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,6,7,10],{354:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{showMobileMenu:!0}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{toggle:function(){this.showMobileMenu=!this.showMobileMenu},close:function(t){this.$el.contains(t.target)||(this.showMobileMenu=!0)}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("nav",[e("div",{staticClass:"absolute top-0 left-0 px-2 py-2 z-10 header-navbar"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex space-x-4"},[e("div",{staticClass:"hidden md:flex items-center space-x-1 header-navbar-menu"},[e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/about"}},[t._v(t._s(t.$t("navbar.about.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/"}},[t._v(t._s(t.$t("navbar.home.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/blog"}},[t._v(t._s(t.$t("navbar.blog.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("navbar.portfolio.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/contact"}},[t._v(t._s(t.$t("navbar.contact.title")))])],1)]),t._v(" "),e("div",{staticClass:"md:hidden flex items-center"},[e("button",{staticClass:"pt-4 px-2",on:{click:function(e){return t.toggle()}}},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"}})])])])])])]),t._v(" "),e("div",{staticClass:"md:hidden absolute w-full rounded header-mobile-menu",class:{hidden:t.showMobileMenu}},[e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/about"}},[t._v(t._s(t.$t("navbar.about.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/"}},[t._v(t._s(t.$t("navbar.home.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/blog"}},[t._v(t._s(t.$t("navbar.blog.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("navbar.portfolio.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/contact"}},[t._v(t._s(t.$t("navbar.contact.title")))]),t._v(" "),e("div",{staticClass:"block py-3 px-4"},[e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("tw")}},[t._v("中文")]),t._v("\n                /\n                "),e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1)],1)]),t._v(" "),e("div",{staticClass:"absolute top-0 right-0 px-2 py-2 z-10"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex space-x-4"},[e("div",{staticClass:"hidden md:flex items-center space-x-1 header-navbar-menu"},[e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("tw")}},[t._v("中文")]),t._v(" "),e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,n){"use strict";n.r(e);var o=n(57),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"bg-white border-t border-solid"},[e("div",{staticClass:"container px-5 mx-auto"},[e("div",{staticClass:"xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"})])]),t._v(" "),e("div",{staticClass:"bg-cyan-50 border-t border-solid"},[e("div",{staticClass:"text-gray-300 text-center text-md motto-block py-8 px-4"},[t._v("\n        Creative by MINA YU in 2022 Nov. Sign @MinaYu.\n      ")])])])}],!1,null,null,null);e.default=component.exports},356:function(t,e,n){t.exports=n.p+"img/img_9342.efa59e8.jpeg"},357:function(t,e,n){"use strict";var o=n(1),l=n(358);o({target:"String",proto:!0,forced:n(359)("sub")},{sub:function(){return l(this,"sub","","")}})},358:function(t,e,n){var o=n(6),l=n(33),r=n(19),c=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var v=r(l(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(r(o),c,"&quot;")+'"'),f+">"+v+"</"+e+">"}},359:function(t,e,n){var o=n(5);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},360:function(t,e,n){t.exports=n.p+"img/20180219_190126_0040.87a6f5e.jpeg"},361:function(t,e,n){"use strict";n.r(e);var o={props:{imageUrl:{type:String,default:""}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"max-auto"},[e("div",{staticClass:"mx-auto flex flex-wrap border-b border-solid"},[e("div",{staticClass:"lg:w-1/2 w-full lg: h-full object-cover object-center bg-cover"},[e("div",{staticClass:"w-full h-full"},[e("div",{staticClass:"relative overflow-hidden"},[e("img",{staticClass:"object-cover w-full header-image-size",attrs:{src:n(360),alt:"Flower and sky"}}),t._v(" "),e("div",[e("MyOwnInfluenceNavbar"),t._v(" "),e("div",{staticClass:"absolute px-2 py-2 site-branding"},[e("div",{staticClass:"site-title"},[e("p",[e("nuxt-i18n-link",{attrs:{to:"/"}},[t._v("Own Influence")])],1)]),t._v(" "),t._m(0)])],1)])])]),t._v(" "),e("div",{staticClass:"lg:w-1/2 w-full lg:h-auto lg:py-6 mt-6 lg:mt-0"},[e("div",{staticClass:"blog-branding-intro motto-block"},[e("section",{staticClass:"text-gray-500 body-font"},[e("div",{staticClass:"container px-5 mx-auto"},[e("div",{staticClass:"w-full mx-auto text-center"},[e("svg",{staticClass:"inline-block w-6 h-6 text-gray-400 mb-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 975.036 975.036"}},[e("path",{attrs:{d:"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"}})]),t._v(" "),e("p",{staticClass:"leading-relaxed"},[t._v("\n                      "+t._s(t.$t("blog.motto1"))+"\n                    ")]),t._v(" "),e("span",{staticClass:"inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"}),t._v(" "),e("h2",{staticClass:"text-gray-900 font-medium title-font tracking-wider text-lg"},[t._v("Sign @MinaYu.")])])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"site-description"},[t("p",[this._v("A creative front-end design theme by Mina.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MyOwnInfluenceNavbar:n(354).default})},362:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"mb-10 border border-solid py-4"},[t("p",{staticClass:"font-bold text-center text-gray grid-subtitle text-md"},[this._v("ABOUT ME")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center"},[t("img",{staticClass:"object-cover rounded-full",attrs:{width:"175",height:"175",src:n(356),alt:"Author Profile"}})])},function(){var t=this._self._c;return t("div",{staticClass:"border border-solid py-4"},[t("p",{staticClass:"font-bold text-center text-gray grid-subtitle text-md"},[this._v("BLOG STATS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-5 pl-5 font-bold font-voll"},[e("p",{staticClass:"pb-2"},[t._v("Visits: 9,231 (test number)")]),t._v(" "),e("p",[t._v("Visitors: 5,724 (test number)")])])}],l={},r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",{staticClass:"leading-relaxed text-md text-center pt-3 pb-3 px-2 motto-block"},[t._v("\n                  "+t._s(t.$t("blog.SidebarProfile"))+"\n                  ")]),t._v(" "),e("p",{staticClass:"leading-relaxed text-2xl text-center pt-1 pb-4 motto-block"},[t._v("\n                  @MinaYu Signed\n                  ")]),t._v(" "),t._m(2),t._v(" "),t._m(3)])}),o,!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);n(46),n(26),n(38),n(357);var o=n(7),l=(n(45),n(27),n(16),n(81),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,r,c,d,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,o=t.$content,l=n.name,e.next=4,o("posts").where({status:{$eq:"published"},categories:{$contains:l}}).sortBy("date","desc").fetch();case 4:return r=e.sent,e.next=7,o("posts").only(["categories"]).where({status:{$eq:"published"}}).fetch();case 7:for(c=e.sent,d={},i=0;i<c.length;i++)d.hasOwnProperty(c[i].categories[0])?d[c[i].categories[0]].sub.hasOwnProperty(c[i].categories[1])?(d[c[i].categories[0]].sub[c[i].categories[1]]+=1,d[c[i].categories[0]].count+=1):(d[c[i].categories[0]].sub[c[i].categories[1]]=1,d[c[i].categories[0]].count+=1):(d[c[i].categories[0]]={},d[c[i].categories[0]].count=1,d[c[i].categories[0]].sub={},d[c[i].categories[0]].sub[c[i].categories[1]]=1);return e.abrupt("return",{categoryName:l,posts:r,categories:d});case 11:case"end":return e.stop()}}),e)})))()},methods:{toDayName:function(t){return new Date(t).toLocaleDateString("en",{day:"numeric"})},toMonthName:function(t){return new Date(t).toLocaleDateString("en",{month:"long"})},toMonthRoute:function(t){var e=new Date(t).toLocaleDateString("en",{month:"numeric"});return e<10?"0"+e.toString():e.toString()},toYearName:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric"})}}}),r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("MyOwnInfluenceBlogHeader"),t._v(" "),e("section",{staticClass:"text-gray-600 body-font"},[e("div",{staticClass:"container py-12 mx-auto"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"p-2"},[e("div",{staticClass:"mx-auto flex flex-wrap bg-white"},[e("div",{staticClass:"lg:w-2/3 w-full lg: h-full object-cover object-center bg-cover"},[e("div",{staticClass:"px-3"},[e("div",{staticClass:"mb-10 border border-solid py-4"},[e("p",{staticClass:"font-bold text-center text-gray grid-subtitle text-md"},[t._v("CATEGORY POSTS")]),t._v(" "),e("p",{staticClass:"text-center tracking-widest text-md font-medium post-category"},[t._v(t._s(t.categoryName))])]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},t._l(t.posts,(function(n){return e("nuxt-i18n-link",{key:n.path,staticClass:"xl:w-1/4 md:w-1/3 sm: w-1/2 p-2 blog-link-style",attrs:{to:"/".concat(t.toYearName(n.date),"/").concat(t.toMonthRoute(n.date),"/").concat(n.slug)}},[e("div",{},[e("div",{staticClass:"bg-white rounded-lg border border-solid"},[e("div",{staticClass:"text-2xl text-center text-gray-600 font-medium font-voll date-day-font-size mt-3 mb-2"},[t._v(t._s(t.toDayName(n.date)))]),t._v(" "),e("h2",{staticClass:"text-lg text-center text-gray-600 font-medium title-font font-voll mb-4"},[t._v(t._s(t.toMonthName(n.date).substring(0,3))+". "+t._s(t.toYearName(n.date)))]),t._v(" "),n.featuredpath?e("img",{staticClass:"h-32 w-full object-cover object-center mb-6 border border-solid",attrs:{src:n.featuredpath+"/"+n.featured,alt:"content"}}):e("div",{staticClass:"h-32 w-full mb-6 border border-solid bg-slate-100"}),t._v(" "),e("h3",{staticClass:"tracking-widest text-pink-500 text-xs font-medium title-font px-6 post-category font-fondamento break-all"},[t._v(t._s(n.categories[0]))]),t._v(" "),e("h3",{staticClass:"tracking-widest text-pink-500 text-xs font-medium title-font px-6 pb-2 post-category font-fondamento break-all"},[t._v(t._s(n.categories[1]))]),t._v(" "),e("h2",{staticClass:"text-sm text-gray-900 font-medium title-font px-6 py-1 font-fondamento break-all"},[t._v(t._s(n.title.substring(0,20)))]),t._v(" "),n.description?e("p",{staticClass:"leading-relaxed text-sm text-gray-600 px-6 pb-4 font-voll break-all"},[t._v(t._s(n.description.substring(0,20)))]):e("p",{staticClass:"leading-relaxed text-sm text-gray-600 px-6 pb-4 font-voll"})])])])})),1)])]),t._v(" "),e("div",{staticClass:"lg:w-1/3 w-full lg:h-auto lg: mt-6 lg:mt-0"},[e("div",{staticClass:"px-3"},[e("MyOwnInfluenceBlogSidebarProfile"),t._v(" "),t._m(0),t._v(" "),t._l(t.categories,(function(n,main){return e("div",{key:main.id,staticClass:"px-5"},[e("nuxt-i18n-link",{key:main,staticClass:"blog-link-style",attrs:{to:"/blog/category/".concat(main)}},[e("div",{staticClass:"py-3 text-sm border-b border-solid font-fondamento"},[t._v(t._s(main)+"\n            "),e("span",{staticClass:"font-color-gold-1"},[t._v("("+t._s(n.count)+")")])])]),t._v(" "),t._l(t.categories[main].sub,(function(n,o){return e("div",{key:o.id},[e("nuxt-i18n-link",{key:main,attrs:{to:"/blog/category/".concat(o)}},[e("div",{staticClass:"py-3 pl-6 text-sm border-b border-solid font-color-black-1 font-fondamento"},[t._v(t._s(o)+" \n              "),e("span",{staticClass:"font-color-gold-1"},[t._v("("+t._s(n)+")")])])])],1)}))],2)})),t._v(" "),t._m(1)],2)])])])])])]),t._v(" "),e("MyOwnInfluenceFooter")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"mb-5 border border-solid py-4"},[t("p",{staticClass:"font-bold text-center text-gray grid-subtitle text-md"},[this._v("CATEGORY")])])},function(){var t=this._self._c;return t("div",{staticClass:"mb-10 border border-solid py-4 mt-10"},[t("p",{staticClass:"font-bold text-center text-gray grid-subtitle text-md"},[this._v("GALLERY")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MyOwnInfluenceBlogHeader:n(361).default,MyOwnInfluenceBlogSidebarProfile:n(362).default,MyOwnInfluenceFooter:n(355).default})}}]);