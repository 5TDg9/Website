if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>l(s,r),u={module:{uri:r},exports:a,require:t};e[r]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(n(...s),a)))}}define(["./workbox-f683aea5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"ff388e9eeb5e5bcc186e338ce3a14845"},{url:"assets/20180207104242.696221d5.js",revision:null},{url:"assets/404.73cfa83f.js",revision:null},{url:"assets/404.html.beaa804c.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.b8f0fa52.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/contactUs.html.1aa64b73.js",revision:null},{url:"assets/contactUs.html.3aadc97b.js",revision:null},{url:"assets/contactUs.html.572aaa7d.js",revision:null},{url:"assets/contactUs.html.874cdf73.js",revision:null},{url:"assets/daily.html.3da4a252.js",revision:null},{url:"assets/daily.html.4c8cb666.js",revision:null},{url:"assets/daily.html.c4bef3c2.js",revision:null},{url:"assets/daily.html.fb58c67e.js",revision:null},{url:"assets/enable-mroot.html.60785c1d.js",revision:null},{url:"assets/enable-mroot.html.6b012486.js",revision:null},{url:"assets/enable-mroot.html.9e4b0023.js",revision:null},{url:"assets/enable-mroot.html.aa901adf.js",revision:null},{url:"assets/how-to-use.html.9735eb52.js",revision:null},{url:"assets/how-to-use.html.a7aa68fa.js",revision:null},{url:"assets/how-to-use.html.df5d77cd.js",revision:null},{url:"assets/how-to-use.html.f4943561.js",revision:null},{url:"assets/icons/apple-touch-icon-152x152.png",revision:"c05c8e4546b8e74483cb8ff465749a08"},{url:"assets/icons/msapplication-icon-144x144.png",revision:"cb48ad61b7f2ec0e908141aa35806ea6"},{url:"assets/icons/safari-pinned-tab.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/20180207104242.png",revision:"b91b3660380ae4f1f8fefd284ba94a55"},{url:"assets/img/logo.png",revision:"757b632912a0fc3126d7661366e7849d"},{url:"assets/img/logo.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/manifest_json/images/homescreen144.png",revision:"2660b9fbac1b7c82473edaa43564f675"},{url:"assets/img/manifest_json/images/homescreen168.png",revision:"64d66122dc7a8f892a08cb0cd39d693f"},{url:"assets/img/manifest_json/images/homescreen192.png",revision:"98c878af6f08889c8a1a94ee42091bc4"},{url:"assets/img/manifest_json/images/homescreen48.png",revision:"a0eee1cba3aaa6ddbf28eb6c539b5985"},{url:"assets/img/manifest_json/images/homescreen72.png",revision:"58da9becadf63efcd99f6907105dbfd6"},{url:"assets/img/manifest_json/images/homescreen96.png",revision:"81bb0bcad8cb5353133e9d679d90cbc7"},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.041b823d.js",revision:null},{url:"assets/index.html.0873a0d2.js",revision:null},{url:"assets/index.html.0e9f4626.js",revision:null},{url:"assets/index.html.13dbf6d7.js",revision:null},{url:"assets/index.html.24c66e87.js",revision:null},{url:"assets/index.html.39b878f5.js",revision:null},{url:"assets/index.html.40902f54.js",revision:null},{url:"assets/index.html.5166e58f.js",revision:null},{url:"assets/index.html.54298337.js",revision:null},{url:"assets/index.html.580c8923.js",revision:null},{url:"assets/index.html.5ab6c067.js",revision:null},{url:"assets/index.html.604878ef.js",revision:null},{url:"assets/index.html.658c92bf.js",revision:null},{url:"assets/index.html.67a96bd6.js",revision:null},{url:"assets/index.html.76cb3c61.js",revision:null},{url:"assets/index.html.84ffe5a7.js",revision:null},{url:"assets/index.html.98762106.js",revision:null},{url:"assets/index.html.a06cf507.js",revision:null},{url:"assets/index.html.a8842a43.js",revision:null},{url:"assets/index.html.ae0d92ee.js",revision:null},{url:"assets/index.html.afb6e00a.js",revision:null},{url:"assets/index.html.bd0198b0.js",revision:null},{url:"assets/index.html.cdf06085.js",revision:null},{url:"assets/index.html.ddcf1c53.js",revision:null},{url:"assets/index.html.ed897498.js",revision:null},{url:"assets/index.html.f4a140e8.js",revision:null},{url:"assets/index.html.f4e69a46.js",revision:null},{url:"assets/index.html.f8ae93fd.js",revision:null},{url:"assets/index.html.feaf5672.js",revision:null},{url:"assets/index.html.feebcd56.js",revision:null},{url:"assets/Layout.6c773123.js",revision:null},{url:"assets/mroot.html.059678b2.js",revision:null},{url:"assets/mroot.html.3a48b1ac.js",revision:null},{url:"assets/mroot.html.788c25ac.js",revision:null},{url:"assets/mroot.html.e973fb40.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/provider.html.0c890a4a.js",revision:null},{url:"assets/provider.html.4340b966.js",revision:null},{url:"assets/provider.html.490a0c20.js",revision:null},{url:"assets/provider.html.ba50b265.js",revision:null},{url:"assets/schedules.html.4a14ed52.js",revision:null},{url:"assets/schedules.html.5111962c.js",revision:null},{url:"assets/schedules.html.61bac54a.js",revision:null},{url:"assets/schedules.html.7380f4be.js",revision:null},{url:"assets/schedules.html.932b0134.js",revision:null},{url:"assets/schedules.html.9ed9f184.js",revision:null},{url:"assets/schedules.html.f27caafe.js",revision:null},{url:"assets/schedules.html.f2a73869.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/start-activity.html.331eafd5.js",revision:null},{url:"assets/start-activity.html.648f24bb.js",revision:null},{url:"assets/start-activity.html.9a949ef4.js",revision:null},{url:"assets/start-activity.html.f5ddb820.js",revision:null},{url:"assets/style.86ae5815.css",revision:null},{url:"assets/uri.html.5d303ad7.js",revision:null},{url:"assets/uri.html.77cc5035.js",revision:null},{url:"assets/uri.html.95e14674.js",revision:null},{url:"assets/uri.html.d3821596.js",revision:null},{url:"assets/warning.html.33bdb268.js",revision:null},{url:"assets/warning.html.4a89dd54.js",revision:null},{url:"assets/warning.html.83bddd3a.js",revision:null},{url:"assets/warning.html.f2b9b09a.js",revision:null},{url:"en-US/about/contactUs.html",revision:"94b9ee140b224b8359b6de31c9f731e5"},{url:"en-US/api/index.html",revision:"12ebb084ef4f249a1ec4b032fd056243"},{url:"en-US/api/provider.html",revision:"3e70ad0a852fa99932ba8f10c7281a79"},{url:"en-US/api/start-activity.html",revision:"ea931d0a4adb69e35e09d446216818a7"},{url:"en-US/api/uri.html",revision:"1094be010a887df03a4d0c800501ccc7"},{url:"en-US/changelog/index.html",revision:"190b588ae73b88b5bac34c8556830a93"},{url:"en-US/download/index.html",revision:"28baa39a2173f439e477248ff92174b1"},{url:"en-US/faq/daily.html",revision:"10dff8c6b2d622f27b8b4b7fb75df87f"},{url:"en-US/faq/index.html",revision:"f2c635ab74f727a84c2845f3723e48e9"},{url:"en-US/faq/mroot.html",revision:"c60243523506ec091f3d6f3de03fdb8c"},{url:"en-US/faq/schedules.html",revision:"1396862bdb961de76984c590726fdb82"},{url:"en-US/guide/enable-mroot.html",revision:"67ac9c632fe0493cfe30a31525307843"},{url:"en-US/guide/how-to-use.html",revision:"6b8ecfef512db6f627ff02a167a2fb0e"},{url:"en-US/guide/index.html",revision:"961cb55f70738546a1656a7dc7732518"},{url:"en-US/guide/schedules.html",revision:"4de58cfeb1948d0af60db2c0466ff333"},{url:"en-US/guide/warning.html",revision:"51454cfcfe2d1c92743ac2d7ae584a4c"},{url:"en-US/index.html",revision:"c0be4ce51f16cb4a3ab84dc7efc7bf12"},{url:"en-US/thanks/index.html",revision:"0df39b0a6cb52b33b6072b5f0ce279b0"},{url:"index.html",revision:"d4e6bd1df5930825196aec78cc9af17c"},{url:"zh-CN/about/contactUs.html",revision:"78fa6b973efc2966c37020910d68e42c"},{url:"zh-CN/api/index.html",revision:"55964a98ae6887d3aa5bf30a7fdcf18b"},{url:"zh-CN/api/provider.html",revision:"c6c6103d53d007bd9a5e1d86e36fcc60"},{url:"zh-CN/api/start-activity.html",revision:"de68cb3e917c94d36b857231c3d087db"},{url:"zh-CN/api/uri.html",revision:"d97513573354c119141263328d98721c"},{url:"zh-CN/changelog/index.html",revision:"69549e4e27ca6f29cb32eddeaccb3558"},{url:"zh-CN/download/index.html",revision:"5b683600c6f9cd5eee7aa72e3298dd88"},{url:"zh-CN/faq/daily.html",revision:"95fd4ffa101c634bdd84d8e964694572"},{url:"zh-CN/faq/index.html",revision:"7b9410871dd7a497a802213ed4c8feb2"},{url:"zh-CN/faq/mroot.html",revision:"68f2aab3b7fe005a926967c43931f1bc"},{url:"zh-CN/faq/schedules.html",revision:"b0a70cf2f92d688cbb9ed6b417184a89"},{url:"zh-CN/guide/enable-mroot.html",revision:"563c17511340961347d428ea7a438b0b"},{url:"zh-CN/guide/how-to-use.html",revision:"4da8119d73280554a0d2efcae4d7f5db"},{url:"zh-CN/guide/index.html",revision:"a461763b6f9f79567378dcbe505fbc1e"},{url:"zh-CN/guide/schedules.html",revision:"e80de1ade0c311baf033d99961de09e2"},{url:"zh-CN/guide/warning.html",revision:"e1bba75af799c3b44904240d93b7db19"},{url:"zh-CN/index.html",revision:"b3cc32678069edf218c8b12fb69e74bd"},{url:"zh-CN/thanks/index.html",revision:"a607038371097908ef32d241e5d2f5c2"}],{})}));
