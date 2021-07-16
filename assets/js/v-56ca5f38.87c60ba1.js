(self.webpackChunk=self.webpackChunk||[]).push([[444],{3650:(e,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>t});const t={key:"v-56ca5f38",path:"/en-US/api/start-activity.html",title:"通过 startActivity 冻结解冻应用程序",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"授权范围",slug:"授权范围",children:[]},{level:2,title:"如何使用",slug:"如何使用",children:[{level:3,title:"声明权限",slug:"声明权限",children:[]}]},{level:2,title:"Sample",slug:"sample",children:[]},{level:2,title:"FAQ",slug:"faq",children:[{level:3,title:"ActivityNotFoundException",slug:"activitynotfoundexception",children:[]},{level:3,title:"SecurityException",slug:"securityexception",children:[]}]},{level:2,title:"Current Limitation",slug:"current-limitation",children:[]},{level:2,title:"Need Help",slug:"need-help",children:[]}],filePathRelative:"en-US/api/start-activity.md",git:{updatedTime:1619878098e3,contributors:[{name:"Playhi",email:"000902play@gmail.com",commits:4}]}}},7077:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>A});var t=n(6252);const l=(0,t.Wm)("h1",{id:"通过-startactivity-冻结解冻应用程序",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#通过-startactivity-冻结解冻应用程序","aria-hidden":"true"},"#"),(0,t.Uk)(" 通过 startActivity 冻结解冻应用程序")],-1),s={class:"table-of-contents"},i=(0,t.Uk)("授权范围"),r=(0,t.Uk)("如何使用"),o=(0,t.Uk)("声明权限"),u=(0,t.Uk)("Sample"),c=(0,t.Uk)("FAQ"),p=(0,t.Uk)("ActivityNotFoundException"),d=(0,t.Uk)("SecurityException"),m=(0,t.Uk)("Current Limitation"),h=(0,t.Uk)("Need Help"),k=(0,t.uE)('<h2 id="授权范围" tabindex="-1"><a class="header-anchor" href="#授权范围" aria-hidden="true">#</a> 授权范围</h2><ul><li>获取已冻结应用列表、进行冻结应用、进行解冻应用。</li></ul><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><h3 id="声明权限" tabindex="-1"><a class="header-anchor" href="#声明权限" aria-hidden="true">#</a> 声明权限</h3><ul><li>需要在<code>AndroidManifest.xml</code>中声明权限（按需申请） <ul><li>获取已冻结应用列表<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.GET_DISABLED_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>进行解冻应用<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>进行冻结应用<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul></li></ul><h2 id="sample" tabindex="-1"><a class="header-anchor" href="#sample" aria-hidden="true">#</a> Sample</h2>',6),f={href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("FreezeYouApiTest"),v=(0,t.uE)('<h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="activitynotfoundexception" tabindex="-1"><a class="header-anchor" href="#activitynotfoundexception" aria-hidden="true">#</a> ActivityNotFoundException</h3><ul><li>已安装的是老版本FreezeYou或未安装FreezeYou</li></ul><h3 id="securityexception" tabindex="-1"><a class="header-anchor" href="#securityexception" aria-hidden="true">#</a> SecurityException</h3><ul><li>是否已经在 <strong>Manifest</strong> 中声明了权限呢（<code>冻结\\解冻应用</code>还需要类似请求敏感权限一样进行 <strong><code>requestPermissions</code></strong> ）</li></ul><h2 id="current-limitation" tabindex="-1"><a class="header-anchor" href="#current-limitation" aria-hidden="true">#</a> Current Limitation</h2><ul><li>需要在安装<strong>FreezeYou</strong>后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）</li></ul><h2 id="need-help" tabindex="-1"><a class="header-anchor" href="#need-help" aria-hidden="true">#</a> Need Help</h2>',8),x={href:"https://jq.qq.com/?_wv=1027&k=l356Aq75",target:"_blank",rel:"noopener noreferrer"},W=(0,t.Uk)("Join QQ Group(704086494)"),b={href:"https://jq.qq.com/?_wv=1027&k=5vmxG1F",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("Join QQ Group(838379270)"),A={render:function(e,a){const n=(0,t.up)("RouterLink"),A=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[l,(0,t.Wm)("nav",s,[(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#授权范围"},{default:(0,t.w5)((()=>[i])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#如何使用"},{default:(0,t.w5)((()=>[r])),_:1}),(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#声明权限"},{default:(0,t.w5)((()=>[o])),_:1})])])]),(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#sample"},{default:(0,t.w5)((()=>[u])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#faq"},{default:(0,t.w5)((()=>[c])),_:1}),(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#activitynotfoundexception"},{default:(0,t.w5)((()=>[p])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#securityexception"},{default:(0,t.w5)((()=>[d])),_:1})])])]),(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#current-limitation"},{default:(0,t.w5)((()=>[m])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(n,{to:"#need-help"},{default:(0,t.w5)((()=>[h])),_:1})])])]),k,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",f,[g,(0,t.Wm)(A)])])]),v,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",x,[W,(0,t.Wm)(A)])])]),(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",b,[y,(0,t.Wm)(A)])])])],64)}}}}]);