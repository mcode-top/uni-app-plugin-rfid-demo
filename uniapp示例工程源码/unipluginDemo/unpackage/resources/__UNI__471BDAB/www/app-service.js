(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"01fd":function(t,e,n){"use strict";n.r(e);var r=n("2932"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"04d2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{list:[{id:"ext-module",name:"\u6269\u5c55 module",open:!1,url:"/pages/sample/ext-module"},{id:"ext-component",name:"\u6269\u5c55 component",open:!1,url:"/pages/sample/ext-component"},{id:"richAlert",name:"\u63d2\u4ef6\u793a\u4f8bRichAlert",open:!1,url:"/pages/sample/richAlert"}],navigateFlag:!1}},onLoad:function(){},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var e=0;e<this.list.length;++e)this.list[e].open=t===e&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var e=this;if(!this.navigateFlag)return this.navigateFlag=!0,uni.navigateTo({url:t}),setTimeout((function(){e.navigateFlag=!1}),200),!1}}};e.default=r},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,o)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(s.length>1){var c=s.pop();u=s.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=s[0];console[a](u)}n.r(e),n.d(e,"log",(function(){return a})),n.d(e,"default",(function(){return s}))},1790:function(t,e,n){"use strict";var r=n("4ea4"),i=r(n("9523"));n("dc66");var o=r(n("8bbf")),a=r(n("9721"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}o.default.config.productionTip=!1,a.default.mpType="app";var u=new o.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},a.default));u.$mount()},2932:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("modal"),r=uni.requireNativePlugin("DCloud-RichAlert"),i={data:function(){return{title:""}},onLoad:function(){},methods:{showRichAlert:function(){r.show({position:"bottom",title:"\u63d0\u793a\u4fe1\u606f",titleColor:"#FF0000",content:"<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> \u662f\u4e00\u4e2a\u4f7f\u7528 Vue.js \u5f00\u53d1\u8de8\u5e73\u53f0\u5e94\u7528\u7684\u524d\u7aef\u6846\u67b6!\n\u514d\u8d39\u7684\n\u514d\u8d39\u7684\n\u514d\u8d39\u7684\n\u91cd\u8981\u7684\u4e8b\u60c5\u8bf4\u4e09\u904d",contentAlign:"left",checkBox:{title:"\u4e0d\u518d\u63d0\u793a",isSelected:!0},buttons:[{title:"\u53d6\u6d88"},{title:"\u5426"},{title:"\u786e\u8ba4",titleColor:"#3F51B5"}]},(function(e){var r=JSON.stringify(e);switch(n.toast({message:r,duration:1.5}),e.type){case"button":t("log","callback---button--"+e.index," at pages/sample/richAlert.vue:50");break;case"checkBox":t("log","callback---checkBox--"+e.isSelected," at pages/sample/richAlert.vue:53");break;case"a":t("log","callback---a--"+JSON.stringify(e)," at pages/sample/richAlert.vue:56");break;case"backCancel":t("log","callback---backCancel--"," at pages/sample/richAlert.vue:59");break}}))}}};e.default=i}).call(this,n("0de9")["default"])},"2acc":function(t,e,n){"use strict";n.r(e);var r=n("2d67"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"2d67":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){var e=uni.requireNativePlugin("UHFModule");e.openKeyDownService(),uni.addEventListener("keyDown",(function(t){e.showApp(),uni.showToast(JSON.stringify(t))})),uni.addEventListener("error",(function(e){uni.showToast(JSON.stringify(e)),t("log",e," at App.vue:13")})),uni.addEventListener("open",(function(e){uni.showToast(JSON.stringify(e)),t("log",e," at App.vue:17")})),uni.addEventListener("close",(function(e){uni.showToast(JSON.stringify(e)),t("log",e," at App.vue:21")}))},onShow:function(){t("log","App Show"," at App.vue:28")},onHide:function(){t("log","App Hide"," at App.vue:31")}};e.default=n}).call(this,n("0de9")["default"])},"31d5":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-container"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","uni-hello-text"),attrs:{_i:1}},[n("text",{staticClass:t._$s(2,"sc","hello-text"),attrs:{_i:2}})]),t._l(t._$s(3,"f",{forItems:t.list}),(function(e,r,i,o){return n("view",{key:t._$s(3,"f",{forIndex:i,key:e.id}),staticClass:t._$s("3-"+o,"sc","uni-panel"),attrs:{_i:"3-"+o}},[n("view",{staticClass:t._$s("4-"+o,"sc","uni-panel-h"),class:t._$s("4-"+o,"c",e.open?"uni-panel-h-on":""),attrs:{_i:"4-"+o},on:{click:function(e){return t.triggerCollapse(r)}}},[n("text",{staticClass:t._$s("5-"+o,"sc","uni-panel-text"),attrs:{_i:"5-"+o}},[t._v(t._$s("5-"+o,"t0-0",t._s(e.name)))]),n("text",{staticClass:t._$s("6-"+o,"sc","uni-panel-icon uni-icon"),class:t._$s("6-"+o,"c",e.open?"uni-panel-icon-on":""),attrs:{_i:"6-"+o}},[t._v(t._$s("6-"+o,"t0-0",t._s(e.pages?"\ue581":"\ue470")))])]),t._$s("7-"+o,"i",e.open)?n("view",{staticClass:t._$s("7-"+o,"sc","uni-panel-c"),attrs:{_i:"7-"+o}},t._l(t._$s("8-"+o,"f",{forItems:e.pages}),(function(e,r,i,a){return n("view",{key:t._$s("8-"+o,"f",{forIndex:i,key:r}),staticClass:t._$s("8-"+o+"-"+a,"sc","uni-navigate-item"),attrs:{_i:"8-"+o+"-"+a},on:{click:function(n){return t.goDetailPage(e.url)}}},[n("text",{staticClass:t._$s("9-"+o+"-"+a,"sc","uni-navigate-text"),attrs:{_i:"9-"+o+"-"+a}},[t._v(t._$s("9-"+o+"-"+a,"t0-0",t._s(e.name?e.name:e)))]),n("text",{staticClass:t._$s("10-"+o+"-"+a,"sc","uni-navigate-icon uni-icon"),attrs:{_i:"10-"+o+"-"+a}})])})),0):t._e()])}))],2)},i=[]},"465f":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","button-sp-area"),attrs:{_i:0}},[n("button",{attrs:{_i:1},on:{click:function(e){return t.showRichAlert()}}})])},i=[]},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"662a":function(t,e,n){"use strict";n.r(e);var r=n("465f"),i=n("01fd");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=s.exports},7037:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,n){var r=n("a395");t.exports=function(t,e,n){return e=r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},9721:function(t,e,n){"use strict";n.r(e);var r=n("2acc");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o=n("f0c5"),a=Object(o["a"])(r["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=a.exports},a395:function(t,e,n){var r=n("7037")["default"],i=n("e50d");t.exports=function(t){var e=i(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},c55d:function(t,e,n){"use strict";n.r(e);var r=n("04d2"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},dc66:function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("ed7f").default)})),__definePage("pages/sample/richAlert",(function(){return Vue.extend(n("662a").default)}))},e50d:function(t,e,n){var r=n("7037")["default"];t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},ed7f:function(t,e,n){"use strict";n.r(e);var r=n("31d5"),i=n("c55d");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=s.exports},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s,u,c){var l,f="function"===typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(f.components,d)&&(f.components[d]=u[d])}if(c&&("function"===typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,e){return l.call(e),v(t,e)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))}},[["1790","app-config"]]]);