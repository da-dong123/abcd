(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"65d4":function(n,e,t){"use strict";t.r(e);var o=t("b9e8"),r=t("80e8");for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t("e32f");var i,c=t("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"2b06ed4e",null,!1,o["a"],i);e["default"]=s.exports},"80e8":function(n,e,t){"use strict";t.r(e);var o=t("de09"),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=r.a},"9da8":function(n,e,t){},b38c:function(n,e,t){"use strict";(function(n){t("d8b5");o(t("66fd"));var e=o(t("65d4"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},b9e8:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"017e"))},XzProductFloor:function(){return t.e("components/XzProductFloor/XzProductFloor").then(t.bind(null,"7e22"))},XzFooter:function(){return t.e("components/XzFooter/XzFooter").then(t.bind(null,"a72e"))},XzGoTop:function(){return t.e("components/XzGoTop/XzGoTop").then(t.bind(null,"ad62"))},uniDrawer:function(){return t.e("uni_modules/uni-drawer/components/uni-drawer/uni-drawer").then(t.bind(null,"e611"))},uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,"7aa9"))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,"b5dc"))}},r=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){return n.$refs.showLeft.close()},n.e1=function(e){return n.$refs.showLeft.close()})},u=[]},de09:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(t("a34a")),r=t("1ea9");function u(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,o,r,u,i){try{var c=n[u](i),s=c.value}catch(a){return void t(a)}c.done?e(s):Promise.resolve(s).then(o,r)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(o,r){var u=n.apply(e,t);function c(n){i(u,o,r,c,s,"next",n)}function s(n){i(u,o,r,c,s,"throw",n)}c(void 0)}))}}var s={data:function(){return{showLeft:!1,swiperList:[],newArrivalItems:[],recommendedItems:[],topSaleItems:[],token:"",$base:r.base}},methods:{openDrawer:function(n){console.log("这是参数e",n),this.$refs[n].open()},onClick:function(e){console.log("即将跳转到某个页面",e),n.setStorageSync("userCenterSection",e)},toSearchList:function(){n.navigateTo({url:"/pages/search/search"})},linkTo:function(n){console.log(n.target.dataset)}},onLoad:function(){var n=this;return c(o.default.mark((function e(){var t;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.productDetails)();case 2:return e.sent,e.next=5,(0,r.productIndex)();case 5:t=e.sent,console.log("这是productIndex的返回值的await",t),n.swiperList=t.carouselItems,n.newArrivalItems=t.newArrivalItems,n.recommendedItems=t.recommendedItems,n.topSaleItems=t.topSaleItems;case 11:case"end":return e.stop()}}),e)})))()},onShow:function(){this.token=n.getStorageSync("userToken")}};e.default=s}).call(this,t("543d")["default"])},e32f:function(n,e,t){"use strict";var o=t("9da8"),r=t.n(o);r.a}},[["b38c","common/runtime","common/vendor"]]]);