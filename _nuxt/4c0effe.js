(window.webpackJsonp=window.webpackJsonp||[]).push([[19,7,8,10],{354:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{showMobileMenu:!0}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{toggle:function(){this.showMobileMenu=!this.showMobileMenu},close:function(t){this.$el.contains(t.target)||(this.showMobileMenu=!0)}}},c=l(57),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("nav",[e("div",{staticClass:"absolute top-0 left-0 px-2 py-2 z-10 header-navbar"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex space-x-4"},[e("div",{staticClass:"hidden md:flex items-center space-x-1 header-navbar-menu"},[e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/about"}},[t._v(t._s(t.$t("navbar.about.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/"}},[t._v(t._s(t.$t("navbar.home.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/blog"}},[t._v(t._s(t.$t("navbar.blog.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("navbar.portfolio.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"py-4 px-3",attrs:{to:"/contact"}},[t._v(t._s(t.$t("navbar.contact.title")))])],1)]),t._v(" "),e("div",{staticClass:"md:hidden flex items-center"},[e("button",{staticClass:"pt-4 px-2",on:{click:function(e){return t.toggle()}}},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"}})])])])])])]),t._v(" "),e("div",{staticClass:"md:hidden absolute w-full rounded header-mobile-menu",class:{hidden:t.showMobileMenu}},[e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/about"}},[t._v(t._s(t.$t("navbar.about.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/"}},[t._v(t._s(t.$t("navbar.home.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/blog"}},[t._v(t._s(t.$t("navbar.blog.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("navbar.portfolio.title")))]),t._v(" "),e("nuxt-i18n-link",{staticClass:"block py-3 px-4",attrs:{to:"/contact"}},[t._v(t._s(t.$t("navbar.contact.title")))]),t._v(" "),e("div",{staticClass:"block py-3 px-4"},[e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("tw")}},[t._v("中文")]),t._v("\n                /\n                "),e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1)],1)]),t._v(" "),e("div",{staticClass:"absolute top-0 right-0 px-2 py-2 z-10"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"mx-auto"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex space-x-4"},[e("div",{staticClass:"hidden md:flex items-center space-x-1 header-navbar-menu"},[e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("tw")}},[t._v("中文")]),t._v(" "),e("nuxt-link",{staticClass:"py-4 px-2",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,l){"use strict";l.r(e);var n=l(57),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"bg-white border-t border-solid"},[e("div",{staticClass:"container px-5 mx-auto"},[e("div",{staticClass:"xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"})])]),t._v(" "),e("div",{staticClass:"bg-cyan-50 border-t border-solid"},[e("div",{staticClass:"text-gray-300 text-center text-md motto-block py-8 px-4"},[t._v("\n        Creative by MINA YU in 2022 Nov. Sign @MinaYu.\n      ")])])])}],!1,null,null,null);e.default=component.exports},363:function(t,e,l){"use strict";l.r(e);var n={props:{imageUrl:{type:String,default:""}}},c=l(57),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"w-full h-full"},[e("div",{staticClass:"relative overflow-hidden"},[e("img",{staticClass:"object-cover w-full header-image-size",attrs:{src:t.imageUrl,alt:"Flower and sky"}}),t._v(" "),e("div",[e("MyOwnInfluenceNavbar"),t._v(" "),e("div",{staticClass:"absolute px-2 py-2 site-branding"},[e("div",{staticClass:"site-title"},[e("p",[e("nuxt-i18n-link",{attrs:{to:"/"}},[t._v("Own Influence")])],1)]),t._v(" "),t._m(0)])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"site-description"},[t("p",[this._v("A creative front-end design theme by Mina.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MyOwnInfluenceNavbar:l(354).default})},383:function(t,e,l){t.exports=l.p+"img/img_8974.79c37eb.jpg"},407:function(t,e,l){"use strict";l.r(e);var n=l(57),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("MyOwnInfluenceHeader",{attrs:{"image-url":l(383)}}),t._v(" "),e("section",{staticClass:"text-gray-600 body-font relative"},[e("div",{staticClass:"container px-4 py-24 mx-auto"},[e("div",{staticClass:"bg-white px-5 py-24"},[e("div",{staticClass:"flex flex-col text-center w-full mb-12"},[e("h1",{staticClass:"sm:text-3xl text-2xl font-medium title-font mb-4 text-black grid-title"},[t._v("Contact Us")]),t._v(" "),e("p",{staticClass:"lg:w-2/3 mx-auto leading-relaxed text-base motto-block"},[t._v(t._s(t.$t("contact.description")))])]),t._v(" "),e("div",{staticClass:"lg:w-1/2 md:w-2/3 mx-auto"},[e("div",{staticClass:"flex flex-wrap -m-2"},[e("div",{staticClass:"p-2 w-full"},[e("div",{staticClass:"h-full flex items-center border-gray-200 border p-4 rounded-lg"},[e("div",{staticClass:"rounded-full mr-4"},[e("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"80",height:"80",viewBox:"0 0 48 48"}},[e("path",{attrs:{fill:"#1e88e5",d:"M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"}}),t._v(" "),e("path",{attrs:{fill:"#fff",d:"M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"}})])]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"p-2 w-full"},[e("div",{staticClass:"h-full flex items-center border-gray-200 border p-4 rounded-lg"},[e("div",{staticClass:"mr-4"},[e("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"80",height:"80",viewBox:"0 0 48 48"}},[e("path",{attrs:{fill:"#0078d4",d:"M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"}}),e("path",{attrs:{d:"M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18\tc3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12\tc1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z",opacity:".05"}}),e("path",{attrs:{d:"M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534\tc1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5\tc-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489\tc0,1.459-1.057,2.511-2.512,2.511H15.966z",opacity:".07"}}),e("path",{attrs:{fill:"#fff",d:"M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13\tc1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5\tc-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z"}})])]),t._v(" "),t._m(1)])]),t._v(" "),e("div",{staticClass:"p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"},[e("p",{staticClass:"leading-normal my-2 motto-block"},[t._v("\n            "+t._s(t.$t("contact.description1"))+"\n          ")])])])])])])]),t._v(" "),e("MyOwnInfluenceFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-grow"},[e("h2",{staticClass:"text-gray-900 title-font font-medium"},[t._v("E-mail")]),t._v(" "),e("p",{staticClass:"text-blue-500 break-all"},[t._v("example@gmail.com")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-grow"},[e("h2",{staticClass:"text-gray-900 title-font font-medium"},[t._v("LinkedIn")]),t._v(" "),e("a",{staticClass:"text-blue-500 break-all",attrs:{href:"#"}},[t._v("https://www.linkedin.com/in/example/")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MyOwnInfluenceHeader:l(363).default,MyOwnInfluenceFooter:l(355).default})}}]);