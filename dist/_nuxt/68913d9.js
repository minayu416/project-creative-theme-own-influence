(window.webpackJsonp=window.webpackJsonp||[]).push([[21,7,8,10,11],{354:function(t,e,o){"use strict";o.r(e);var l={data:function(){return{showMobileMenu:!0}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{toggle:function(){this.showMobileMenu=!this.showMobileMenu},close:function(t){this.$el.contains(t.target)||(this.showMobileMenu=!0)}}},r=o(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("nav",[e("div",{staticClass:"absolute top-0 left-0 px-2 py-2 z-10 header-navbar"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex space-x-4"},[e("div",{staticClass:"hidden md:flex items-center space-x-1 header-navbar-menu"},[e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/about"}},[t._v(t._s(t.$t("navbar.about.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/"}},[t._v(t._s(t.$t("navbar.home.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/blog"}},[t._v(t._s(t.$t("navbar.blog.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("navbar.portfolio.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/contact"}},[t._v(t._s(t.$t("navbar.contact.title")))])],1)]),t._v(" "),e("div",{staticClass:"md:hidden flex items-center"},[e("button",{staticClass:"pt-4 px-2",on:{click:function(e){return t.toggle()}}},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"}})])])])])])]),t._v(" "),e("div",{staticClass:"md:hidden absolute w-full rounded header-mobile-menu",class:{hidden:t.showMobileMenu}},[e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/about"}},[t._v(t._s(t.$t("navbar.about.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/"}},[t._v(t._s(t.$t("navbar.home.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/blog"}},[t._v(t._s(t.$t("navbar.blog.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("navbar.portfolio.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/contact"}},[t._v(t._s(t.$t("navbar.contact.title")))]),t._v(" "),e("div",{staticClass:"block py-3 px-4"},[e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("tw")}},[t._v("中文")]),t._v("\n                /\n                "),e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1)],1)]),t._v(" "),e("div",{staticClass:"absolute top-0 right-0 px-2 py-2 z-10"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex space-x-4"},[e("div",{staticClass:"hidden md:flex items-center space-x-1 header-navbar-menu"},[e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("tw")}},[t._v("中文")]),t._v(" "),e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,o){"use strict";o.r(e);var l=o(57),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"bg-white border-t border-solid"},[e("div",{staticClass:"container px-5 mx-auto"},[e("div",{staticClass:"xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"})])]),t._v(" "),e("div",{staticClass:"bg-cyan-50 border-t border-solid"},[e("div",{staticClass:"text-gray-300 text-center text-md motto-block py-8 px-4"},[t._v("\n        Creative by MINA YU in 2022 Nov. Sign @MinaYu.\n      ")])])])}],!1,null,null,null);e.default=component.exports},356:function(t,e,o){t.exports=o.p+"img/20180219_190126_0040.87a6f5e.jpeg"},363:function(t,e,o){"use strict";o.r(e);var l={props:{imageUrl:{type:String,default:""}}},r=o(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"w-full h-full"},[e("div",{staticClass:"relative overflow-hidden"},[e("img",{staticClass:"object-cover w-full header-image-size",attrs:{src:t.imageUrl,alt:"Flower and sky"}}),t._v(" "),e("div",[e("MyOwnInfluenceNavbar"),t._v(" "),e("div",{staticClass:"absolute px-2 py-2 site-branding"},[e("div",{staticClass:"site-title"},[e("p",[e("nuxt-i18n-link",{attrs:{to:"/"}},[t._v("Own Influence")])],1)]),t._v(" "),t._m(0)])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"site-description"},[t("p",[this._v("A creative front-end design theme by Mina.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MyOwnInfluenceNavbar:o(354).default})},364:function(t,e,o){t.exports=o.p+"img/img_8997.29b4c78.jpeg"},371:function(t,e,o){t.exports=o.p+"img/snow_photo2.9efb33b.jpeg"},379:function(t,e,o){"use strict";o.r(e);var l=o(57),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"body-font font-voll"},[e("div",{staticClass:"container px-4 py-12 mx-auto flex flex-wrap"},[e("div",{staticClass:"bg-white"},[e("div",{staticClass:"flex flex-col flex-wrap -mb-10 lg:w lg:text-left"},[e("div",{staticClass:"flex flex-col mb-10 lg:items-start items-center"},[e("div",{staticClass:"flex-grow portfolio-timeline"},[e("ol",{staticClass:"relative border-l border-gray-700"},[e("li",{staticClass:"mb-10 ml-6"},[e("div",{staticClass:"absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"}),t._v(" "),e("time",{staticClass:"block mb-2 text-sm font-normal leading-none text-gray-500"},[t._v(t._s(t.$t("portfolio.projects.project1.date")))]),t._v(" "),e("h3",{staticClass:"flex items-center mb-1 text-lg font-semibold text-gray-900"},[t._v(t._s(t.$t("portfolio.projects.project1.title"))+"\n                        "),e("span",{staticClass:"bg-orange-200 text-orange-700 text-sm font-medium px-2.5 py-0.5 rounded ml-3"},[t._v(t._s(t.$t("portfolio.tags.selfProduct")))]),t._v(" "),e("span",{staticClass:"bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded ml-3"},[t._v(t._s(t.$t("portfolio.tags.developing")))]),t._v(" "),e("span",{staticClass:"bg-amber-200 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3"},[t._v(t._s(t.$t("portfolio.tags.release")))])]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-400"},[t._v("\n                          "+t._s(t.$t("portfolio.projects.project1.description"))),e("br"),t._v("\n                          "+t._s(t.$t("portfolio.projects.project1.description1"))+"\n                          "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Vue.js")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Nuxt.js")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")])]),t._v(" "),e("a",{staticClass:"inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700",attrs:{href:"#"}},[e("svg",{staticClass:"mr-2 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"}})]),t._v(" View Website\n                        ")])]),t._v(" "),e("li",{staticClass:"mb-10 ml-6"},[e("div",{staticClass:"absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"}),t._v(" "),e("time",{staticClass:"block mb-2 text-sm font-normal leading-none text-gray-500"},[t._v(t._s(t.$t("portfolio.projects.project2.date")))]),t._v(" "),e("h3",{staticClass:"flex items-center mb-1 text-lg font-semibold text-gray-900"},[t._v(t._s(t.$t("portfolio.projects.project2.title"))+"\n                        "),e("span",{staticClass:"bg-orange-200 text-orange-700 text-sm font-medium px-2.5 py-0.5 rounded ml-3"},[t._v(t._s(t.$t("portfolio.tags.selfProduct")))]),t._v(" "),e("span",{staticClass:"bg-blue-200 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded ml-3"},[t._v(t._s(t.$t("portfolio.tags.developing")))]),t._v(" "),e("span",{staticClass:"bg-amber-200 text-amber-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3"},[t._v(t._s(t.$t("portfolio.tags.release")))])]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-400"},[t._v("\n                          "+t._s(t.$t("portfolio.projects.project2.description"))+"\n                          "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Python")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#PostgreSQL")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")])]),t._v(" "),e("a",{staticClass:"inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700",attrs:{href:"#"}},[e("svg",{staticClass:"mr-2 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"}})]),t._v(" Official Web\n                        ")])]),t._v(" "),e("li",{staticClass:"mb-10 ml-6"},[e("div",{staticClass:"absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"}),t._v(" "),e("time",{staticClass:"block mb-2 text-sm font-normal leading-none text-gray-500"},[t._v(t._s(t.$t("portfolio.projects.project3.date")))]),t._v(" "),e("h3",{staticClass:"flex items-center mb-1 text-lg font-semibold text-gray-900"},[t._v(t._s(t.$t("portfolio.projects.project3.title"))),e("span",{staticClass:"bg-emerald-200 text-emerald-700 text-sm font-medium px-2.5 py-0.5 rounded ml-3"},[t._v(t._s(t.$t("portfolio.tags.inCompany")))])]),t._v(" "),e("p",{staticClass:"text-base font-normal text-gray-400"},[t._v("\n                          "+t._s(t.$t("portfolio.projects.project3.description"))+"\n                          "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Python")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#MQTT")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")])])]),t._v(" "),e("li",{staticClass:"mb-10 ml-6"},[e("div",{staticClass:"absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"}),t._v(" "),e("time",{staticClass:"block mb-2 text-sm font-normal leading-none text-gray-500"},[t._v(t._s(t.$t("portfolio.projects.project14.date")))]),t._v(" "),e("h3",{staticClass:"flex items-center mb-1 text-lg font-semibold text-gray-900"},[t._v(t._s(t.$t("portfolio.projects.project14.title"))),e("span",{staticClass:"bg-fuchsia-200 text-fuchsia-700 text-sm font-medium px-2.5 py-0.5 rounded ml-3"},[t._v(t._s(t.$t("portfolio.tags.inSchool")))])]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-400"},[t._v("\n                          "+t._s(t.$t("portfolio.projects.project14.description"))+"\n                          "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Python2")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Django")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")]),t._v(" "),e("span",{staticClass:"bg-slate-100 text-slate-500 border border-solid text-sm font-medium mr-2 px-2.5 py-0.5 rounded"},[t._v("#Skill")])]),t._v(" "),e("a",{staticClass:"inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700",attrs:{href:"#"}},[e("svg",{staticClass:"mr-2 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})]),t._v(" Demo\n                        ")]),t._v(" "),e("a",{staticClass:"inline-flex items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700",attrs:{href:"#"}},[e("svg",{staticClass:"mr-2 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"}})]),t._v(" View on Github\n                        ")])])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,o){t.exports=o.p+"img/img_8997.dfd6755.jpeg"},409:function(t,e,o){"use strict";o.r(e);var l=o(57),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("MyOwnInfluenceHeader",{attrs:{"image-url":o(385)}}),t._v(" "),e("div",{staticClass:"w-full h-full bg-white"},[e("div",[e("section",{staticClass:"body-font overflow-hidden border-b border-solid"},[e("div",{staticClass:"container px-5 py-24 mx-auto"},[e("h1",{staticClass:"font-bold text-center pb-2 grid-title"},[t._v("FEATURED")]),t._v(" "),e("div",{staticClass:"lg:mx-auto flex flex-wrap"},[e("div",{staticClass:"lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0"},[e("div",{staticClass:"bg-gray-100 rounded-lg"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 post-list"},[e("div",{staticClass:"relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95"},[e("nuxt-i18n-link",{attrs:{to:"/blog"}},[e("img",{staticClass:"brightness-75 object-cover w-full h-full",attrs:{src:o(371),alt:"Miri Block Grid"}}),t._v(" "),e("div",{staticClass:"absolute bottom-0 left-0 px-6 py-4"},[e("h4",{staticClass:"mb-3 text-xl font-semibold tracking-tight text-white font-fondamento"},[t._v(t._s(t.$t("portfolio.IndexBlockBox.miri.title")))]),t._v(" "),e("p",{staticClass:"leading-normal text-white font-voll"},[t._v(t._s(t.$t("portfolio.IndexBlockBox.miri.description")))])])])],1),t._v(" "),e("div",{staticClass:"relative overflow-hidden rounded-lg"},[e("img",{staticClass:"brightness-75 object-cover w-full h-full",attrs:{src:o(356),alt:"About Block Grid"}}),t._v(" "),e("div",{staticClass:"absolute bottom-0 left-0 px-6 py-4"},[e("h4",{staticClass:"mb-3 text-xl font-semibold tracking-tight text-white font-fondamento"},[t._v(t._s(t.$t("portfolio.IndexBlockBox.minaInfluence.title")))]),t._v(" "),e("p",{staticClass:"leading-normal text-gray-100 font-voll"},[t._v(t._s(t.$t("portfolio.IndexBlockBox.minaInfluence.description")))])])]),t._v(" "),e("div",{staticClass:"relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:scale-95"},[e("nuxt-i18n-link",{attrs:{to:"/blog"}},[e("img",{staticClass:"brightness-75 object-cover w-full h-full",attrs:{src:o(364),alt:"My github Block Grid"}}),t._v(" "),e("div",{staticClass:"absolute bottom-0 left-0 px-6 py-4"},[e("h4",{staticClass:"mb-3 text-xl font-semibold tracking-tight text-white font-fondamento"},[t._v(t._s(t.$t("portfolio.IndexBlockBox.githubMinayu.title")))]),t._v(" "),e("p",{staticClass:"leading-normal text-gray-100 font-voll"},[t._v(t._s(t.$t("portfolio.IndexBlockBox.githubMinayu.description")))])])])],1)])])]),t._v(" "),e("div",{staticClass:"lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0"},[e("div",{staticClass:"site-branding-intro motto-block"},[e("section",{staticClass:"text-gray-500 body-font"},[e("div",{staticClass:"container px-5 mx-auto"},[e("div",{staticClass:"w-full mx-auto text-center"},[e("svg",{staticClass:"inline-block w-6 h-6 text-gray-400 mb-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 975.036 975.036"}},[e("path",{attrs:{d:"M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"}})]),t._v(" "),e("p",{staticClass:"leading-relaxed"},[t._v("\n                    "+t._s(t.$t("portfolio.motto1"))+"\n                  ")]),t._v(" "),e("span",{staticClass:"inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"}),t._v(" "),e("h2",{staticClass:"text-gray-900 font-medium title-font tracking-wider text-lg"},[t._v("Sign @MinaYu.")])])])])])])])])])]),t._v(" "),e("div",[e("section",{staticClass:"body-font"},[e("div",{staticClass:"container px-4 py-12 mx-auto flex flex-wrap"},[e("div",{staticClass:"bg-white"},[e("div",{staticClass:"flex flex-col flex-wrap -mb-10 lg:w lg:text-left"},[e("div",{staticClass:"flex flex-col mb-10 lg:items-start items-center"},[e("div",{staticClass:"flex-grow about-content"},[e("h1",{staticClass:"font-bold text-center pb-2 grid-title text-black"},[t._v("Portfolio")]),t._v(" "),e("p",{staticClass:"text-center italic tracking-wider"},[t._v("Posted on May 31, 2022")]),t._v(" "),e("div",{staticClass:"py-6"},[e("p",{staticClass:"leading-relaxed text-base font-voll"},[t._v("\n                        "+t._s(t.$t("portfolio.description1"))+"\n                        "),e("br"),t._v("\n                        "+t._s(t.$t("portfolio.description2"))+"\n                        "),e("br"),t._v("\n                        "+t._s(t.$t("portfolio.description3"))+"\n                    ")])])])])])])])])]),t._v(" "),e("MyOwnInfluenceTimeline")],1),t._v(" "),e("MyOwnInfluenceFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MyOwnInfluenceHeader:o(363).default,MyOwnInfluenceTimeline:o(379).default,MyOwnInfluenceFooter:o(355).default})}}]);