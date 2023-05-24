"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(()=>{var x=Object.create;var _=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var b=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of y(t))!v.call(e,l)&&l!==o&&_(e,l,{get:()=>t[l],enumerable:!(n=d(t,l))||n.enumerable});return e};var u=(e,t,o)=>(o=e!=null?x(T(e)):{},b(t||!e||!e.__esModule?_(o,"default",{value:e,enumerable:!0}):o,e));var c=w((A,i)=>{i.exports=Vue});var V=u(c());function m(e,t,...o){uni.__log__?uni.__log__(e,t,...o):console[e].apply(console,[...o,t])}var f=(e,t)=>{let o=e.__vccOpts||e;for(let[n,l]of t)o[n]=l;return o};var r=u(c()),h={data(){return{}},onLoad(){},methods:{onTel(e){m("log","at pages/sample/ext-component.nvue:17","onTel="+e.detail.tel)},myTextClick(e){this.$refs.telText.clearTel()}}};function k(e,t,o,n,l,a){let g=(0,r.resolveComponent)("myText");return(0,r.openBlock)(),(0,r.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,r.createElementVNode)("div",null,[(0,r.createVNode)(g,{ref:"telText",tel:"12305",style:{width:"200",height:"100"},onOnTel:a.onTel,onClick:a.myTextClick},null,8,["onOnTel","onClick"])])])}var s=f(h,[["render",k]]);var p=plus.webview.currentWebview();if(p){let e=parseInt(p.id),t="pages/sample/ext-component",o={};try{o=JSON.parse(p.__query__)}catch(l){}s.mpType="page";let n=Vue.createPageApp(s,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:t,__pageQuery:o});n.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...s.styles||[]])),n.mount("#root")}})();
