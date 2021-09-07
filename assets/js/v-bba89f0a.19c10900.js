"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[620],{4050:(e,o,a)=>{a.r(o),a.d(o,{data:()=>n});const n={key:"v-bba89f0a",path:"/en-US/guide/enable-mroot.html",title:"Enable NoRoot",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Risk Warning",slug:"risk-warning",children:[]},{level:2,title:"Required Material",slug:"required-material",children:[]},{level:2,title:"File Download",slug:"file-download",children:[]},{level:2,title:"Operation Method",slug:"operation-method",children:[]},{level:2,title:"Operation Screenshot",slug:"operation-screenshot",children:[]},{level:2,title:"More Info",slug:"more-info",children:[]},{level:2,title:"Need Help",slug:"need-help",children:[]}],filePathRelative:"en-US/guide/enable-mroot.md",git:{updatedTime:1619878098e3,contributors:[{name:"Playhi",email:"000902play@gmail.com",commits:6}]}}},1579:(e,o,a)=>{a.r(o),a.d(o,{default:()=>T});var n=a(6252);const t=(0,n.uE)('<h1 id="enable-noroot" tabindex="-1"><a class="header-anchor" href="#enable-noroot" aria-hidden="true">#</a> Enable NoRoot</h1><p>Some functions need this special permission to be granted before they can be used normally, if not needed, this can be skipped directly.</p><h2 id="risk-warning" tabindex="-1"><a class="header-anchor" href="#risk-warning" aria-hidden="true">#</a> Risk Warning</h2><ul><li>So far, we have received two cases of user feedback. It is reported that the device&#39;s graphic lock (pattern password) has been changed for no reason after NoRoot permission is granted, and then the device cannot be unlocked normally. The reason has not been found yet. One of the devices is Samsung S7 edge with the original Samsung system. The other one is unknown (suspected to be Samsung device). Therefore, if you have any important data, please back it up before operation to prevent unnecessary troubles.</li><li>In view of the problems with this part of the Samsung device, it is recommended to disable the graphic lock, password lock and the like before enabling.</li><li>Before freezing applications (especially system applications), please note that in some cases, freezing of some applications on some systems can cause some system anomalies, such as inexplicable freezes, failure to boot normally, and so on. Therefore, please try your best to operate within a certain safety limits to ensure operation safety and avoid unnecessary trouble.</li><li>On some devices and certain systems, after granted NoRoot, the built-in applications which is used for cloning applications cannot be used normally (the data response we collected is mainly concentrated on the system based on Android 8.0, while third-party applications provide such features do not seem to be affected by this).</li></ul><h2 id="required-material" tabindex="-1"><a class="header-anchor" href="#required-material" aria-hidden="true">#</a> Required Material</h2><ul><li>ADB Tools (Provided below)</li><li>Some Codes (Provided below)</li><li>Device system version Android 5.0+ , and <code>FreezeYou</code><em>(latest version recommended)</em> installed</li></ul><h2 id="file-download" tabindex="-1"><a class="header-anchor" href="#file-download" aria-hidden="true">#</a> File Download</h2>',7),i=(0,n.Uk)("ADB Tool and Code Pack (.zip format) : "),r={href:"https://freezeyou.playhi.net/attachment/urt.zip",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Uk)("Download link 1 (Source station)"),d=(0,n.Uk)(" | "),s={href:"https://pan.baidu.com/s/1RlHg4w0z5O2aNc_ejkeUvA",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("Download link 2 (Baidu Net Disk)"),c=(0,n._)("h2",{id:"operation-method",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#operation-method","aria-hidden":"true"},"#"),(0,n.Uk)(" Operation Method")],-1),u=(0,n.uE)("<li>找到设备系统设置中的<code>开发者选项</code>（没有的可以试试多点几下<code>关于手机</code>，或搜索<code>&quot;您的设备型号&quot; + 开发者选项</code>）</li><li>开启<code>开发者选项</code>中的<code>Android 调试</code>或<code>USB 调试</code>并将设备与具备 ADB 工具的计算机连接</li><li>完整解压缩先前下载的压缩包（.zip 格式）</li><li>Linux用户执行解压后的<code>apply.sh</code>，Windows 用户执行解压后的<code>apply.cmd</code>或<code>apply</code></li>",4),p=(0,n.Uk)("如果"),m=(0,n._)("code",null,"正在尝试启用免ROOT模式......",-1),f=(0,n.Uk)("下方的提示包含"),b=(0,n._)("code",null,"Success:",-1),k=(0,n.Uk)("，应该就成功了。如果没有成功，可以前往"),g=(0,n.Uk)("免ROOT疑难解答"),w=(0,n.Uk)("寻找相应的类似情况的解决方案尝试解决。"),y=(0,n.Uk)("Always fail? → "),v=(0,n.Uk)("NoRoot Faq"),_=(0,n.Uk)("Too complex? → "),U={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},S=(0,n.Uk)("Use AutumnBox to enable FreezeYou NoRoot Mode"),R=(0,n.uE)('<h2 id="operation-screenshot" tabindex="-1"><a class="header-anchor" href="#operation-screenshot" aria-hidden="true">#</a> Operation Screenshot</h2><p><img src="/assets/img/20180207104242.png" alt="Operation Screenshot"></p><h2 id="more-info" tabindex="-1"><a class="header-anchor" href="#more-info" aria-hidden="true">#</a> More Info</h2>',3),q=(0,n._)("li",null,[(0,n.Uk)("Core Code: "),(0,n._)("code",null,"adb shell dpm set-device-owner cf.playhi.freezeyou/.DeviceAdminReceiver")],-1),x={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},z=(0,n.Uk)("AutumnBox"),O=(0,n.Uk)(" now has support quick enable FreezeYou NoRoot mode"),A=(0,n._)("h2",{id:"need-help",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#need-help","aria-hidden":"true"},"#"),(0,n.Uk)(" Need Help")],-1),D={href:"https://jq.qq.com/?_wv=1027&k=l356Aq75",target:"_blank",rel:"noopener noreferrer"},N=(0,n.Uk)("Join QQ Group"),T={render:function(e,o){const a=(0,n.up)("OutboundLink"),T=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[t,(0,n._)("ul",null,[(0,n._)("li",null,[i,(0,n._)("a",r,[l,(0,n.Wm)(a)]),d,(0,n._)("a",s,[h,(0,n.Wm)(a)])])]),c,(0,n._)("ul",null,[u,(0,n._)("li",null,[p,m,f,b,k,(0,n.Wm)(T,{to:"/en-US/faq/mroot.html"},{default:(0,n.w5)((()=>[g])),_:1}),w]),(0,n._)("li",null,[y,(0,n.Wm)(T,{to:"/en-US/faq/mroot.html"},{default:(0,n.w5)((()=>[v])),_:1})]),(0,n._)("li",null,[_,(0,n._)("a",U,[S,(0,n.Wm)(a)])])]),R,(0,n._)("ul",null,[q,(0,n._)("li",null,[(0,n._)("a",x,[z,(0,n.Wm)(a)]),O])]),A,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",D,[N,(0,n.Wm)(a)])])])],64)}}}}]);