(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/XzLogin/XzLogin"],{"02a9":function(e,t,n){"use strict";var s=n("86bd"),o=n.n(s);o.a},"6b2d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n("a34a")),o=n("1ea9");function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,s,o,r,i){try{var u=e[r](i),c=u.value}catch(a){return void n(a)}u.done?t(c):Promise.resolve(c).then(s,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(s,o){var r=e.apply(t,n);function u(e){i(r,s,o,u,c,"next",e)}function c(e){i(r,s,o,u,c,"throw",e)}u(void 0)}))}}var c={name:"XzLogin",data:function(){return{strUser:"",strPass:"",strUserFocused:!0,strPassFocused:!1,showPw1:"true",isChecked:!1}},mounted:function(){console.log("执行了登录页面的挂载"),e.setNavigationBarTitle({title:"用户登录"})},methods:{inputUser:function(){this.strUser;console.log("这是strUser",this.strUser)},goRegister:function(){console.log("立即执行了函数"),this.$emit("getDataFromlogin","register")},inputPass:function(){this.strPass},checkBox:function(){this.isChecked=!this.isChecked},login:function(){var t=this;return u(s.default.mark((function n(){var r,i,u,c;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("这是isChecked",t.isChecked),r=t.strUser.trim(),i=t.strPass.trim(),t.strPassFocused=!1,t.strUserFocused=!1,r){n.next=10;break}return e.showToast({icon:"none",title:"用户名不能为空！"}),t.strUserFocused=!0,t.strPassFocused=!1,n.abrupt("return");case 10:if(i){n.next=15;break}return e.showToast({icon:"none",title:"密码不能为空！"}),t.strUserFocused=!1,t.strPassFocused=!0,n.abrupt("return");case 15:if(t.strPassFocused=!1,t.strUserFocused=!1,0!=t.isChecked){n.next=21;break}return console.log(t.isChecked),e.showToast({icon:"none",title:"请勾选登录同意"}),n.abrupt("return");case 21:return n.next=23,(0,o.login)(r,i);case 23:if(u=n.sent,console.log("这是登录的接口",u),c=u.data,200!==c.code)e.showModal({title:"错误",content:"登录失败！服务器返回错误消息"+c.msg,showCancel:!1});else{e.showModal({title:"欢迎回来"});try{e.setStorageSync("userToken",c.token)}catch(s){}t.$emit("getDataFromlogin","profile")}case 27:case"end":return n.stop()}}),n)})))()}}};t.default=c}).call(this,n("543d")["default"])},"6e8e":function(e,t,n){"use strict";n.r(t);var s=n("80ef"),o=n("ec80");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("02a9");var i,u=n("f0c5"),c=Object(u["a"])(o["default"],s["b"],s["c"],!1,null,"4ee4521c",null,!1,s["a"],i);t["default"]=c.exports},"80ef":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s}));var s={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"017e"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showPw1=!e.showPw1})},r=[]},"86bd":function(e,t,n){},ec80:function(e,t,n){"use strict";n.r(t);var s=n("6b2d"),o=n.n(s);for(var r in s)"default"!==r&&function(e){n.d(t,e,(function(){return s[e]}))}(r);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/XzLogin/XzLogin-create-component',
    {
        'components/XzLogin/XzLogin-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6e8e"))
        })
    },
    [['components/XzLogin/XzLogin-create-component']]
]);
