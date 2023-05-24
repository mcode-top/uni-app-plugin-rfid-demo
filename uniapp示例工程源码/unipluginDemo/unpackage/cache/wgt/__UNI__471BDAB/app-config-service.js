
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"weex","flex-direction":"column"},"renderer":"auto","appname":"GUR_UHF","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.8.2","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"fallbackLocale":"zh-Hans","locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"navigationBar":{"titleText":"uni-app","type":"default"},"isNVue":false}},{"path":"pages/sample/ext-module","meta":{"navigationBar":{"titleText":"扩展 module","type":"default"},"isNVue":true}},{"path":"pages/sample/ext-component","meta":{"navigationBar":{"titleText":"扩展 component","type":"default"},"isNVue":true}},{"path":"pages/sample/richAlert","meta":{"navigationBar":{"titleText":"RichAlert","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[{"uni-icon":{"":{"fontFamily":"uniicons","fontWeight":"normal"}},"uni-bg-red":{"":{"backgroundColor":"#F76260","color":"#FFFFFF"}},"uni-bg-green":{"":{"backgroundColor":"#09BB07","color":"#FFFFFF"}},"uni-bg-blue":{"":{"backgroundColor":"#007AFF","color":"#FFFFFF"}},"uni-container":{"":{"flex":1,"paddingTop":15,"paddingRight":15,"paddingBottom":15,"paddingLeft":15,"backgroundColor":"#f8f8f8"}},"uni-padding-lr":{"":{"paddingLeft":15,"paddingRight":15}},"uni-padding-tb":{"":{"paddingTop":15,"paddingBottom":15}},"uni-header-logo":{"":{"paddingTop":15,"paddingRight":15,"paddingBottom":15,"paddingLeft":15,"flexDirection":"column","justifyContent":"center","alignItems":"center","marginTop":"10rpx"}},"uni-header-image":{"":{"width":80,"height":80}},"uni-hello-text":{"":{"marginBottom":20}},"hello-text":{"":{"color":"#7A7E83","fontSize":14,"lineHeight":20}},"hello-link":{"":{"color":"#7A7E83","fontSize":14,"lineHeight":20}},"uni-panel":{"":{"marginBottom":12}},"uni-panel-h":{"":{"backgroundColor":"#ffffff","flexDirection":"row","alignItems":"center","paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12}},"uni-panel-h-on":{"":{"backgroundColor":"#f0f0f0"}},"uni-panel-text":{"":{"flex":1,"color":"#000000","fontSize":14,"fontWeight":"normal"}},"uni-panel-icon":{"":{"marginLeft":15,"color":"#999999","fontSize":14,"fontWeight":"normal","transform":"rotate(0deg)","transitionDuration":0,"transitionProperty":"transform"}},"uni-panel-icon-on":{"":{"transform":"rotate(180deg)"}},"uni-navigate-item":{"":{"flexDirection":"row","alignItems":"center","backgroundColor":"#FFFFFF","borderTopStyle":"solid","borderTopColor":"#f0f0f0","borderTopWidth":1,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor:active":"#f8f8f8"}},"uni-navigate-text":{"":{"flex":1,"color":"#000000","fontSize":14,"fontWeight":"normal"}},"uni-navigate-icon":{"":{"marginLeft":15,"color":"#999999","fontSize":14,"fontWeight":"normal"}},"uni-list-cell":{"":{"position":"relative","flexDirection":"row","justifyContent":"flex-start","alignItems":"center"}},"uni-list-cell-pd":{"":{"paddingTop":"22rpx","paddingRight":"30rpx","paddingBottom":"22rpx","paddingLeft":"30rpx"}},"flex-r":{"":{"flexDirection":"row"}},"flex-c":{"":{"flexDirection":"column"}},"a-i-c":{"":{"alignItems":"center"}},"j-c-c":{"":{"justifyContent":"center"}},"list-item":{"":{"flexDirection":"row","paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10}},"@TRANSITION":{"uni-panel-icon":{"duration":0,"property":"transform"}}}];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  