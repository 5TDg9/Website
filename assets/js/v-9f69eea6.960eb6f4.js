(self.webpackChunk=self.webpackChunk||[]).push([[6],{9057:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-9f69eea6",path:"/en-US/api/provider.html",title:"通过 Provider 进行冻结解冻以及数据查询等操作",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"版本要求",slug:"版本要求",children:[]},{level:2,title:"授权范围",slug:"授权范围",children:[]},{level:2,title:"如何使用",slug:"如何使用",children:[{level:3,title:"声明权限",slug:"声明权限",children:[]},{level:3,title:"代码示例",slug:"代码示例",children:[]}]},{level:2,title:"参数要求",slug:"参数要求",children:[]},{level:2,title:"返回数据",slug:"返回数据",children:[]},{level:2,title:"Sample",slug:"sample",children:[]},{level:2,title:"FAQ",slug:"faq",children:[{level:3,title:"SecurityException",slug:"securityexception",children:[]}]},{level:2,title:"Current Limitation",slug:"current-limitation",children:[]},{level:2,title:"Need Help",slug:"need-help",children:[]}],filePathRelative:"en-US/api/provider.md",git:{updatedTime:1619878098e3,contributors:[{name:"Playhi",email:"000902play@gmail.com",commits:4}]}}},8001:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>H});var t=a(6252);const e=(0,t.Wm)("h1",{id:"通过-provider-进行冻结解冻以及数据查询等操作"},[(0,t.Wm)("a",{class:"header-anchor",href:"#通过-provider-进行冻结解冻以及数据查询等操作"},"#"),(0,t.Uk)(" 通过 Provider 进行冻结解冻以及数据查询等操作")],-1),l={class:"table-of-contents"},p=(0,t.Uk)("版本要求"),o=(0,t.Uk)("授权范围"),u=(0,t.Uk)("如何使用"),c=(0,t.Uk)("声明权限"),i=(0,t.Uk)("代码示例"),r=(0,t.Uk)("参数要求"),d=(0,t.Uk)("返回数据"),k=(0,t.Uk)("Sample"),m=(0,t.Uk)("FAQ"),g=(0,t.Uk)("SecurityException"),h=(0,t.Uk)("Current Limitation"),W=(0,t.Uk)("Need Help"),b=(0,t.Wm)("h2",{id:"版本要求"},[(0,t.Wm)("a",{class:"header-anchor",href:"#版本要求"},"#"),(0,t.Uk)(" 版本要求")],-1),f=(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("strong",null,"自冻(FreezeYou)"),(0,t.Uk)(" 版本不小于 "),(0,t.Wm)("strong",null,"9.0"),(0,t.Uk)(" 。")]),(0,t.Wm)("li",null,"部分需要更高版本（已标注）。")],-1),v=(0,t.Wm)("h2",{id:"授权范围"},[(0,t.Wm)("a",{class:"header-anchor",href:"#授权范围"},"#"),(0,t.Uk)(" 授权范围")],-1),U=(0,t.Uk)("获取当前 "),y=(0,t.Wm)("strong",null,"自冻(FreezeYou)",-1),q=(0,t.Uk)(" 的运行模式、获取已冻结应用列表、获取是否可通过 "),x=(0,t.Wm)("strong",null,"自冻(FreezeYou)",-1),E=(0,t.Uk)(" 安装应用"),O=(0,t.Uk)("、进行冻结应用操作、进行解冻应用操作。"),w=(0,t.uE)('<h2 id="如何使用"><a class="header-anchor" href="#如何使用">#</a> 如何使用</h2><h3 id="声明权限"><a class="header-anchor" href="#声明权限">#</a> 声明权限</h3><ul><li>需要在<code>AndroidManifest.xml</code>中声明权限（按需申请） <ul><li>获取当前 <strong>自冻(FreezeYou)</strong> 的运行模式：<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.QUERY_STATUS<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>获取应用是否被冻结：<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.QUERY_STATUS<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>进行解冻应用操作：<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>进行冻结应用操作：<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul></li></ul><h3 id="代码示例"><a class="header-anchor" href="#代码示例">#</a> 代码示例</h3><ul><li><p>获取当前运行模式：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Bundle</span> resultBundle <span class="token operator">=</span> <span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>\n    <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://cf.playhi.freezeyou.export.QUERY&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    <span class="token string">&quot;QUERY_MODE&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">String</span> currentMode <span class="token operator">=</span> resultBundle<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;currentMode&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>获取应用是否被冻结：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Bundle</span> willBeSend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwillBeSend<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token string">&quot;packageName&quot;</span><span class="token punctuation">,</span> packageName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">Bundle</span> resultBundle <span class="token operator">=</span> <span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>\n    <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://cf.playhi.freezeyou.export.QUERY&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    <span class="token string">&quot;QUERY_FREEZE_STATUS&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> willBeSend\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> resultStatusCode <span class="token operator">=</span> resultBundle<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>进行解冻应用操作：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Bundle</span> willBeSend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwillBeSend<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token string">&quot;packageName&quot;</span><span class="token punctuation">,</span> pkgName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">Bundle</span> resultBundle <span class="token operator">=</span> <span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>\n    <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://cf.playhi.freezeyou.export.UNFREEZE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    <span class="token string">&quot;MODE_AUTO&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> willBeSend\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> resultCode <span class="token operator">=</span> resultBundle<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">,</span> <span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>进行冻结应用操作：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Bundle</span> willBeSend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwillBeSend<span class="token punctuation">.</span><span class="token function">putString</span><span class="token punctuation">(</span><span class="token string">&quot;packageName&quot;</span><span class="token punctuation">,</span> pkgName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">Bundle</span> resultBundle <span class="token operator">=</span> <span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>\n    <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;content://cf.playhi.freezeyou.export.FREEZE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    <span class="token string">&quot;MODE_AUTO&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> willBeSend\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> resultCode <span class="token operator">=</span> resultBundle<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">,</span> <span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul><h2 id="参数要求"><a class="header-anchor" href="#参数要求">#</a> 参数要求</h2>',6),_=(0,t.Wm)("thead",null,[(0,t.Wm)("tr",null,[(0,t.Wm)("th",null,"用途"),(0,t.Wm)("th",null,"Uri"),(0,t.Wm)("th",{style:{"text-align":"center"}},"Method"),(0,t.Wm)("th",{style:{"text-align":"center"}},"Arg"),(0,t.Wm)("th",null,"Extras")])],-1),B=(0,t.Wm)("tr",null,[(0,t.Wm)("td",null,"获取当前运行模式"),(0,t.Wm)("td",null,[(0,t.Wm)("code",null,'Uri.parse("content://cf.playhi.freezeyou.export.QUERY")')]),(0,t.Wm)("td",{style:{"text-align":"center"}},[(0,t.Wm)("code",null,"QUERY_MODE")]),(0,t.Wm)("td",{style:{"text-align":"center"}},"不适用"),(0,t.Wm)("td",null,"空 Bundle")],-1),S=(0,t.Wm)("tr",null,[(0,t.Wm)("td",null,"获取应用是否被冻结"),(0,t.Wm)("td",null,[(0,t.Wm)("code",null,'Uri.parse("content://cf.playhi.freezeyou.export.QUERY")')]),(0,t.Wm)("td",{style:{"text-align":"center"}},[(0,t.Wm)("code",null,"QUERY_FREEZE_STATUS")]),(0,t.Wm)("td",{style:{"text-align":"center"}},"不适用"),(0,t.Wm)("td",null,"Bundle，键 packageName 必须包含被查询的应用包名")],-1),R=(0,t.Uk)("获取是否可通过"),T=(0,t.Wm)("strong",null,"自冻",-1),A=(0,t.Uk)("安装应用"),M=(0,t.Wm)("td",null,[(0,t.Wm)("code",null,'Uri.parse("content://cf.playhi.freezeyou.export.QUERY)')],-1),z=(0,t.Wm)("td",{style:{"text-align":"center"}},[(0,t.Wm)("code",null,"QUERY_IF_CAN_INSTALL_APPLICATIONS_STATUS")],-1),N=(0,t.Wm)("td",{style:{"text-align":"center"}},"不适用",-1),Y=(0,t.Wm)("td",null,"空 Bundle",-1),F=(0,t.Wm)("tr",null,[(0,t.Wm)("td",null,"进行解冻应用操作"),(0,t.Wm)("td",null,[(0,t.Wm)("code",null,'Uri.parse("content://cf.playhi.freezeyou.export.UNFREEZE")')]),(0,t.Wm)("td",{style:{"text-align":"center"}},[(0,t.Wm)("code",null,"MODE_AUTO"),(0,t.Uk)("或"),(0,t.Wm)("code",null,"MODE_ROOT"),(0,t.Uk)("或"),(0,t.Wm)("code",null,"MODE_MROOT")]),(0,t.Wm)("td",{style:{"text-align":"center"}},"不适用"),(0,t.Wm)("td",null,"Bundle，键 packageName 必须包含被解冻的应用包名")],-1),P=(0,t.Wm)("tr",null,[(0,t.Wm)("td",null,"进行冻结应用操作"),(0,t.Wm)("td",null,[(0,t.Wm)("code",null,'Uri.parse("content://cf.playhi.freezeyou.export.FREEZE")')]),(0,t.Wm)("td",{style:{"text-align":"center"}},[(0,t.Wm)("code",null,"MODE_AUTO"),(0,t.Uk)("或"),(0,t.Wm)("code",null,"MODE_ROOT"),(0,t.Uk)("或"),(0,t.Wm)("code",null,"MODE_MROOT")]),(0,t.Wm)("td",{style:{"text-align":"center"}},"不适用"),(0,t.Wm)("td",null,"Bundle，键 packageName 必须包含被冻结的应用包名")],-1),D=(0,t.uE)('<h2 id="返回数据"><a class="header-anchor" href="#返回数据">#</a> 返回数据</h2><p><em><strong>如果对应键值为 <code>null</code>，则检查请求时的 <code>Method</code> 以及 <code>Extras</code> 是否为 <code>null</code> 。</strong></em></p><table><thead><tr><th>返回值</th><th>获取当前运行模式（键 currentMode ）</th><th>获取应用是否被冻结（键 status ）</th><th>进行解冻应用操作（键 result ）</th><th>进行冻结应用操作（键 result ）</th><th>获取是否可通过自冻安装应用（键 status ）</th></tr></thead><tbody><tr><td>dpm</td><td>DPM（免ROOT）模式（ROOT模式可能可用）</td><td>不适用</td><td>不适用</td><td>不适用</td><td>不适用</td></tr><tr><td>root</td><td>ROOT模式（DPM模式不可用）</td><td>不适用</td><td>不适用</td><td>不适用</td><td>不适用</td></tr><tr><td>unavailable</td><td>DPM 与 ROOT 模式均不可用</td><td>不适用</td><td>不适用</td><td>不适用</td><td>不适用</td></tr><tr><td>-4</td><td>不适用</td><td>不适用</td><td>ROOT 模式解冻失败</td><td>ROOT 模式冻结失败</td><td>不适用</td></tr><tr><td>-3</td><td>不适用</td><td>不适用</td><td>DPM 模式解冻失败</td><td>DPM 模式冻结失败</td><td>不适用</td></tr><tr><td>-2</td><td>不适用</td><td>Bundle 中 packageName 键值为 null</td><td>Bundle 中 packageName 键值为 null</td><td>Bundle 中 packageName 键值为 null</td><td>不适用</td></tr><tr><td>-1</td><td>不适用</td><td>自冻(FreezeYou) 内部错误</td><td>自冻(FreezeYou) 内部错误</td><td>自冻(FreezeYou) 内部错误</td><td>不适用</td></tr><tr><td>0</td><td>不适用</td><td>未冻结</td><td>解冻成功</td><td>冻结成功</td><td>不适用</td></tr><tr><td>1</td><td>不适用</td><td>ROOT 模式冻结</td><td>不适用</td><td>不适用</td><td>不适用</td></tr><tr><td>2</td><td>不适用</td><td>DPM 模式冻结</td><td>不适用</td><td>不适用</td><td>不适用</td></tr><tr><td>3</td><td>不适用</td><td>DPM + ROOT 双模式冻结</td><td>不适用</td><td>不适用</td><td>不适用</td></tr><tr><td>998</td><td>不适用</td><td>没有找到对应应用</td><td>没有找到对应应用</td><td>没有找到对应应用</td><td>不适用</td></tr><tr><td>999</td><td>不适用</td><td>不适用</td><td>检查发现未冻结，无需解冻</td><td>检查发现未解冻，无需冻结</td><td>不适用</td></tr><tr><td>其它</td><td>不适用</td><td>不适用</td><td>不适用</td><td>不适用</td><td>boolean[]{预估功能可用,安装通道可用,有ROOT权限,有DPM权限}</td></tr></tbody></table><h2 id="sample"><a class="header-anchor" href="#sample">#</a> Sample</h2>',4),Q={href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"},C=(0,t.Uk)("FreezeYouApiTest"),j=(0,t.uE)('<h2 id="faq"><a class="header-anchor" href="#faq">#</a> FAQ</h2><h3 id="securityexception"><a class="header-anchor" href="#securityexception">#</a> SecurityException</h3><ul><li>是否已经在 <strong>Manifest</strong> 中声明了权限呢（<code>冻结\\解冻应用</code>还需要类似请求敏感权限一样进行 <strong><code>requestPermissions</code></strong> ）。</li></ul><h2 id="current-limitation"><a class="header-anchor" href="#current-limitation">#</a> Current Limitation</h2><ul><li>需要在安装<strong>自冻 FreezeYou</strong>后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）。</li></ul><h2 id="need-help"><a class="header-anchor" href="#need-help">#</a> Need Help</h2>',6),I={href:"https://jq.qq.com/?_wv=1027&k=l356Aq75",target:"_blank",rel:"noopener noreferrer"},L=(0,t.Uk)("Join QQ Group(704086494)"),Z={href:"https://jq.qq.com/?_wv=1027&k=5vmxG1F",target:"_blank",rel:"noopener noreferrer"},G=(0,t.Uk)("Join QQ Group(838379270)"),H={render:function(n,s){const a=(0,t.up)("RouterLink"),H=(0,t.up)("Badge"),J=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,(0,t.Wm)("nav",l,[(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#版本要求"},{default:(0,t.w5)((()=>[p])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#授权范围"},{default:(0,t.w5)((()=>[o])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#如何使用"},{default:(0,t.w5)((()=>[u])),_:1}),(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#声明权限"},{default:(0,t.w5)((()=>[c])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#代码示例"},{default:(0,t.w5)((()=>[i])),_:1})])])]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#参数要求"},{default:(0,t.w5)((()=>[r])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#返回数据"},{default:(0,t.w5)((()=>[d])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#sample"},{default:(0,t.w5)((()=>[k])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#faq"},{default:(0,t.w5)((()=>[m])),_:1}),(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#securityexception"},{default:(0,t.w5)((()=>[g])),_:1})])])]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#current-limitation"},{default:(0,t.w5)((()=>[h])),_:1})]),(0,t.Wm)("li",null,[(0,t.Wm)(a,{to:"#need-help"},{default:(0,t.w5)((()=>[W])),_:1})])])]),b,f,v,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[U,y,q,x,E,(0,t.Wm)(H,{text:"9.2+",type:"tip"}),O])]),w,(0,t.Wm)("table",null,[_,(0,t.Wm)("tbody",null,[B,S,(0,t.Wm)("tr",null,[(0,t.Wm)("td",null,[R,T,A,(0,t.Wm)(H,{text:"9.2+",type:"tip"})]),M,z,N,Y]),F,P])]),D,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",Q,[C,(0,t.Wm)(J)])])]),j,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",I,[L,(0,t.Wm)(J)])])]),(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",Z,[G,(0,t.Wm)(J)])])])],64)}}}}]);