import{_ as s,r as t,o as h,c as r,b as e,d as c,w as i,F as u,e as o,a}from"./app.b27be315.js";const m={},_=e("h1",{id:"scheduled-task",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scheduled-task","aria-hidden":"true"},"#"),o(" Scheduled Task")],-1),f={class:"table-of-contents"},b=o("General Task Commands"),p=o("Available Commands"),q=o("Additional Parameters(Optional)"),x=o("Internal Variables"),k=o("Usage Example"),g=o("\u89E6\u53D1\u5668\u9644\u52A0\u53C2\u6570"),Q=o("\u4F7F\u7528\u524D\u8A00"),v=o("\u53C2\u6570\u8981\u6C42"),w=o("\u53EF\u7528\u53C2\u6570"),R=o("\u4F7F\u7528\u5B9E\u4F8B"),y=o("FAQ"),E=e("h2",{id:"general-task-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#general-task-commands","aria-hidden":"true"},"#"),o(" General Task Commands")],-1),X=e("h3",{id:"available-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-commands","aria-hidden":"true"},"#"),o(" Available Commands")],-1),F=a("<li><code>okff</code> : One key freeze.</li><li><code>okuf</code> : One key unfreeze.</li><li><code>ff</code> : Freeze.</li><li><code>uf</code> : Unfreeze.</li><li><code>es</code> : Enable one setting item <small><em>(<code>wifi</code> is available since version 6.2, <code>cd</code> (cellular data) is available since version 7.1, <code>bluetooth</code> is available since version 7.3)</em></small>.</li><li><code>ds</code> : Disable one setting item <small><em>(<code>wifi</code> is available since version 6.2, <code>cd</code> (cellular data) is available since version 7.1, <code>bluetooth</code> is available since version 7.3)</em></small>.</li><li><code>st</code> : Show one toast.</li>",7),O=e("code",null,"sn",-1),A=o(),W=o(": Show one notification."),G=e("li",null,[e("code",null,"sp"),o(" : Open the specified application.")],-1),L=e("li",null,[e("code",null,"su"),o(" : Open the specified application by URI.")],-1),U=e("code",null,"lg",-1),T=o(),V=o(": Print an ERROR level LOG. Under normal circumstances, there is no need to use it."),B=e("code",null,"ls",-1),K=o(),Y=o(": Lock screen."),z=e("h3",{id:"additional-parameters-optional",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-parameters-optional","aria-hidden":"true"},"#"),o(" Additional Parameters(Optional)")],-1),C=e("code",null,"-d",-1),I=o(),S=o(": Delay execution, in "),N=e("code",null,"seconds",-1),P=o("."),D=e("h3",{id:"internal-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internal-variables","aria-hidden":"true"},"#"),o(" Internal Variables")],-1),j=e("code",null,"[ppkgn]",-1),H=o(),J=o(": The previous application package name. Only available when the trigger is "),M=e("code",null,"When Leave Applications",-1),Z=o(", "),$=e("code",null,"When Open Applications",-1),ee=o(". Before formal use, you can use "),oe=e("code",null,"st [ppkgn]",-1),ce=o(" in related tasks to learn about the relevant content to reduce the possibility of accidents."),de=e("code",null,"[cpkgn]",-1),ie=o(),le=o(": The current application package name. Only available when the trigger is "),te=e("code",null,"When Leave Applications",-1),ae=o(", "),ne=e("code",null,"When Open Applications",-1),se=o(", "),he=e("code",null,"When Unfreeze Applications",-1),re=o(", and "),ue=e("code",null,"When Freeze Applications",-1),me=o(". Before formal use, you can use "),_e=e("code",null,"st [cpkgn]",-1),fe=o(" in related tasks to learn about the relevant content to reduce the possibility of accidents."),be=a('<h3 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage Example</h3><h4 id="okff" tabindex="-1"><a class="header-anchor" href="#okff" aria-hidden="true">#</a> okff</h4><ul><li><code>okff</code> \uFF1A\u7ACB\u5373\u6267\u884C\u4E00\u952E\u51BB\u7ED3\u3002</li></ul><h4 id="okuf" tabindex="-1"><a class="header-anchor" href="#okuf" aria-hidden="true">#</a> okuf</h4><ul><li><code>okuf</code> \uFF1A\u7ACB\u5373\u6267\u884C\u4E00\u952E\u89E3\u51BB\u3002</li><li><code>okuf -d 10</code> \uFF1A\u5EF6\u540E 10\u79D2 \u6267\u884C\u4E00\u952E\u89E3\u51BB\u3002</li></ul><h4 id="ff" tabindex="-1"><a class="header-anchor" href="#ff" aria-hidden="true">#</a> ff</h4><ul><li><code>ff com.tencent.mobileqq</code> \uFF1A\u51BB\u7ED3\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> \uFF1A\u51BB\u7ED3\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u548C <code>\u5B58\u5728\u4E8E\u522B\u540D\u4E3A 5oiR55qE5YiX6KGo \u7684\u6211\u7684\u81EA\u9009\u4E2D\u7684</code> \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>ff com.tencent.mobileqq,com.tencent.mm</code> \uFF1A\u51BB\u7ED3\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u548C <code>com.tencent.mm</code> (\u5FAE\u4FE1) \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code> \uFF1A\u51BB\u7ED3\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u548C <code>com.tencent.mm</code> (\u5FAE\u4FE1) \u548C <code>com.taobao.taobao</code> (\u6DD8\u5B9D) \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>ff -d 3600 com.tencent.mobileqq</code> \uFF1A\u5EF6\u540E 3600\u79D2 \u51BB\u7ED3\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li></ul><h4 id="uf" tabindex="-1"><a class="header-anchor" href="#uf" aria-hidden="true">#</a> uf</h4><ul><li><code>uf com.tencent.mobileqq</code> \uFF1A\u89E3\u51BB\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>uf com.tencent.mobileqq,com.tencent.mm</code> \uFF1A\u89E3\u51BB\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u548C <code>com.tencent.mm</code> (\u5FAE\u4FE1) \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> \uFF1A\u89E3\u51BB\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u548C <code>\u5B58\u5728\u4E8E\u522B\u540D\u4E3A 5oiR55qE5YiX6KGo \u7684\u6211\u7684\u81EA\u9009\u4E2D\u7684</code> \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code> \uFF1A\u89E3\u51BB\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u548C <code>com.tencent.mm</code> (\u5FAE\u4FE1) \u548C <code>com.taobao.taobao</code> (\u6DD8\u5B9D) \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li></ul><h4 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> es</h4><ul><li><code>es wifi</code> \uFF1A\u542F\u7528 WiFi \u3002</li><li><code>es -d 20 wifi</code> \uFF1A\u5EF6\u540E 20\u79D2 \u542F\u7528 WiFi \u3002</li><li><code>es wifi,cd</code> \uFF1A\u542F\u7528 WiFi \u548C \u8702\u7A9D\u79FB\u52A8\u6570\u636E\u7F51\u7EDC \u3002</li><li><code>es wifi;okuf;uf com.tencent.mobileqq</code> \uFF1A\u542F\u7528 WiFi \u3001\u6267\u884C \u4E00\u952E\u89E3\u51BB \u5E76 \u89E3\u51BB\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> (QQ) \u7684\u5E94\u7528\u7A0B\u5E8F\u3002</li></ul><h4 id="ds" tabindex="-1"><a class="header-anchor" href="#ds" aria-hidden="true">#</a> ds</h4><ul><li><code>ds wifi</code> \uFF1A\u5173\u95ED WiFi \u3002</li><li><code>ds cd</code> \uFF1A\u5173\u95ED \u8702\u7A9D\u79FB\u52A8\u6570\u636E\u7F51\u7EDC \u3002</li><li><code>ds wifi;okff</code> \uFF1A\u5173\u95ED WiFi \u5E76\u6267\u884C \u4E00\u952E\u51BB\u7ED3\u3002</li><li><code>ds -d 15 wifi;okff</code> \uFF1A\u5EF6\u540E 15\u79D2 \u5173\u95ED WiFi \u5E76 \u7ACB\u5373\u6267\u884C \u4E00\u952E\u51BB\u7ED3\u3002</li></ul><h4 id="st" tabindex="-1"><a class="header-anchor" href="#st" aria-hidden="true">#</a> st</h4><ul><li><code>st \u8FD9\u662F\u4E00\u6761\u63D0\u793A</code> \uFF1A\u663E\u793A\u4E00\u6761 Toast \u63D0\u793A\uFF0C\u5185\u5BB9\u4E3A<code>\u8FD9\u662F\u4E00\u6761\u63D0\u793A</code>\u3002</li></ul><h4 id="sn" tabindex="-1"><a class="header-anchor" href="#sn" aria-hidden="true">#</a> sn</h4><ul><li><code>sn \u901A\u77E5\u6807\u9898,\u901A\u77E5\u5185\u5BB9</code> \uFF1A\u5728\u901A\u77E5\u680F\u663E\u793A\u4E00\u6761\u901A\u77E5\u3002</li></ul><h4 id="sp" tabindex="-1"><a class="header-anchor" href="#sp" aria-hidden="true">#</a> sp</h4><ul><li><code>sp com.tencent.mobileqq</code> \uFF1A\u6253\u5F00 QQ \uFF08\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> \uFF09\u3002</li><li><code>sp com.tencent.mobileqq,com.tencent.mm</code> \uFF1A\u6253\u5F00 QQ \u548C \u5FAE\u4FE1 \uFF08\u5305\u540D\u4E3A <code>com.tencent.mobileqq</code> \u548C <code>com.tencent.mm</code> \uFF09\u3002</li></ul><h4 id="su" tabindex="-1"><a class="header-anchor" href="#su" aria-hidden="true">#</a> su</h4>',20),pe=e("code",null,"su [Uri]",-1),qe=o(" \uFF1A\u5C1D\u8BD5\u6253\u5F00\u6307\u5B9A\u7684 Uri\u3002\uFF08\u53EF\u53C2\u8003\uFF1A"),xe={href:"//www.urischeme.com",target:"_blank",rel:"noopener noreferrer"},ke=o("\u5404\u5E94\u7528 URL Scheme"),ge=o("\uFF09"),Qe=e("li",null,[e("code",null,"su alipayqr://platformapi/startapp?saId=20000056"),o(" \uFF1A\u6253\u5F00 \u652F\u4ED8\u5B9D \u4ED8\u6B3E\u7801\u3002")],-1),ve=a('<h4 id="lg" tabindex="-1"><a class="header-anchor" href="#lg" aria-hidden="true">#</a> lg</h4><ul><li><code>lg 10086</code> \uFF1A\u8F93\u51FA\u4E00\u6761 ERROR \u7EA7\u522B\u7684 LOG \uFF0C\u5185\u5BB9\u4E3A 10086 \u3002</li></ul><h4 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h4><ul><li><code>ls</code> \uFF1A\u9501\u5B9A\u5C4F\u5E55\u3002</li></ul><h2 id="\u89E6\u53D1\u5668\u9644\u52A0\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u89E6\u53D1\u5668\u9644\u52A0\u53C2\u6570" aria-hidden="true">#</a> \u89E6\u53D1\u5668\u9644\u52A0\u53C2\u6570</h2><h3 id="\u4F7F\u7528\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u524D\u8A00" aria-hidden="true">#</a> \u4F7F\u7528\u524D\u8A00</h3><ul><li>\u90E8\u5206\u89E6\u53D1\u5668\u65E0\u987B\u9644\u52A0\u53C2\u6570\uFF08\u5982\u679C\u586B\u5199\u4F1A\u88AB\u5FFD\u7565\uFF09\u3002</li><li>\u90E8\u5206\u89E6\u53D1\u5668\u53EF\u4EE5\u586B\u5199\u9644\u52A0\u53C2\u6570\uFF08\u975E\u5FC5\u987B\uFF09\u3002</li><li>\u90E8\u5206\u89E6\u53D1\u5668\u5FC5\u987B\u63D0\u4F9B\u7B26\u5408\u6761\u4EF6\u7684\u9644\u52A0\u53C2\u6570\uFF0C\u5426\u5219\u65E0\u6CD5\u6B63\u5E38\u6267\u884C\u3002</li></ul><h3 id="\u53C2\u6570\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8981\u6C42" aria-hidden="true">#</a> \u53C2\u6570\u8981\u6C42</h3><ul><li><code>\u6253\u5F00\u5C4F\u5E55\u65F6</code> \uFF1A\u76EE\u524D\u65E0\u9644\u52A0\u53C2\u6570\u3002</li><li><code>\u5173\u95ED\u5C4F\u5E55\u65F6</code> \uFF1A\u76EE\u524D\u65E0\u9644\u52A0\u53C2\u6570\u3002</li><li><code>\u6253\u5F00\u5E94\u7528\u65F6</code> \uFF1A<em><small><code>7.0\u53CA\u4EE5\u524D\u7248\u672C</code></small><em>\u5FC5\u987B\u9644\u52A0 <code>\u5E94\u7528\u5305\u540D</code> \uFF1B</em><small><code>\u81EA 7.0</code></small><em>\u53EF\u9644\u52A0 <code>\u5E94\u7528\u5305\u540D</code> \u3001 <code>\u6211\u7684\u5217\u8868</code></em><small><code>(V9.2)</code></small></em>\uFF0C\u5982\u65E0\u9644\u52A0\uFF0C\u5219\u6253\u5F00\u4EFB\u610F\u5E94\u7528\u7A0B\u5E8F\u5747\u6267\u884C\u3002<em>\u5728\u9644\u52A0\u4E86\u5E94\u7528\u5305\u540D\u7684\u60C5\u51B5\u4E0B\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6253\u5F00XX\u5E94\u7528\u65F6\u4F1A\u53D6\u6D88\u6240\u6709\u5C5E\u4E8E\u79BB\u5F00XX\u5E94\u7528\u65F6\u5DF2\u90E8\u7F72\u4F46\u5C1A\u672A\u6267\u884C\u7684\u5EF6\u65F6\u4EFB\u52A1\u3002</em></li><li><code>\u79BB\u5F00\u5E94\u7528\u65F6</code> \uFF1A\u53EF\u9644\u52A0 <code>\u5E94\u7528\u5305\u540D</code> \u3001 <code>\u6211\u7684\u5217\u8868</code> <small><em><code>(V9.2)</code></em></small>\uFF0C\u5982\u65E0\u9644\u52A0\uFF0C\u5219\u79BB\u5F00\u4EFB\u610F\u5E94\u7528\u7A0B\u5E8F\u5747\u6267\u884C\u3002<em>\u5728\u9644\u52A0\u4E86\u5E94\u7528\u5305\u540D\u7684\u60C5\u51B5\u4E0B\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u79BB\u5F00XX\u5E94\u7528\u65F6\u4F1A\u53D6\u6D88\u6240\u6709\u5C5E\u4E8E\u6253\u5F00XX\u5E94\u7528\u65F6\u5DF2\u90E8\u7F72\u4F46\u5C1A\u672A\u6267\u884C\u7684\u5EF6\u65F6\u4EFB\u52A1\u3002</em></li><li><code>\u89E3\u51BB\u5E94\u7528\u65F6</code> \uFF1A\u53EF\u9644\u52A0 <code>\u5E94\u7528\u5305\u540D</code> \uFF0C\u5982\u65E0\u9644\u52A0\uFF0C\u5219\u89E3\u51BB\u4EFB\u610F\u5E94\u7528\u7A0B\u5E8F\u5747\u6267\u884C\u3002</li><li><code>\u51BB\u7ED3\u5E94\u7528\u65F6</code> \uFF1A\u53EF\u9644\u52A0 <code>\u5E94\u7528\u5305\u540D</code> \uFF0C\u5982\u65E0\u9644\u52A0\uFF0C\u5219\u51BB\u7ED3\u4EFB\u610F\u5E94\u7528\u7A0B\u5E8F\u5747\u6267\u884C\u3002</li></ul><h3 id="\u53EF\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u7528\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u7528\u53C2\u6570</h3><ul><li><code>\u5E94\u7528\u5305\u540D</code> \uFF1A\u4F8B\u5982 <code>com.tencent.mobileqq</code> \u3002</li><li><code>\u6211\u7684\u5217\u8868</code> \uFF1A\u4F8B\u5982 <code>@5oiR55qE5YiX6KGo</code> \u3002</li></ul><h3 id="\u4F7F\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u5B9E\u4F8B</h3><ul><li>\u9009\u62E9 <code>\u6253\u5F00\u5E94\u7528\u65F6</code> \uFF0C\u9644\u52A0\u53C2\u6570\u586B\u5199 <code>com.tencent.mobileqq</code> \uFF0C\u5219\u4F1A\u5728\u8FD0\u884C <code>QQ</code> \u65F6\u6267\u884C\u9884\u8BBE\u7F6E\u7684 <code>\u4EFB\u52A1</code> \u3002</li><li>\u9009\u62E9 <code>\u6253\u5F00\u5E94\u7528\u65F6</code> \uFF0C\u9644\u52A0\u53C2\u6570\u586B\u5199 <code>com.tencent.mobileqq,com.tencent.mm</code> \uFF0C\u5219\u4F1A\u5728\u8FD0\u884C <code>QQ</code> \u6216 <code>\u5FAE\u4FE1</code> \u65F6\u6267\u884C\u9884\u8BBE\u7F6E\u7684 <code>\u4EFB\u52A1</code> \u3002</li><li>\u9009\u62E9 <code>\u6253\u5F00\u5E94\u7528\u65F6</code> \uFF0C\u9644\u52A0\u53C2\u6570\u586B\u5199 <code>com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> \uFF0C\u5219\u4F1A\u5728\u8FD0\u884C <code>QQ</code> \u6216 <code>\u5B58\u5728\u4E8E\u522B\u540D\u4E3A 5oiR55qE5YiX6KGo \u7684\u5217\u8868\u4E2D\u7684\u5E94\u7528\u7A0B\u5E8F</code> \u65F6\u6267\u884C\u9884\u8BBE\u7F6E\u7684 <code>\u4EFB\u52A1</code> \u3002</li><li>\u9009\u62E9 <code>\u6253\u5F00\u5E94\u7528\u65F6</code> \uFF0C\u9644\u52A0\u53C2\u6570\u586B\u5199 <code>\u5F53\u524D\u4F7F\u7528\u7684\u684C\u9762\u7684\u5305\u540D</code> \uFF0C\u5219\u4F1A\u5728 <strong>\u8FD4\u56DE\u684C\u9762</strong> \u65F6\u6267\u884C\u9884\u8BBE\u7F6E\u7684 <code>\u4EFB\u52A1</code> \u3002</li><li>\u9009\u62E9 <code>\u79BB\u5F00\u5E94\u7528\u65F6</code> \uFF0C\u9644\u52A0\u53C2\u6570\u4E0D\u586B\u5199\u4EFB\u4F55\u5185\u5BB9\uFF0C\u5219\u4F1A\u5728 <strong>\u79BB\u5F00\u4EFB\u610F\u5E94\u7528\u7A0B\u5E8F</strong> \u65F6\u6267\u884C\u9884\u8BBE\u7F6E\u7684 <code>\u4EFB\u52A1</code> \u3002</li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2>',14),we=o("FAQ");function Re(ye,Ee){const d=t("RouterLink"),l=t("Badge"),n=t("ExternalLinkIcon");return h(),r(u,null,[_,e("nav",f,[e("ul",null,[e("li",null,[c(d,{to:"#general-task-commands"},{default:i(()=>[b]),_:1}),e("ul",null,[e("li",null,[c(d,{to:"#available-commands"},{default:i(()=>[p]),_:1})]),e("li",null,[c(d,{to:"#additional-parameters-optional"},{default:i(()=>[q]),_:1})]),e("li",null,[c(d,{to:"#internal-variables"},{default:i(()=>[x]),_:1})]),e("li",null,[c(d,{to:"#usage-example"},{default:i(()=>[k]),_:1})])])]),e("li",null,[c(d,{to:"#\u89E6\u53D1\u5668\u9644\u52A0\u53C2\u6570"},{default:i(()=>[g]),_:1}),e("ul",null,[e("li",null,[c(d,{to:"#\u4F7F\u7528\u524D\u8A00"},{default:i(()=>[Q]),_:1})]),e("li",null,[c(d,{to:"#\u53C2\u6570\u8981\u6C42"},{default:i(()=>[v]),_:1})]),e("li",null,[c(d,{to:"#\u53EF\u7528\u53C2\u6570"},{default:i(()=>[w]),_:1})]),e("li",null,[c(d,{to:"#\u4F7F\u7528\u5B9E\u4F8B"},{default:i(()=>[R]),_:1})])])]),e("li",null,[c(d,{to:"#faq"},{default:i(()=>[y]),_:1})])])]),E,X,e("ul",null,[F,e("li",null,[O,A,c(l,{text:"8.6+",type:"tip"}),W]),G,L,e("li",null,[U,T,c(l,{text:"7.2+",type:"tip"}),V]),e("li",null,[B,K,c(l,{text:"8.7+",type:"tip"}),Y])]),z,e("ul",null,[e("li",null,[C,I,c(l,{text:"7.2+",type:"tip"}),S,N,P])]),D,e("ul",null,[e("li",null,[j,H,c(l,{text:"7.4+",type:"tip"}),J,M,Z,$,ee,oe,ce]),e("li",null,[de,ie,c(l,{text:"7.4+",type:"tip"}),le,te,ae,ne,se,he,re,ue,me,_e,fe])]),be,e("ul",null,[e("li",null,[pe,qe,e("a",xe,[ke,c(n)]),ge]),Qe]),ve,e("ul",null,[e("li",null,[c(d,{to:"/tr-TR/faq/"},{default:i(()=>[we]),_:1})])])],64)}var Fe=s(m,[["render",Re],["__file","schedules.html.vue"]]);export{Fe as default};
