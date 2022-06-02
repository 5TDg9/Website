import{_ as c}from"./20180207104242.696221d5.js";import{_ as h,r as i,o as u,c as p,b as e,d as t,w as n,a as r,e as o}from"./app.19d099dd.js";const f={},_=r('<h1 id="enable-noroot" tabindex="-1"><a class="header-anchor" href="#enable-noroot" aria-hidden="true">#</a> Enable NoRoot</h1><p>Some functions need this special permission to be granted before they can be used normally, if not needed, this can be skipped directly.</p><h2 id="risk-warning" tabindex="-1"><a class="header-anchor" href="#risk-warning" aria-hidden="true">#</a> Risk Warning</h2><ul><li>So far, we have received two cases of user feedback. It is reported that the device&#39;s graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.</li><li>In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.</li><li>Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.</li><li>On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).</li></ul><h2 id="required-material" tabindex="-1"><a class="header-anchor" href="#required-material" aria-hidden="true">#</a> Required Material</h2><ul><li>ADB Tools (Provided below)</li><li>Some Codes (Provided below)</li><li>Device system version Android 5.0+ , and <code>FreezeYou</code><em>(latest version recommended)</em> installed</li></ul><h2 id="file-download" tabindex="-1"><a class="header-anchor" href="#file-download" aria-hidden="true">#</a> File Download</h2>',7),m=o("ADB Tool and Code Pack (.zip format) : "),b={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},w=o("Download link 1 (Source station)"),y=o(" | "),v={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},g=o("Download link 2 (Baidu Net Disk)"),k=e("h2",{id:"operation-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#operation-method","aria-hidden":"true"},"#"),o(" Operation Method")],-1),x=r("<li>Go to the <code>Developer options</code> (if not seen, we can try to click the <code>About phone</code> several times, or search for <code>&quot;your device model&quot; + Developer options</code>).</li><li>Enable <code>USB debugging</code> and connect the device with a computer with ADB tools.</li><li>Fully unzip the previously downloaded archive (.zip format).</li><li>If wants to use <code>profile-owner</code> instead of <code>device-owner</code>, edit the <code>apply.xx</code> file, and replace the line <code>adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver</code> with <code>adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver</code>.</li><li>Linux users run <code>apply.sh</code>, and Windows users run <code>apply.cmd</code> or <code>apply</code>.</li>",5),z=o("If the output below "),A=e("code",null,"\u6B63\u5728\u5C1D\u8BD5\u542F\u7528\u514DROOT\u6A21\u5F0F......",-1),R=o(" contains "),D=e("code",null,"Success:",-1),N=o(", then most likely we succeeded. If not, we can go to "),S=o("NoRoot Faq"),B=o(" and various search engines to find solutions."),C=o("Always fail? \u2192 "),q=o("NoRoot Faq"),I=o("Too complex? \u2192 "),T={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},O=o("Use AutumnBox to enable FreezeYou NoRoot Mode"),U=e("h2",{id:"core-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#core-code","aria-hidden":"true"},"#"),o(" Core Code")],-1),F=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),E=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`adb shell dpm set-profile-owner cf.playhi.freezeyou/.DeviceAdminReceiver
`)])],-1),G=r('<h2 id="operation-screenshot" tabindex="-1"><a class="header-anchor" href="#operation-screenshot" aria-hidden="true">#</a> Operation Screenshot</h2><p><img src="'+c+'" alt="Operation Screenshot"></p><h2 id="more-info" tabindex="-1"><a class="header-anchor" href="#more-info" aria-hidden="true">#</a> More Info</h2>',3),L={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},M=o("AutumnBox"),V=o(" now has support quick enable FreezeYou NoRoot mode"),P=e("h2",{id:"need-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#need-help","aria-hidden":"true"},"#"),o(" Need Help")],-1),Y=o("Contact Us");function H(W,j){const a=i("ExternalLinkIcon"),s=i("RouterLink"),d=i("CodeGroupItem"),l=i("CodeGroup");return u(),p("div",null,[_,e("ul",null,[e("li",null,[m,e("a",b,[w,t(a)]),y,e("a",v,[g,t(a)])])]),k,e("ul",null,[x,e("li",null,[z,A,R,D,N,t(s,{to:"/uk-UA/faq/mroot.html"},{default:n(()=>[S]),_:1}),B]),e("li",null,[C,t(s,{to:"/uk-UA/faq/mroot.html"},{default:n(()=>[q]),_:1})]),e("li",null,[I,e("a",T,[O,t(a)])])]),U,t(l,null,{default:n(()=>[t(d,{title:"set-device-owner",active:""},{default:n(()=>[F]),_:1}),t(d,{title:"set-profile-owner"},{default:n(()=>[E]),_:1})]),_:1}),G,e("ul",null,[e("li",null,[e("a",L,[M,t(a)]),V])]),P,e("ul",null,[e("li",null,[t(s,{to:"/uk-UA/about/contactUs.html"},{default:n(()=>[Y]),_:1})])])])}var Q=h(f,[["render",H],["__file","enable-mroot.html.vue"]]);export{Q as default};
