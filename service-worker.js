if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const a=s=>l(s,n),u={module:{uri:n},exports:t,require:a};e[n]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(r(...s),t)))}}define(["./workbox-bd9393cf"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"19d4991827f8303f77d3fc68cdbcc7fe"},{url:"assets/20180207104242.696221d5.js",revision:null},{url:"assets/404.26379fa9.js",revision:null},{url:"assets/404.html.2f7b4174.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.de6b7d99.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/contactUs.html.1352fe29.js",revision:null},{url:"assets/contactUs.html.4fd90241.js",revision:null},{url:"assets/contactUs.html.572c541d.js",revision:null},{url:"assets/contactUs.html.5a9c04b6.js",revision:null},{url:"assets/contactUs.html.5b152782.js",revision:null},{url:"assets/contactUs.html.7bbfd2b8.js",revision:null},{url:"assets/contactUs.html.8a57b8ba.js",revision:null},{url:"assets/contactUs.html.a95457ea.js",revision:null},{url:"assets/contactUs.html.ae190970.js",revision:null},{url:"assets/contactUs.html.b7548b93.js",revision:null},{url:"assets/contactUs.html.c5a224d3.js",revision:null},{url:"assets/contactUs.html.ddc72fd7.js",revision:null},{url:"assets/contactUs.html.f739d9dd.js",revision:null},{url:"assets/contactUs.html.f9e133d3.js",revision:null},{url:"assets/contactUs.html.fb34403b.js",revision:null},{url:"assets/contactUs.html.ffaf12d7.js",revision:null},{url:"assets/daily.html.093ac5e7.js",revision:null},{url:"assets/daily.html.3572ddad.js",revision:null},{url:"assets/daily.html.3e30318e.js",revision:null},{url:"assets/daily.html.5fc4108d.js",revision:null},{url:"assets/daily.html.61f232f4.js",revision:null},{url:"assets/daily.html.71a074a5.js",revision:null},{url:"assets/daily.html.7e2a8a80.js",revision:null},{url:"assets/daily.html.89086a8f.js",revision:null},{url:"assets/daily.html.aac5e628.js",revision:null},{url:"assets/daily.html.acf52114.js",revision:null},{url:"assets/daily.html.c6a8aa94.js",revision:null},{url:"assets/daily.html.c8c88d7f.js",revision:null},{url:"assets/daily.html.d0c179e7.js",revision:null},{url:"assets/daily.html.da798e9d.js",revision:null},{url:"assets/daily.html.ec17b1cf.js",revision:null},{url:"assets/daily.html.ffaef9aa.js",revision:null},{url:"assets/enable-mroot.html.2d84c44a.js",revision:null},{url:"assets/enable-mroot.html.308aa5e7.js",revision:null},{url:"assets/enable-mroot.html.33822278.js",revision:null},{url:"assets/enable-mroot.html.4011a3e4.js",revision:null},{url:"assets/enable-mroot.html.45f6b45f.js",revision:null},{url:"assets/enable-mroot.html.4f92846f.js",revision:null},{url:"assets/enable-mroot.html.6ca6184e.js",revision:null},{url:"assets/enable-mroot.html.7ed7ff4b.js",revision:null},{url:"assets/enable-mroot.html.8afdf9a1.js",revision:null},{url:"assets/enable-mroot.html.8edc5e71.js",revision:null},{url:"assets/enable-mroot.html.91aa68dd.js",revision:null},{url:"assets/enable-mroot.html.a2d697be.js",revision:null},{url:"assets/enable-mroot.html.ab282158.js",revision:null},{url:"assets/enable-mroot.html.b6a95178.js",revision:null},{url:"assets/enable-mroot.html.e1302bf9.js",revision:null},{url:"assets/enable-mroot.html.e81d6814.js",revision:null},{url:"assets/how-to-use.html.01be5fd9.js",revision:null},{url:"assets/how-to-use.html.0276cc99.js",revision:null},{url:"assets/how-to-use.html.0aea5003.js",revision:null},{url:"assets/how-to-use.html.180e4973.js",revision:null},{url:"assets/how-to-use.html.3745ba08.js",revision:null},{url:"assets/how-to-use.html.52fc599e.js",revision:null},{url:"assets/how-to-use.html.53d10203.js",revision:null},{url:"assets/how-to-use.html.677b1078.js",revision:null},{url:"assets/how-to-use.html.7b23c799.js",revision:null},{url:"assets/how-to-use.html.8176304f.js",revision:null},{url:"assets/how-to-use.html.8c064aa9.js",revision:null},{url:"assets/how-to-use.html.973ad1e7.js",revision:null},{url:"assets/how-to-use.html.b210b4e9.js",revision:null},{url:"assets/how-to-use.html.ca6990ac.js",revision:null},{url:"assets/how-to-use.html.ea23fd11.js",revision:null},{url:"assets/how-to-use.html.f2d19724.js",revision:null},{url:"assets/icons/apple-touch-icon-152x152.png",revision:"c05c8e4546b8e74483cb8ff465749a08"},{url:"assets/icons/msapplication-icon-144x144.png",revision:"cb48ad61b7f2ec0e908141aa35806ea6"},{url:"assets/icons/safari-pinned-tab.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/20180207104242.png",revision:"b91b3660380ae4f1f8fefd284ba94a55"},{url:"assets/img/logo.png",revision:"757b632912a0fc3126d7661366e7849d"},{url:"assets/img/logo.svg",revision:"1ed3c878d60c65c03e9cd5794be8a754"},{url:"assets/img/manifest_json/images/homescreen144.png",revision:"2660b9fbac1b7c82473edaa43564f675"},{url:"assets/img/manifest_json/images/homescreen168.png",revision:"64d66122dc7a8f892a08cb0cd39d693f"},{url:"assets/img/manifest_json/images/homescreen192.png",revision:"98c878af6f08889c8a1a94ee42091bc4"},{url:"assets/img/manifest_json/images/homescreen48.png",revision:"a0eee1cba3aaa6ddbf28eb6c539b5985"},{url:"assets/img/manifest_json/images/homescreen72.png",revision:"58da9becadf63efcd99f6907105dbfd6"},{url:"assets/img/manifest_json/images/homescreen96.png",revision:"81bb0bcad8cb5353133e9d679d90cbc7"},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.01f947ea.js",revision:null},{url:"assets/index.html.05000b95.js",revision:null},{url:"assets/index.html.05f2582c.js",revision:null},{url:"assets/index.html.0625c24b.js",revision:null},{url:"assets/index.html.0b1c411e.js",revision:null},{url:"assets/index.html.0c7a0d17.js",revision:null},{url:"assets/index.html.0dc1f8a8.js",revision:null},{url:"assets/index.html.0e0b9357.js",revision:null},{url:"assets/index.html.0f0625e2.js",revision:null},{url:"assets/index.html.10c8d2b3.js",revision:null},{url:"assets/index.html.11b38e9e.js",revision:null},{url:"assets/index.html.12205da3.js",revision:null},{url:"assets/index.html.138fe2e4.js",revision:null},{url:"assets/index.html.157765ae.js",revision:null},{url:"assets/index.html.1838b006.js",revision:null},{url:"assets/index.html.24b32bca.js",revision:null},{url:"assets/index.html.24e68c79.js",revision:null},{url:"assets/index.html.2d11f4d3.js",revision:null},{url:"assets/index.html.307d5ac4.js",revision:null},{url:"assets/index.html.30e348f1.js",revision:null},{url:"assets/index.html.326f48cc.js",revision:null},{url:"assets/index.html.341431f2.js",revision:null},{url:"assets/index.html.34219ae1.js",revision:null},{url:"assets/index.html.35f2d0f5.js",revision:null},{url:"assets/index.html.3681a75f.js",revision:null},{url:"assets/index.html.3adcdc53.js",revision:null},{url:"assets/index.html.41814070.js",revision:null},{url:"assets/index.html.434394c8.js",revision:null},{url:"assets/index.html.435e7cbe.js",revision:null},{url:"assets/index.html.43e5ad5b.js",revision:null},{url:"assets/index.html.440487e4.js",revision:null},{url:"assets/index.html.47d3ed07.js",revision:null},{url:"assets/index.html.4859e997.js",revision:null},{url:"assets/index.html.4a37759e.js",revision:null},{url:"assets/index.html.4b8184c9.js",revision:null},{url:"assets/index.html.4e445f90.js",revision:null},{url:"assets/index.html.527f762f.js",revision:null},{url:"assets/index.html.557116af.js",revision:null},{url:"assets/index.html.565750bf.js",revision:null},{url:"assets/index.html.5747e0cf.js",revision:null},{url:"assets/index.html.5ac14cc2.js",revision:null},{url:"assets/index.html.5e0638cd.js",revision:null},{url:"assets/index.html.63a3a5fa.js",revision:null},{url:"assets/index.html.647375fe.js",revision:null},{url:"assets/index.html.66444707.js",revision:null},{url:"assets/index.html.68d015c5.js",revision:null},{url:"assets/index.html.69ed0e15.js",revision:null},{url:"assets/index.html.6af0f26a.js",revision:null},{url:"assets/index.html.6d1860c1.js",revision:null},{url:"assets/index.html.6e37c149.js",revision:null},{url:"assets/index.html.6edd76ec.js",revision:null},{url:"assets/index.html.7075b33f.js",revision:null},{url:"assets/index.html.7834fe74.js",revision:null},{url:"assets/index.html.79605260.js",revision:null},{url:"assets/index.html.79a31866.js",revision:null},{url:"assets/index.html.7e48afd8.js",revision:null},{url:"assets/index.html.8011c94b.js",revision:null},{url:"assets/index.html.838b31ee.js",revision:null},{url:"assets/index.html.83e4af9e.js",revision:null},{url:"assets/index.html.84099c1e.js",revision:null},{url:"assets/index.html.84cb6b2f.js",revision:null},{url:"assets/index.html.8c375bcf.js",revision:null},{url:"assets/index.html.8de69254.js",revision:null},{url:"assets/index.html.8decd192.js",revision:null},{url:"assets/index.html.8e0b4d77.js",revision:null},{url:"assets/index.html.8f8b840c.js",revision:null},{url:"assets/index.html.927cfda0.js",revision:null},{url:"assets/index.html.952b4761.js",revision:null},{url:"assets/index.html.95768dfe.js",revision:null},{url:"assets/index.html.9682b54a.js",revision:null},{url:"assets/index.html.969a0eb7.js",revision:null},{url:"assets/index.html.972ac85b.js",revision:null},{url:"assets/index.html.9ad90d5d.js",revision:null},{url:"assets/index.html.9cd418cb.js",revision:null},{url:"assets/index.html.9e5a0ad6.js",revision:null},{url:"assets/index.html.a4421dce.js",revision:null},{url:"assets/index.html.a48214d0.js",revision:null},{url:"assets/index.html.a4bb5987.js",revision:null},{url:"assets/index.html.a52219d1.js",revision:null},{url:"assets/index.html.a6ce0456.js",revision:null},{url:"assets/index.html.a8de685d.js",revision:null},{url:"assets/index.html.aa50ff4b.js",revision:null},{url:"assets/index.html.b6cc00da.js",revision:null},{url:"assets/index.html.b818e28e.js",revision:null},{url:"assets/index.html.b856fa87.js",revision:null},{url:"assets/index.html.c12ad8cd.js",revision:null},{url:"assets/index.html.c28d6028.js",revision:null},{url:"assets/index.html.c6e42b6c.js",revision:null},{url:"assets/index.html.c78a5b6b.js",revision:null},{url:"assets/index.html.c927f16a.js",revision:null},{url:"assets/index.html.c987c45f.js",revision:null},{url:"assets/index.html.cb58eceb.js",revision:null},{url:"assets/index.html.cc95a779.js",revision:null},{url:"assets/index.html.d1793972.js",revision:null},{url:"assets/index.html.d2a6fa80.js",revision:null},{url:"assets/index.html.d351af81.js",revision:null},{url:"assets/index.html.d39570f8.js",revision:null},{url:"assets/index.html.d74795fb.js",revision:null},{url:"assets/index.html.d7efe98c.js",revision:null},{url:"assets/index.html.d88cc4eb.js",revision:null},{url:"assets/index.html.d9a50bf3.js",revision:null},{url:"assets/index.html.da963134.js",revision:null},{url:"assets/index.html.db498cb4.js",revision:null},{url:"assets/index.html.dd0c0fbc.js",revision:null},{url:"assets/index.html.e187db66.js",revision:null},{url:"assets/index.html.e24abdde.js",revision:null},{url:"assets/index.html.e9067ba8.js",revision:null},{url:"assets/index.html.ef22cd12.js",revision:null},{url:"assets/index.html.f0584e77.js",revision:null},{url:"assets/index.html.f607bde3.js",revision:null},{url:"assets/index.html.f67a9146.js",revision:null},{url:"assets/index.html.f71e21fe.js",revision:null},{url:"assets/index.html.f7f4f1a9.js",revision:null},{url:"assets/index.html.f9064db5.js",revision:null},{url:"assets/Layout.51cc9f99.js",revision:null},{url:"assets/mroot.html.0189c1e5.js",revision:null},{url:"assets/mroot.html.037805db.js",revision:null},{url:"assets/mroot.html.184981fd.js",revision:null},{url:"assets/mroot.html.25e76fb2.js",revision:null},{url:"assets/mroot.html.2b03a476.js",revision:null},{url:"assets/mroot.html.2d7bcb2e.js",revision:null},{url:"assets/mroot.html.38219064.js",revision:null},{url:"assets/mroot.html.3dd3ded2.js",revision:null},{url:"assets/mroot.html.400a2d6c.js",revision:null},{url:"assets/mroot.html.4452a7dd.js",revision:null},{url:"assets/mroot.html.75204c75.js",revision:null},{url:"assets/mroot.html.a5844618.js",revision:null},{url:"assets/mroot.html.a6331ee7.js",revision:null},{url:"assets/mroot.html.aef01dc5.js",revision:null},{url:"assets/mroot.html.bd2bb541.js",revision:null},{url:"assets/mroot.html.dd9ec6d3.js",revision:null},{url:"assets/provider.html.077f75c4.js",revision:null},{url:"assets/provider.html.0a81130a.js",revision:null},{url:"assets/provider.html.0e4d6d74.js",revision:null},{url:"assets/provider.html.5600bea7.js",revision:null},{url:"assets/provider.html.616e29fb.js",revision:null},{url:"assets/provider.html.6d192795.js",revision:null},{url:"assets/provider.html.76a5b9c5.js",revision:null},{url:"assets/provider.html.82f1841a.js",revision:null},{url:"assets/provider.html.add61775.js",revision:null},{url:"assets/provider.html.b80888d9.js",revision:null},{url:"assets/provider.html.be4b8d24.js",revision:null},{url:"assets/provider.html.cbdd0077.js",revision:null},{url:"assets/provider.html.df3c6aa7.js",revision:null},{url:"assets/provider.html.e2e4573f.js",revision:null},{url:"assets/provider.html.f4590584.js",revision:null},{url:"assets/provider.html.ffa0db48.js",revision:null},{url:"assets/schedules.html.0547e8ae.js",revision:null},{url:"assets/schedules.html.06f95048.js",revision:null},{url:"assets/schedules.html.16df65dc.js",revision:null},{url:"assets/schedules.html.1c2b00b8.js",revision:null},{url:"assets/schedules.html.27f5daa7.js",revision:null},{url:"assets/schedules.html.3ee89bf9.js",revision:null},{url:"assets/schedules.html.41822b02.js",revision:null},{url:"assets/schedules.html.5c902d00.js",revision:null},{url:"assets/schedules.html.69013874.js",revision:null},{url:"assets/schedules.html.7a26d376.js",revision:null},{url:"assets/schedules.html.7e29bb41.js",revision:null},{url:"assets/schedules.html.804bf284.js",revision:null},{url:"assets/schedules.html.939f9511.js",revision:null},{url:"assets/schedules.html.979e324d.js",revision:null},{url:"assets/schedules.html.a2f06227.js",revision:null},{url:"assets/schedules.html.a8c195f0.js",revision:null},{url:"assets/schedules.html.a9591585.js",revision:null},{url:"assets/schedules.html.c152cd24.js",revision:null},{url:"assets/schedules.html.c305cb32.js",revision:null},{url:"assets/schedules.html.ca8801bf.js",revision:null},{url:"assets/schedules.html.cb44b8b0.js",revision:null},{url:"assets/schedules.html.d0b48b61.js",revision:null},{url:"assets/schedules.html.d5a0bda7.js",revision:null},{url:"assets/schedules.html.de7677ec.js",revision:null},{url:"assets/schedules.html.e0baeaa0.js",revision:null},{url:"assets/schedules.html.e3d03c55.js",revision:null},{url:"assets/schedules.html.f015fb40.js",revision:null},{url:"assets/schedules.html.f369a6ba.js",revision:null},{url:"assets/schedules.html.f94b19d3.js",revision:null},{url:"assets/schedules.html.fcdd0c28.js",revision:null},{url:"assets/schedules.html.fcee7fac.js",revision:null},{url:"assets/schedules.html.fe580f1a.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/start-activity.html.083bb9ec.js",revision:null},{url:"assets/start-activity.html.12ff0529.js",revision:null},{url:"assets/start-activity.html.2bc61e29.js",revision:null},{url:"assets/start-activity.html.3275fbcd.js",revision:null},{url:"assets/start-activity.html.4e1d7001.js",revision:null},{url:"assets/start-activity.html.62ec0c5d.js",revision:null},{url:"assets/start-activity.html.6765eeaa.js",revision:null},{url:"assets/start-activity.html.6a023d5d.js",revision:null},{url:"assets/start-activity.html.6a58b7cd.js",revision:null},{url:"assets/start-activity.html.787d1c61.js",revision:null},{url:"assets/start-activity.html.98b79d68.js",revision:null},{url:"assets/start-activity.html.9db0324e.js",revision:null},{url:"assets/start-activity.html.c17868c0.js",revision:null},{url:"assets/start-activity.html.ceeadd5f.js",revision:null},{url:"assets/start-activity.html.d85450c4.js",revision:null},{url:"assets/start-activity.html.f0d12168.js",revision:null},{url:"assets/style.c63797f2.css",revision:null},{url:"assets/uri.html.0857a9b7.js",revision:null},{url:"assets/uri.html.0f4cad22.js",revision:null},{url:"assets/uri.html.1db51b46.js",revision:null},{url:"assets/uri.html.2733ed63.js",revision:null},{url:"assets/uri.html.2972dd4f.js",revision:null},{url:"assets/uri.html.5da20666.js",revision:null},{url:"assets/uri.html.64e702f5.js",revision:null},{url:"assets/uri.html.77cb8cf4.js",revision:null},{url:"assets/uri.html.7c0d9b66.js",revision:null},{url:"assets/uri.html.90144d45.js",revision:null},{url:"assets/uri.html.98be87e7.js",revision:null},{url:"assets/uri.html.aaafbe60.js",revision:null},{url:"assets/uri.html.ad284c64.js",revision:null},{url:"assets/uri.html.bd8dd928.js",revision:null},{url:"assets/uri.html.cab5bb2a.js",revision:null},{url:"assets/uri.html.e8b79a8e.js",revision:null},{url:"assets/warning.html.0ee8d433.js",revision:null},{url:"assets/warning.html.2317760c.js",revision:null},{url:"assets/warning.html.256c5bf2.js",revision:null},{url:"assets/warning.html.2b8d64d3.js",revision:null},{url:"assets/warning.html.452114b2.js",revision:null},{url:"assets/warning.html.45ce5d19.js",revision:null},{url:"assets/warning.html.47185b04.js",revision:null},{url:"assets/warning.html.584106a6.js",revision:null},{url:"assets/warning.html.67c7e888.js",revision:null},{url:"assets/warning.html.88f0af41.js",revision:null},{url:"assets/warning.html.9de3f643.js",revision:null},{url:"assets/warning.html.abfde66c.js",revision:null},{url:"assets/warning.html.b8a095da.js",revision:null},{url:"assets/warning.html.c2da94c5.js",revision:null},{url:"assets/warning.html.ed685789.js",revision:null},{url:"assets/warning.html.f3038373.js",revision:null},{url:"en-US/about/contactUs.html",revision:"48b8263766a867cf963a2184de1a731e"},{url:"en-US/api/index.html",revision:"ecd1e2cb05aa1649d94b60f51e6478a2"},{url:"en-US/api/provider.html",revision:"3529833ea17a14cccc20cdcbb81aaee8"},{url:"en-US/api/start-activity.html",revision:"553464734e2d0788bb9963d14d140594"},{url:"en-US/api/uri.html",revision:"d253ee293444268a2fffd4a7a72968b0"},{url:"en-US/changelog/index.html",revision:"f8a4e7d331eff057804d86e58694de2a"},{url:"en-US/download/index.html",revision:"f4f7e434fb2e267c168a705acb82c060"},{url:"en-US/faq/daily.html",revision:"9d13f86ee37a12395c248586df24d583"},{url:"en-US/faq/index.html",revision:"6a569ae1746d41d03836580008a71077"},{url:"en-US/faq/mroot.html",revision:"672e23645fca2b3e8578df9b82b4b109"},{url:"en-US/faq/schedules.html",revision:"ed8294d34da916c28211ef0981d495c2"},{url:"en-US/guide/enable-mroot.html",revision:"536917579e944b302a96756bb9d3e9f4"},{url:"en-US/guide/how-to-use.html",revision:"3212ac883a4242c560cd26afc45374ef"},{url:"en-US/guide/index.html",revision:"a7293c661abb7e66af835382d4c7d766"},{url:"en-US/guide/schedules.html",revision:"74433046914ed51e73ac68205e6612fe"},{url:"en-US/guide/warning.html",revision:"1325878460417ed4dc792d06225c6b71"},{url:"en-US/index.html",revision:"cd65a723f43e5907191ad622bd64189a"},{url:"en-US/thanks/index.html",revision:"30485b6a7f5a9be7ef72ee293638554a"},{url:"index.html",revision:"ac7d4ffe707fd4e874b211ec556c930e"},{url:"pt-BR/about/contactUs.html",revision:"e6dc4267736e21718c51be1d3f83336f"},{url:"pt-BR/api/index.html",revision:"d2cea279922caf7c243ede62cadcc698"},{url:"pt-BR/api/provider.html",revision:"c70eaf4b623993488bd50898ac2464c6"},{url:"pt-BR/api/start-activity.html",revision:"ad6edbcf09cb89347540497cd46ad65c"},{url:"pt-BR/api/uri.html",revision:"82caee00d5b1bde25e40a56d465c8b7d"},{url:"pt-BR/changelog/index.html",revision:"42bcf5243cd34d7ef1db44dc75a7128c"},{url:"pt-BR/download/index.html",revision:"e5dc3b5e8e64b2bff4f2d00abac70114"},{url:"pt-BR/faq/daily.html",revision:"213e348c1f2f64168dc3bb15b50ced32"},{url:"pt-BR/faq/index.html",revision:"e4c39848eaffc7233941a73bacf44c0b"},{url:"pt-BR/faq/mroot.html",revision:"d3969508858b21efb94e3eb6a7d4c0ad"},{url:"pt-BR/faq/schedules.html",revision:"a90a231626cdac75648b1f096920abb9"},{url:"pt-BR/guide/enable-mroot.html",revision:"c7cb5ba4976512e9d472e6240b0b8d6c"},{url:"pt-BR/guide/how-to-use.html",revision:"667e4ee7bb9a7614a57ba2533e32f9f7"},{url:"pt-BR/guide/index.html",revision:"1a0a622b3e89c5d3bb575fd4de77160f"},{url:"pt-BR/guide/schedules.html",revision:"c0962a27274a332e1dbba28f602ee041"},{url:"pt-BR/guide/warning.html",revision:"9fb08cf37836a32721ac74cb835d8d6a"},{url:"pt-BR/index.html",revision:"3fc2c42ba3104f258a7be4d7ce6fc07c"},{url:"pt-BR/thanks/index.html",revision:"e1d5db125bf069381a6b4a420bc8e060"},{url:"ru-RU/about/contactUs.html",revision:"17e2b0bdac621ff08d5e664f176e8f62"},{url:"ru-RU/api/index.html",revision:"e08dc2d93d656da69fa9d838e2b327f7"},{url:"ru-RU/api/provider.html",revision:"8cffe44bd4891a6839dff29764f9ed39"},{url:"ru-RU/api/start-activity.html",revision:"6b0ec1c5a4b97292728b33b25549f07a"},{url:"ru-RU/api/uri.html",revision:"3570222c18619c22294e02bee3566dc1"},{url:"ru-RU/changelog/index.html",revision:"5f9bf320efbe3e59cd791468c7a08aeb"},{url:"ru-RU/download/index.html",revision:"bc8be1308222f7d5dbe4c5c0d679ea80"},{url:"ru-RU/faq/daily.html",revision:"4ed2d28ec40f64cc1ebcd93d8772b4ad"},{url:"ru-RU/faq/index.html",revision:"f18d4f24b24dcd218d68446ec185ce9a"},{url:"ru-RU/faq/mroot.html",revision:"faeee943e8ff028fc6b23f488b6ae24c"},{url:"ru-RU/faq/schedules.html",revision:"7e4307de180955790f3942486c75801a"},{url:"ru-RU/guide/enable-mroot.html",revision:"3eec5a8bd210de84ab7baec2a4e75dd8"},{url:"ru-RU/guide/how-to-use.html",revision:"05461974255105998ee9e3421fcc415e"},{url:"ru-RU/guide/index.html",revision:"5f7fba9511200f4e5a9ef59e7fbe4cdc"},{url:"ru-RU/guide/schedules.html",revision:"ce4c9e2d6a5c4bc93d6c53aede41d10e"},{url:"ru-RU/guide/warning.html",revision:"9ff99986c4d5af5c4254f310d540c6d9"},{url:"ru-RU/index.html",revision:"9e53ef92ec6748069e33e6a95cc83cc2"},{url:"ru-RU/thanks/index.html",revision:"ba0d2cb1ab0eaa9f70f82739e7ba0d3d"},{url:"ru-UA/about/contactUs.html",revision:"4aed5c9526028b01f92df050e6747d66"},{url:"ru-UA/api/index.html",revision:"f0aaf895bd4a222047b8d75965b7209f"},{url:"ru-UA/api/provider.html",revision:"eb27ab5bde566d06121ab211efb287f8"},{url:"ru-UA/api/start-activity.html",revision:"22d8485b1fa52d1fefadc81acc6ff52f"},{url:"ru-UA/api/uri.html",revision:"a7443b166c2badc11042f989d6756285"},{url:"ru-UA/changelog/index.html",revision:"764833aa1390ea2826c30945d38936c4"},{url:"ru-UA/download/index.html",revision:"d196352c77d91365742a1befa457b526"},{url:"ru-UA/faq/daily.html",revision:"3294045d94d9e2b998b6c3d2149ba834"},{url:"ru-UA/faq/index.html",revision:"8268206a69a5ec7417a406f79569cf7a"},{url:"ru-UA/faq/mroot.html",revision:"a6257c4cdd7302698852d5da7b725927"},{url:"ru-UA/faq/schedules.html",revision:"839a33edcf9f026b6f4bd220ca2d8f5c"},{url:"ru-UA/guide/enable-mroot.html",revision:"9225167ee926da72f364ad7c8d52416e"},{url:"ru-UA/guide/how-to-use.html",revision:"edbd115c3977471e041bdc2798a43394"},{url:"ru-UA/guide/index.html",revision:"756ca9b7354c5d3c108d0646fc630a98"},{url:"ru-UA/guide/schedules.html",revision:"66061ff77ebadd0740293635fa1d11bd"},{url:"ru-UA/guide/warning.html",revision:"700ec3ae39db7af82516c01e809f24cd"},{url:"ru-UA/index.html",revision:"42df0b251616c278e604bf269de39ae5"},{url:"ru-UA/thanks/index.html",revision:"cccfdbd18d36c666a757cef7983a1238"},{url:"tr-TR/about/contactUs.html",revision:"570398deb71bb5867d47a5f74774aa05"},{url:"tr-TR/api/index.html",revision:"6a8b727ec26cabd6f9e266fd522742f6"},{url:"tr-TR/api/provider.html",revision:"a881886033b6899201cbe0508fda0bde"},{url:"tr-TR/api/start-activity.html",revision:"cdea4aa4a0ab18f97bea704f988f15f5"},{url:"tr-TR/api/uri.html",revision:"91efe5c4e964eca27fc93a6aef25dcbd"},{url:"tr-TR/changelog/index.html",revision:"98cc203005e8653e50b9d8485adc9c5b"},{url:"tr-TR/download/index.html",revision:"e86f8046902e6539c73f8fb22a7f6ef5"},{url:"tr-TR/faq/daily.html",revision:"e3731bc4f84198d0d1ba48e7f8c2c7d8"},{url:"tr-TR/faq/index.html",revision:"e203290f6c3eeda1edcde7227e89f199"},{url:"tr-TR/faq/mroot.html",revision:"d0c97e141cb718d9ca659b58f093a294"},{url:"tr-TR/faq/schedules.html",revision:"625729665eb973de1bc4b47bf934aca6"},{url:"tr-TR/guide/enable-mroot.html",revision:"278f19a2cb4359d03c67c78679c2b878"},{url:"tr-TR/guide/how-to-use.html",revision:"e679f16b7e4a894aa99bf2525b232742"},{url:"tr-TR/guide/index.html",revision:"a02ed4de40634f8a6d3acc795c928967"},{url:"tr-TR/guide/schedules.html",revision:"ba0c9aba7fc61617fa4c81da3acb6f01"},{url:"tr-TR/guide/warning.html",revision:"f190e9320e1fd4ec9767f13156b400e1"},{url:"tr-TR/index.html",revision:"77622d879043d441745687dbb5d3c1f5"},{url:"tr-TR/thanks/index.html",revision:"04974873cbf4f70ff4ed2d88704deae0"},{url:"uk-UA/about/contactUs.html",revision:"e22b0c42980c6a236d7d31bda66ab30a"},{url:"uk-UA/api/index.html",revision:"38019123392a941138615b38fd8c821f"},{url:"uk-UA/api/provider.html",revision:"d20d61ef8f7808d484c99171ca1667d1"},{url:"uk-UA/api/start-activity.html",revision:"65da1d1ffda88d0e3b25ae54d47c0067"},{url:"uk-UA/api/uri.html",revision:"a1819399ec8f85e5300f57ca5f0731fd"},{url:"uk-UA/changelog/index.html",revision:"1721757eb595d3a946703c3b5fde2103"},{url:"uk-UA/download/index.html",revision:"5a730ee66c0dd945a39340a17b5b13d0"},{url:"uk-UA/faq/daily.html",revision:"2a059567b07433aa66024df59a275665"},{url:"uk-UA/faq/index.html",revision:"fdf1118518121cc0907bd0e6dd57c196"},{url:"uk-UA/faq/mroot.html",revision:"02a2f6bcbcea57825e98735971539635"},{url:"uk-UA/faq/schedules.html",revision:"cc0b027d366ddb49a8458feb36f70d1d"},{url:"uk-UA/guide/enable-mroot.html",revision:"b92cc7d2e3364b0d666de5ba9d71badf"},{url:"uk-UA/guide/how-to-use.html",revision:"a99d459c7a31f42c33167f1d9bc54072"},{url:"uk-UA/guide/index.html",revision:"c0cdf0d572e1d5142cd7329e4cd538b5"},{url:"uk-UA/guide/schedules.html",revision:"3054b6bd1e32a9e4dd343ce4921d0ac5"},{url:"uk-UA/guide/warning.html",revision:"23e7bd979e01914fdea3b3331484787c"},{url:"uk-UA/index.html",revision:"5f314bddde8e6f0e3fa67531a35a419a"},{url:"uk-UA/thanks/index.html",revision:"f02db48376d8c459605adc9238513d1e"},{url:"zh-CN/about/contactUs.html",revision:"0668a927df020486383ff03b0ebc9d9b"},{url:"zh-CN/api/index.html",revision:"0686289c9943aff47242e67949f06c45"},{url:"zh-CN/api/provider.html",revision:"d732d0181f8d0211bb4479fe9d8372da"},{url:"zh-CN/api/start-activity.html",revision:"35392548ae987c45362454a0b69f335c"},{url:"zh-CN/api/uri.html",revision:"9300bdcb9d1706f7bb32739a5d5e8c4f"},{url:"zh-CN/changelog/index.html",revision:"a377a4d99a1d5106e556569ce20b35af"},{url:"zh-CN/download/index.html",revision:"ba72dda94b89ba09f290653772be23b7"},{url:"zh-CN/faq/daily.html",revision:"60b430abdc650e5bbf26cd8ff48759f2"},{url:"zh-CN/faq/index.html",revision:"688f64f1f4bad882e45d7bd42326ab59"},{url:"zh-CN/faq/mroot.html",revision:"d32222093a34d2f5398759d11981622f"},{url:"zh-CN/faq/schedules.html",revision:"cfe1a32d0ce788b887aea9f6c6316b91"},{url:"zh-CN/guide/enable-mroot.html",revision:"360316264ea6daf4cea6896aa9d1d579"},{url:"zh-CN/guide/how-to-use.html",revision:"d38b3f5b25a8ae8ae92152c046182c0d"},{url:"zh-CN/guide/index.html",revision:"b210ddd2b53f09d45a9fc777ad2d9ec5"},{url:"zh-CN/guide/schedules.html",revision:"390b3e21e9648ee516de06ccb4270c1b"},{url:"zh-CN/guide/warning.html",revision:"6b1d36953f67aad293d72c7179487211"},{url:"zh-CN/index.html",revision:"3a36ccc955dd12fc2b4aebb9ca2c9e66"},{url:"zh-CN/thanks/index.html",revision:"2c0ea79e04f5ff593538ed4237d6472b"},{url:"zh-TW/about/contactUs.html",revision:"a0005f548b4ae8ce4c1d9ad67a3b62ac"},{url:"zh-TW/api/index.html",revision:"9fd1036bf92b765ec0d5b036a050a9a9"},{url:"zh-TW/api/provider.html",revision:"62bb1c1414141a769637eee5f47222b9"},{url:"zh-TW/api/start-activity.html",revision:"27dc24a960750c56798f34a37ecbaa67"},{url:"zh-TW/api/uri.html",revision:"e47ee731d146a3302e48c55560c0bd32"},{url:"zh-TW/changelog/index.html",revision:"92fd9bcb6280c0fa7c35ea4dbfa76fe2"},{url:"zh-TW/download/index.html",revision:"0a2fe137fbd3b85426cf2d11156bf00d"},{url:"zh-TW/faq/daily.html",revision:"d35b0cacfba661ab2071fa002957fead"},{url:"zh-TW/faq/index.html",revision:"3c37121e92d4ef99a549f906664fffe6"},{url:"zh-TW/faq/mroot.html",revision:"76efabb5fe5c5adbfffe9b6f7ed36a89"},{url:"zh-TW/faq/schedules.html",revision:"1dbc6fa95f1605fe8883cef0f52eb976"},{url:"zh-TW/guide/enable-mroot.html",revision:"48e3bef3bd9c1bc8b66c104fcf6c7fe2"},{url:"zh-TW/guide/how-to-use.html",revision:"abcf3010142dd44c97173f80c5a96d24"},{url:"zh-TW/guide/index.html",revision:"c81b4ddefa9f12045fc9d4f87a8efba6"},{url:"zh-TW/guide/schedules.html",revision:"942b427685ef31fd78c3241eb8bb65e5"},{url:"zh-TW/guide/warning.html",revision:"d6615c46d02b9f9823cf7700ca737b32"},{url:"zh-TW/index.html",revision:"6583a2b88e19047fa61051bc5f464c50"},{url:"zh-TW/thanks/index.html",revision:"683d36a9a17212d3be5b6fc3fedec2a5"}],{})}));
