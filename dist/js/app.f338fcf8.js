(function(e){function t(t){for(var o,r,u=t[0],l=t[1],i=t[2],s=0,f=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-25b8a092":"924a2fb1","chunk-8b17383a":"dbbe0454","chunk-6294d976":"2bce3e87","chunk-e6839344":"f665a2cc","chunk-bd29cb32":"91f4f79b","chunk-df334242":"030d40a5","chunk-e34a8a18":"e9a5529b"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-25b8a092":1,"chunk-8b17383a":1,"chunk-6294d976":1,"chunk-e6839344":1,"chunk-bd29cb32":1,"chunk-df334242":1,"chunk-e34a8a18":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-25b8a092":"c31b114e","chunk-8b17383a":"7b6954be","chunk-6294d976":"c87c9ba7","chunk-e6839344":"d8c16c98","chunk-bd29cb32":"a1cbeb6f","chunk-df334242":"0afcf56f","chunk-e34a8a18":"3fef5fdd"}[e]+".css",c=l.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===o||s===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],s=i.getAttribute("data-href");if(s===o||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1855:function(e,t,n){"use strict";n("61e4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=(n("b0c0"),n("a549")),c=n.n(r),a={id:"nav"},u=Object(o["h"])("img",{src:c.a,alt:"",style:{width:"100px"}},null,-1),l={key:0,id:"sign"},i=Object(o["h"])("button",{id:"signin"},"Sign In",-1),s={key:1,id:"profile",class:"dropdown"},f={class:"navbar-nav"},d={class:"dropdown"},b={class:"dropdown-toggle text-dark",style:{"font-size":"2em"},href:"#",id:"",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},h={class:"dropdown-menu","aria-labelledby":"navbarDarkDropdownMenuLink"},p=Object(o["h"])("a",{class:"dropdown-item",href:""},"Profile",-1),m=Object(o["h"])("a",{class:"dropdown-item",href:""},"My comments",-1),g=Object(o["h"])("a",{class:"dropdown-item",href:""},"comment a new content",-1);function j(e,t,n,r,c,j){var O=this,k=Object(o["z"])("router-link"),v=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["g"])(o["a"],null,[Object(o["h"])("div",a,[Object(o["j"])(k,{to:"/"},{default:Object(o["G"])((function(){return[u]})),_:1}),Object(o["j"])(k,{to:"/register"},{default:Object(o["G"])((function(){return[O.$store.state.user?Object(o["f"])("",!0):(Object(o["s"])(),Object(o["g"])("button",l,"Sign Up"))]})),_:1}),this.$store.state.user?Object(o["f"])("",!0):(Object(o["s"])(),Object(o["e"])(k,{key:0,to:"/login"},{default:Object(o["G"])((function(){return[i]})),_:1})),Object(o["j"])(k,{to:"/"},{default:Object(o["G"])((function(){return[O.$store.state.user?(Object(o["s"])(),Object(o["g"])("button",{key:0,id:"signout",onClick:t[0]||(t[0]=function(){return j.logout&&j.logout.apply(j,arguments)})}," Log Out ")):Object(o["f"])("",!0)]})),_:1}),this.$store.state.user?(Object(o["s"])(),Object(o["g"])("div",s,[Object(o["h"])("ul",f,[Object(o["h"])("li",d,[Object(o["h"])("a",b,Object(o["B"])(this.$store.state.user.name),1),Object(o["h"])("ul",h,[Object(o["h"])("li",null,[Object(o["j"])(k,{to:"/profile"},{default:Object(o["G"])((function(){return[p]})),_:1}),Object(o["j"])(k,{to:"mycomment",id:"mc"},{default:Object(o["G"])((function(){return[m]})),_:1}),Object(o["j"])(k,{to:"/",id:"mc"},{default:Object(o["G"])((function(){return[g]})),_:1})])])])])])):Object(o["f"])("",!0)]),Object(o["j"])(v)],64)}n("d3b7");var O={components:{},beforeCreate:function(){this.$store.commit("initialize")},methods:{logout:function(){var e=this,t="https://apiyowl.herokuapp.com/api/logout",n={method:"post",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}};fetch(t,n).then((function(e){return e.json()})).then((function(t){e.$store.commit("setAuth",null,null),e.$store.commit("setAuth",null,null),localStorage.removeItem("AUTH"),localStorage.removeItem("TOKEN")}))}}},k=(n("1855"),n("6b0d")),v=n.n(k);const y=v()(O,[["render",j]]);var w=y,S=(n("3ca3"),n("ddb0"),n("6c02")),A=[{path:"/",name:"Home",component:function(){return n.e("chunk-df334242").then(n.bind(null,"bb51"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-e34a8a18").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-bd29cb32").then(n.bind(null,"a55b"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-25b8a092").then(n.bind(null,"c66d"))}},{path:"/all",name:"All",component:function(){return Promise.all([n.e("chunk-8b17383a"),n.e("chunk-e6839344")]).then(n.bind(null,"cf5b"))}},{path:"/mycomment",name:"MyComment",component:function(){return Promise.all([n.e("chunk-8b17383a"),n.e("chunk-6294d976")]).then(n.bind(null,"770a"))}}],T=Object(S["a"])({history:Object(S["b"])("/"),routes:A}),_=T,P=(n("e9c4"),n("5502")),E=Object(P["a"])({state:{authenticated:!1,user:null,token:null,All:null},mutations:{setAuth:function(e,t){localStorage.setItem("AUTH",JSON.stringify(t)),e.authenticated=!0,e.user=t},setToken:function(e,t){localStorage.setItem("TOKEN",t),e.token=t},setAll:function(e,t){localStorage.setItem("ALL",JSON.stringify(t)),e.All=t},initialize:function(e){localStorage.getItem("AUTH")?(e.authenticated=!0,e.user=JSON.parse(localStorage.getItem("AUTH")),e.token=localStorage.getItem("TOKEN"),e.All=JSON.parse(localStorage.getItem("ALL"))):(e.authenticated=!1,e.user=null,e.token=null,e.All=null)}},actions:{},modules:{}});n("7b17"),n("ab8b");Object(o["d"])(w).use(E).use(_).mount("#app")},"61e4":function(e,t,n){},a549:function(e,t,n){e.exports=n.p+"img/l1.ea2df9f2.jpg"}});
//# sourceMappingURL=app.f338fcf8.js.map