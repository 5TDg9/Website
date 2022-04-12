import{_ as d,r,o as c,c as l,a as e,b as a,w as n,F as h,e as i,d as o}from"./app.61a3ca34.js";import{_ as u}from"./20180207104242.696221d5.js";const p={},m=i('<h1 id="habilitar-noroot" tabindex="-1"><a class="header-anchor" href="#habilitar-noroot" aria-hidden="true">#</a> Habilitar NoRoot</h1><p>Algumas fun\xE7\xF5es precisam que essa permiss\xE3o especial seja concedida antes que possam ser usadas normalmente, se n\xE3o forem necess\xE1rias, isso pode ser ignorado diretamente.</p><h2 id="aviso-de-risco" tabindex="-1"><a class="header-anchor" href="#aviso-de-risco" aria-hidden="true">#</a> Aviso de risco</h2><ul><li>So far, we have received two cases of user feedback. It is reported that the device&#39;s graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.</li><li>In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.</li><li>Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.</li><li>On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).</li></ul><h2 id="required-material" tabindex="-1"><a class="header-anchor" href="#required-material" aria-hidden="true">#</a> Required Material</h2><ul><li>Ferramentas ADB (fornecidas abaixo)</li><li>Alguns c\xF3digos (fornecidos abaixo)</li><li>Vers\xE3o do sistema do dispositivo Android 5.0+ e <code>FreezeYou</code><em>(\xFAltima vers\xE3o recomendada)</em> instalados</li></ul><h2 id="transferencia-do-arquivo" tabindex="-1"><a class="header-anchor" href="#transferencia-do-arquivo" aria-hidden="true">#</a> Transfer\xEAncia do arquivo</h2>',7),_=o("Ferramenta ADB e pacote de c\xF3digo (formato .zip): "),f={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},b=o("Link de transfer\xEAncia 1 (esta\xE7\xE3o de origem)"),v=o(" | "),y={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},g=o("Link de transfer\xEAncia 2 (Baidu Net Disk)"),w=e("h2",{id:"operation-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operation-method","aria-hidden":"true"},"#"),o(" Operation Method")],-1),k=i("<li>Go to the <code>Developer options</code> (if not seen, we can try to click the <code>About phone</code> several times, or search for <code>&quot;your device model&quot; + Developer options</code>).</li><li>Enable <code>USB debugging</code> and connect the device with a computer with ADB tools.</li><li>Fully unzip the previously downloaded archive (.zip format).</li><li>Linux users run <code>apply.sh</code>, and Windows users run <code>apply.cmd</code> or <code>apply</code>.</li>",4),x=o("If the output below "),q=e("code",null,"\u6B63\u5728\u5C1D\u8BD5\u542F\u7528\u514DROOT\u6A21\u5F0F......",-1),z=o(" contains "),A=e("code",null,"Success:",-1),R=o(", then most likely we succeeded. If not, we can go to "),B=o("NoRoot Faq"),N=o(" and various search engines to find solutions."),F=o("Always fail? \u2192 "),S=o("NoRoot Faq"),T=o("Too complex? \u2192 "),D={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},L=o("Use AutumnBox to enable FreezeYou NoRoot Mode"),j=i('<h2 id="captura-de-tela-da-operacao" tabindex="-1"><a class="header-anchor" href="#captura-de-tela-da-operacao" aria-hidden="true">#</a> Captura de tela da opera\xE7\xE3o</h2><p><img src="'+u+'" alt="Captura de tela da opera\xE7\xE3o"></p><h2 id="mais-informacoes" tabindex="-1"><a class="header-anchor" href="#mais-informacoes" aria-hidden="true">#</a> Mais informa\xE7\xF5es</h2>',3),I=e("li",null,[o("C\xF3digo principal: "),e("code",null,"adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver")],-1),O={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},C=o("AutumnBox"),M=o(" agora tem suporte para habilita\xE7\xE3o r\xE1pida do modo FreezeYou NoRoot"),V=e("h2",{id:"preciso-de-ajuda",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#preciso-de-ajuda","aria-hidden":"true"},"#"),o(" Preciso de ajuda")],-1),E={href:"https://jq.qq.com/?_wv=1027&k=l356Aq75",target:"_blank",rel:"noopener noreferrer"},U=o("Join QQ Group");function Y(G,H){const t=r("ExternalLinkIcon"),s=r("RouterLink");return c(),l(h,null,[m,e("ul",null,[e("li",null,[_,e("a",f,[b,a(t)]),v,e("a",y,[g,a(t)])])]),w,e("ul",null,[k,e("li",null,[x,q,z,A,R,a(s,{to:"/pt-BR/faq/mroot.html"},{default:n(()=>[B]),_:1}),N]),e("li",null,[F,a(s,{to:"/pt-BR/faq/mroot.html"},{default:n(()=>[S]),_:1})]),e("li",null,[T,e("a",D,[L,a(t)])])]),j,e("ul",null,[I,e("li",null,[e("a",O,[C,a(t)]),M])]),V,e("ul",null,[e("li",null,[e("a",E,[U,a(t)])])])],64)}var P=d(p,[["render",Y],["__file","enable-mroot.html.vue"]]);export{P as default};
