import{_ as l}from"./20180207104242.696221d5.js";import{_ as h,r as s,o as u,c as p,b as e,d as a,w as t,a as r,e as o}from"./app.19d099dd.js";const m={},f=r('<h1 id="habilitar-noroot" tabindex="-1"><a class="header-anchor" href="#habilitar-noroot" aria-hidden="true">#</a> Habilitar NoRoot</h1><p>Algumas fun\xE7\xF5es precisam que essa permiss\xE3o especial seja concedida antes que possam ser usadas normalmente, se n\xE3o forem necess\xE1rias, isso pode ser ignorado diretamente.</p><h2 id="aviso-de-risco" tabindex="-1"><a class="header-anchor" href="#aviso-de-risco" aria-hidden="true">#</a> Aviso de risco</h2><ul><li>So far, we have received two cases of user feedback. It is reported that the device&#39;s graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.</li><li>In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.</li><li>Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.</li><li>On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).</li></ul><h2 id="required-material" tabindex="-1"><a class="header-anchor" href="#required-material" aria-hidden="true">#</a> Required Material</h2><ul><li>Ferramentas ADB (fornecidas abaixo)</li><li>Alguns c\xF3digos (fornecidos abaixo)</li><li>Vers\xE3o do sistema do dispositivo Android 5.0+ e <code>FreezeYou</code><em>(\xFAltima vers\xE3o recomendada)</em> instalados</li></ul><h2 id="transferencia-do-arquivo" tabindex="-1"><a class="header-anchor" href="#transferencia-do-arquivo" aria-hidden="true">#</a> Transfer\xEAncia do arquivo</h2>',7),_=o("Ferramenta ADB e pacote de c\xF3digo (formato .zip): "),b={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},v=o("Link de transfer\xEAncia 1 (esta\xE7\xE3o de origem)"),y=o(" | "),g={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},w=o("Link de transfer\xEAncia 2 (Baidu Net Disk)"),x=e("h2",{id:"operation-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operation-method","aria-hidden":"true"},"#"),o(" Operation Method")],-1),k=r("<li>Go to the <code>Developer options</code> (if not seen, we can try to click the <code>About phone</code> several times, or search for <code>&quot;your device model&quot; + Developer options</code>).</li><li>Enable <code>USB debugging</code> and connect the device with a computer with ADB tools.</li><li>Fully unzip the previously downloaded archive (.zip format).</li><li>If wants to use <code>profile-owner</code> instead of <code>device-owner</code>, edit the <code>apply.xx</code> file, and replace the line <code>adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver</code> with <code>adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver</code>.</li><li>Linux users run <code>apply.sh</code>, and Windows users run <code>apply.cmd</code> or <code>apply</code>.</li>",5),R=o("If the output below "),z=e("code",null,"\u6B63\u5728\u5C1D\u8BD5\u542F\u7528\u514DROOT\u6A21\u5F0F......",-1),A=o(" contains "),q=e("code",null,"Success:",-1),B=o(", then most likely we succeeded. If not, we can go to "),N=o("NoRoot Faq"),C=o(" and various search engines to find solutions."),D=o("Always fail? \u2192 "),I=o("NoRoot Faq"),S=o("Too complex? \u2192 "),F={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},T=o("Use AutumnBox to enable FreezeYou NoRoot Mode"),L=e("h2",{id:"core-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#core-code","aria-hidden":"true"},"#"),o(" Core Code")],-1),O=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),j=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),G=r('<h2 id="captura-de-tela-da-operacao" tabindex="-1"><a class="header-anchor" href="#captura-de-tela-da-operacao" aria-hidden="true">#</a> Captura de tela da opera\xE7\xE3o</h2><p><img src="'+l+'" alt="Captura de tela da opera\xE7\xE3o"></p><h2 id="mais-informacoes" tabindex="-1"><a class="header-anchor" href="#mais-informacoes" aria-hidden="true">#</a> Mais informa\xE7\xF5es</h2>',3),M={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},U=o("AutumnBox"),V=o(" agora tem suporte para habilita\xE7\xE3o r\xE1pida do modo FreezeYou NoRoot"),E=e("h2",{id:"preciso-de-ajuda",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#preciso-de-ajuda","aria-hidden":"true"},"#"),o(" Preciso de ajuda")],-1),Y=o("Contact Us");function H(P,W){const i=s("ExternalLinkIcon"),n=s("RouterLink"),d=s("CodeGroupItem"),c=s("CodeGroup");return u(),p("div",null,[f,e("ul",null,[e("li",null,[_,e("a",b,[v,a(i)]),y,e("a",g,[w,a(i)])])]),x,e("ul",null,[k,e("li",null,[R,z,A,q,B,a(n,{to:"/pt-BR/faq/mroot.html"},{default:t(()=>[N]),_:1}),C]),e("li",null,[D,a(n,{to:"/pt-BR/faq/mroot.html"},{default:t(()=>[I]),_:1})]),e("li",null,[S,e("a",F,[T,a(i)])])]),L,a(c,null,{default:t(()=>[a(d,{title:"set-device-owner",active:""},{default:t(()=>[O]),_:1}),a(d,{title:"set-profile-owner"},{default:t(()=>[j]),_:1})]),_:1}),G,e("ul",null,[e("li",null,[e("a",M,[U,a(i)]),V])]),E,e("ul",null,[e("li",null,[a(n,{to:"/pt-BR/about/contactUs.html"},{default:t(()=>[Y]),_:1})])])])}var Q=h(m,[["render",H],["__file","enable-mroot.html.vue"]]);export{Q as default};
