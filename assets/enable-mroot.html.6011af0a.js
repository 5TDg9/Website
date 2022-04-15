import{_ as l,r as s,o as d,c,a as e,b as t,w as r,F as h,e as a,d as o}from"./app.ac2f5f1c.js";import{_ as u}from"./20180207104242.696221d5.js";const p={},_=a('<h1 id="enable-noroot" tabindex="-1"><a class="header-anchor" href="#enable-noroot" aria-hidden="true">#</a> Enable NoRoot</h1><p>Some functions need this special permission to be granted before they can be used normally, if not needed, this can be skipped directly.</p><h2 id="risk-warning" tabindex="-1"><a class="header-anchor" href="#risk-warning" aria-hidden="true">#</a> Risk Warning</h2><ul><li>So far, we have received two cases of user feedback. It is reported that the device&#39;s graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.</li><li>In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.</li><li>Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.</li><li>On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).</li></ul><h2 id="required-material" tabindex="-1"><a class="header-anchor" href="#required-material" aria-hidden="true">#</a> Required Material</h2><ul><li>ADB Tools (Provided below)</li><li>Some Codes (Provided below)</li><li>Device system version Android 5.0+ , and <code>FreezeYou</code><em>(latest version recommended)</em> installed</li></ul><h2 id="file-download" tabindex="-1"><a class="header-anchor" href="#file-download" aria-hidden="true">#</a> File Download</h2>',7),f=o("ADB Tool and Code Pack (.zip format) : "),m={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},b=o("Download link 1 (Source station)"),w=o(" | "),y={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},v=o("Download link 2 (Baidu Net Disk)"),g=e("h2",{id:"operation-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operation-method","aria-hidden":"true"},"#"),o(" Operation Method")],-1),k=a("<li>Go to the <code>Developer options</code> (if not seen, we can try to click the <code>About phone</code> several times, or search for <code>&quot;your device model&quot; + Developer options</code>).</li><li>Enable <code>USB debugging</code> and connect the device with a computer with ADB tools.</li><li>Fully unzip the previously downloaded archive (.zip format).</li><li>Linux users run <code>apply.sh</code>, and Windows users run <code>apply.cmd</code> or <code>apply</code>.</li>",4),x=o("If the output below "),z=e("code",null,"\u6B63\u5728\u5C1D\u8BD5\u542F\u7528\u514DROOT\u6A21\u5F0F......",-1),q=o(" contains "),N=e("code",null,"Success:",-1),R=o(", then most likely we succeeded. If not, we can go to "),S=o("NoRoot Faq"),A=o(" and various search engines to find solutions."),D=o("Always fail? \u2192 "),T=o("NoRoot Faq"),B=o("Too complex? \u2192 "),F={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},O=o("Use AutumnBox to enable FreezeYou NoRoot Mode"),I=a('<h2 id="operation-screenshot" tabindex="-1"><a class="header-anchor" href="#operation-screenshot" aria-hidden="true">#</a> Operation Screenshot</h2><p><img src="'+u+'" alt="Operation Screenshot"></p><h2 id="more-info" tabindex="-1"><a class="header-anchor" href="#more-info" aria-hidden="true">#</a> More Info</h2>',3),C=e("li",null,[o("Core Code: "),e("code",null,"adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver")],-1),E={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},L=o("\u79CB\u4E4B\u76D2"),M=o(" now has support quick enable FreezeYou NoRoot mode"),V=e("h2",{id:"need-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#need-help","aria-hidden":"true"},"#"),o(" Need Help")],-1),W={href:"https://jq.qq.com/?_wv=1027&k=l356Aq75",target:"_blank",rel:"noopener noreferrer"},P=o("\u52A0\u5165QQ\u7FA4");function U(Y,j){const n=s("ExternalLinkIcon"),i=s("RouterLink");return d(),c(h,null,[_,e("ul",null,[e("li",null,[f,e("a",m,[b,t(n)]),w,e("a",y,[v,t(n)])])]),g,e("ul",null,[k,e("li",null,[x,z,q,N,R,t(i,{to:"/zh-TW/faq/mroot.html"},{default:r(()=>[S]),_:1}),A]),e("li",null,[D,t(i,{to:"/zh-TW/faq/mroot.html"},{default:r(()=>[T]),_:1})]),e("li",null,[B,e("a",F,[O,t(n)])])]),I,e("ul",null,[C,e("li",null,[e("a",E,[L,t(n)]),M])]),V,e("ul",null,[e("li",null,[e("a",W,[P,t(n)])])])],64)}var G=l(p,[["render",U],["__file","enable-mroot.html.vue"]]);export{G as default};
