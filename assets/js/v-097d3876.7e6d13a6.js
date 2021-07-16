(self.webpackChunk=self.webpackChunk||[]).push([[445],{6624:(e,l,o)=>{"use strict";o.r(l),o.d(l,{data:()=>d});const d={key:"v-097d3876",path:"/en-US/guide/schedules.html",title:"Scheduled Task",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"General Task Commands",slug:"general-task-commands",children:[{level:3,title:"Available Commands",slug:"available-commands",children:[]},{level:3,title:"Additional Parameters(Optional)",slug:"additional-parameters-optional",children:[]},{level:3,title:"Internal Variables",slug:"internal-variables",children:[]},{level:3,title:"Usage Example",slug:"usage-example",children:[]}]},{level:2,title:"触发器附加参数",slug:"触发器附加参数",children:[{level:3,title:"使用前言",slug:"使用前言",children:[]},{level:3,title:"参数要求",slug:"参数要求",children:[]},{level:3,title:"可用参数",slug:"可用参数",children:[]},{level:3,title:"使用实例",slug:"使用实例",children:[]}]},{level:2,title:"FAQ",slug:"faq",children:[]}],filePathRelative:"en-US/guide/schedules.md",git:{updatedTime:1613656997e3,contributors:[{name:"Playhi",email:"000902play@gmail.com",commits:7}]}}},3583:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>de});var d=o(6252);const c=(0,d.Wm)("h1",{id:"scheduled-task",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#scheduled-task","aria-hidden":"true"},"#"),(0,d.Uk)(" Scheduled Task")],-1),i={class:"table-of-contents"},a=(0,d.Uk)("General Task Commands"),n=(0,d.Uk)("Available Commands"),t=(0,d.Uk)("Additional Parameters(Optional)"),m=(0,d.Uk)("Internal Variables"),r=(0,d.Uk)("Usage Example"),s=(0,d.Uk)("触发器附加参数"),u=(0,d.Uk)("使用前言"),h=(0,d.Uk)("参数要求"),f=(0,d.Uk)("可用参数"),b=(0,d.Uk)("使用实例"),W=(0,d.Uk)("FAQ"),k=(0,d.Wm)("h2",{id:"general-task-commands",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#general-task-commands","aria-hidden":"true"},"#"),(0,d.Uk)(" General Task Commands")],-1),q=(0,d.Wm)("h3",{id:"available-commands",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#available-commands","aria-hidden":"true"},"#"),(0,d.Uk)(" Available Commands")],-1),p=(0,d.uE)("<li><code>okff</code> : One key freeze.</li><li><code>okuf</code> : One key unfreeze.</li><li><code>ff</code> : Freeze.</li><li><code>uf</code> : Unfreeze.</li><li><code>es</code> ：启用某设置项<small><em>（自6.2版本可用 <code>wifi</code> ；自7.1版本可用 <code>cd</code> （蜂窝移动数据网络）；自7.3版本可用 <code>bluetooth</code> ）</em></small>。</li><li><code>ds</code> ：关闭某设置项<small><em>（自6.2版本可用 <code>wifi</code> ；自7.1版本可用 <code>cd</code> （蜂窝移动数据网络）；自7.3版本可用 <code>bluetooth</code> ）</em></small>。</li><li><code>st</code> : Show one toast.</li>",7),U=(0,d.Wm)("code",null,"sn",-1),g=(0,d.Uk)(),x=(0,d.Uk)(": Show one notification."),Q=(0,d.Wm)("li",null,[(0,d.Wm)("code",null,"sp"),(0,d.Uk)(" : Open the specified application.")],-1),w=(0,d.Wm)("li",null,[(0,d.Wm)("code",null,"su"),(0,d.Uk)(" : Open the specified application by URI.")],-1),v=(0,d.Wm)("code",null,"lg",-1),R=(0,d.Uk)(),E=(0,d.Uk)("：打印一条 ERROR 级别的 LOG ，一般情况下无使用需求。"),X=(0,d.Wm)("code",null,"ls",-1),y=(0,d.Uk)(),_=(0,d.Uk)(": Lock screen."),F=(0,d.Wm)("h3",{id:"additional-parameters-optional",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#additional-parameters-optional","aria-hidden":"true"},"#"),(0,d.Uk)(" Additional Parameters(Optional)")],-1),G=(0,d.Wm)("code",null,"-d",-1),O=(0,d.Uk)(),A=(0,d.Uk)("：延时执行，单位为 "),S=(0,d.Wm)("code",null,"秒",-1),C=(0,d.Uk)(" 。"),Y=(0,d.Wm)("h3",{id:"internal-variables",tabindex:"-1"},[(0,d.Wm)("a",{class:"header-anchor",href:"#internal-variables","aria-hidden":"true"},"#"),(0,d.Uk)(" Internal Variables")],-1),K=(0,d.Wm)("code",null,"[ppkgn]",-1),T=(0,d.Uk)(),L=(0,d.Uk)("：先前应用程序包名。仅 触发器为 离开应用时、打开应用时 时可使用，正式使用前可在相关任务中，使用 "),I=(0,d.Wm)("code",null,"st [ppkgn]",-1),P=(0,d.Uk)(" 了解相关内容，减小意外冻结的可能。"),V=(0,d.Wm)("code",null,"[cpkgn]",-1),z=(0,d.Uk)(),j=(0,d.Uk)("：当前应用程序包名。仅 触发器为 离开应用时、打开应用时、解冻应用时、冻结应用时 时可使用，正式使用前可在相关任务中，使用 "),B=(0,d.Wm)("code",null,"st [cpkgn]",-1),H=(0,d.Uk)(" 了解相关内容，减小意外冻结的可能。"),D=(0,d.uE)('<h3 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage Example</h3><h4 id="okff" tabindex="-1"><a class="header-anchor" href="#okff" aria-hidden="true">#</a> okff</h4><ul><li><code>okff</code> ：立即执行一键冻结。</li></ul><h4 id="okuf" tabindex="-1"><a class="header-anchor" href="#okuf" aria-hidden="true">#</a> okuf</h4><ul><li><code>okuf</code> ：立即执行一键解冻。</li><li><code>okuf -d 10</code> ：延后 10秒 执行一键解冻。</li></ul><h4 id="ff" tabindex="-1"><a class="header-anchor" href="#ff" aria-hidden="true">#</a> ff</h4><ul><li><code>ff com.tencent.mobileqq</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li><li><code>ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的</code> 的应用程序。</li><li><code>ff com.tencent.mobileqq,com.tencent.mm</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 的应用程序。</li><li><code>ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code> ：冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 和 <code>com.taobao.taobao</code> (淘宝) 的应用程序。</li><li><code>ff -d 3600 com.tencent.mobileqq</code> ：延后 3600秒 冻结包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li></ul><h4 id="uf" tabindex="-1"><a class="header-anchor" href="#uf" aria-hidden="true">#</a> uf</h4><ul><li><code>uf com.tencent.mobileqq</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li><li><code>uf com.tencent.mobileqq,com.tencent.mm</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 的应用程序。</li><li><code>uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的</code> 的应用程序。</li><li><code>uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao</code> ：解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 和 <code>com.tencent.mm</code> (微信) 和 <code>com.taobao.taobao</code> (淘宝) 的应用程序。</li></ul><h4 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> es</h4><ul><li><code>es wifi</code> ：启用 WiFi 。</li><li><code>es -d 20 wifi</code> ：延后 20秒 启用 WiFi 。</li><li><code>es wifi,cd</code> ：启用 WiFi 和 蜂窝移动数据网络 。</li><li><code>es wifi;okuf;uf com.tencent.mobileqq</code> ：启用 WiFi 、执行 一键解冻 并 解冻包名为 <code>com.tencent.mobileqq</code> (QQ) 的应用程序。</li></ul><h4 id="ds" tabindex="-1"><a class="header-anchor" href="#ds" aria-hidden="true">#</a> ds</h4><ul><li><code>ds wifi</code> ：关闭 WiFi 。</li><li><code>ds cd</code> ：关闭 蜂窝移动数据网络 。</li><li><code>ds wifi;okff</code> ：关闭 WiFi 并执行 一键冻结。</li><li><code>ds -d 15 wifi;okff</code> ：延后 15秒 关闭 WiFi 并 立即执行 一键冻结。</li></ul><h4 id="st" tabindex="-1"><a class="header-anchor" href="#st" aria-hidden="true">#</a> st</h4><ul><li><code>st 这是一条提示</code> ：显示一条 Toast 提示，内容为<code>这是一条提示</code>。</li></ul><h4 id="sn" tabindex="-1"><a class="header-anchor" href="#sn" aria-hidden="true">#</a> sn</h4><ul><li><code>sn 通知标题,通知内容</code> ：在通知栏显示一条通知。</li></ul><h4 id="sp" tabindex="-1"><a class="header-anchor" href="#sp" aria-hidden="true">#</a> sp</h4><ul><li><code>sp com.tencent.mobileqq</code> ：打开 QQ （包名为 <code>com.tencent.mobileqq</code> ）。</li><li><code>sp com.tencent.mobileqq,com.tencent.mm</code> ：打开 QQ 和 微信 （包名为 <code>com.tencent.mobileqq</code> 和 <code>com.tencent.mm</code> ）。</li></ul><h4 id="su" tabindex="-1"><a class="header-anchor" href="#su" aria-hidden="true">#</a> su</h4>',20),J=(0,d.Wm)("code",null,"su [Uri]",-1),M=(0,d.Uk)(" ：尝试打开指定的 Uri。（可参考："),N={href:"//www.urischeme.com",target:"_blank",rel:"noopener noreferrer"},Z=(0,d.Uk)("各应用 URL Scheme"),$=(0,d.Uk)("）"),ee=(0,d.Wm)("li",null,[(0,d.Wm)("code",null,"su alipayqr://platformapi/startapp?saId=20000056"),(0,d.Uk)(" ：打开 支付宝 付款码。")],-1),le=(0,d.uE)('<h4 id="lg" tabindex="-1"><a class="header-anchor" href="#lg" aria-hidden="true">#</a> lg</h4><ul><li><code>lg 10086</code> ：输出一条 ERROR 级别的 LOG ，内容为 10086 。</li></ul><h4 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h4><ul><li><code>ls</code> ：锁定屏幕。</li></ul><h2 id="触发器附加参数" tabindex="-1"><a class="header-anchor" href="#触发器附加参数" aria-hidden="true">#</a> 触发器附加参数</h2><h3 id="使用前言" tabindex="-1"><a class="header-anchor" href="#使用前言" aria-hidden="true">#</a> 使用前言</h3><ul><li>部分触发器无须附加参数（如果填写会被忽略）。</li><li>部分触发器可以填写附加参数（非必须）。</li><li>部分触发器必须提供符合条件的附加参数，否则无法正常执行。</li></ul><h3 id="参数要求" tabindex="-1"><a class="header-anchor" href="#参数要求" aria-hidden="true">#</a> 参数要求</h3><ul><li><code>打开屏幕时</code> ：目前无附加参数。</li><li><code>关闭屏幕时</code> ：目前无附加参数。</li><li><code>打开应用时</code> ：<em><small><code>7.0及以前版本</code></small><em>必须附加 <code>应用包名</code> ；</em><small><code>自 7.0</code></small><em>可附加 <code>应用包名</code> 、 <code>我的列表</code></em><small><code>(V9.2)</code></small></em>，如无附加，则打开任意应用程序均执行。<em>在附加了应用包名的情况下，正常情况下，打开XX应用时会取消所有属于离开XX应用时已部署但尚未执行的延时任务。</em></li><li><code>离开应用时</code> ：可附加 <code>应用包名</code> 、 <code>我的列表</code> <small><em><code>(V9.2)</code></em></small>，如无附加，则离开任意应用程序均执行。<em>在附加了应用包名的情况下，正常情况下，离开XX应用时会取消所有属于打开XX应用时已部署但尚未执行的延时任务。</em></li><li><code>解冻应用时</code> ：可附加 <code>应用包名</code> ，如无附加，则解冻任意应用程序均执行。</li><li><code>冻结应用时</code> ：可附加 <code>应用包名</code> ，如无附加，则冻结任意应用程序均执行。</li></ul><h3 id="可用参数" tabindex="-1"><a class="header-anchor" href="#可用参数" aria-hidden="true">#</a> 可用参数</h3><ul><li><code>应用包名</code> ：例如 <code>com.tencent.mobileqq</code> 。</li><li><code>我的列表</code> ：例如 <code>@5oiR55qE5YiX6KGo</code> 。</li></ul><h3 id="使用实例" tabindex="-1"><a class="header-anchor" href="#使用实例" aria-hidden="true">#</a> 使用实例</h3><ul><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq</code> ，则会在运行 <code>QQ</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq,com.tencent.mm</code> ，则会在运行 <code>QQ</code> 或 <code>微信</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>com.tencent.mobileqq,@5oiR55qE5YiX6KGo</code> ，则会在运行 <code>QQ</code> 或 <code>存在于别名为 5oiR55qE5YiX6KGo 的列表中的应用程序</code> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>打开应用时</code> ，附加参数填写 <code>当前使用的桌面的包名</code> ，则会在 <strong>返回桌面</strong> 时执行预设置的 <code>任务</code> 。</li><li>选择 <code>离开应用时</code> ，附加参数不填写任何内容，则会在 <strong>离开任意应用程序</strong> 时执行预设置的 <code>任务</code> 。</li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2>',14),oe=(0,d.Uk)("FAQ"),de={render:function(e,l){const o=(0,d.up)("RouterLink"),de=(0,d.up)("Badge"),ce=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.j4)(d.HY,null,[c,(0,d.Wm)("nav",i,[(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#general-task-commands"},{default:(0,d.w5)((()=>[a])),_:1}),(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#available-commands"},{default:(0,d.w5)((()=>[n])),_:1})]),(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#additional-parameters-optional"},{default:(0,d.w5)((()=>[t])),_:1})]),(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#internal-variables"},{default:(0,d.w5)((()=>[m])),_:1})]),(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#usage-example"},{default:(0,d.w5)((()=>[r])),_:1})])])]),(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#触发器附加参数"},{default:(0,d.w5)((()=>[s])),_:1}),(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#使用前言"},{default:(0,d.w5)((()=>[u])),_:1})]),(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#参数要求"},{default:(0,d.w5)((()=>[h])),_:1})]),(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#可用参数"},{default:(0,d.w5)((()=>[f])),_:1})]),(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#使用实例"},{default:(0,d.w5)((()=>[b])),_:1})])])]),(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"#faq"},{default:(0,d.w5)((()=>[W])),_:1})])])]),k,q,(0,d.Wm)("ul",null,[p,(0,d.Wm)("li",null,[U,g,(0,d.Wm)(de,{text:"8.6+",type:"tip"}),x]),Q,w,(0,d.Wm)("li",null,[v,R,(0,d.Wm)(de,{text:"7.2+",type:"tip"}),E]),(0,d.Wm)("li",null,[X,y,(0,d.Wm)(de,{text:"8.7+",type:"tip"}),_])]),F,(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[G,O,(0,d.Wm)(de,{text:"7.2+",type:"tip"}),A,S,C])]),Y,(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[K,T,(0,d.Wm)(de,{text:"7.4+",type:"tip"}),L,I,P]),(0,d.Wm)("li",null,[V,z,(0,d.Wm)(de,{text:"7.4+",type:"tip"}),j,B,H])]),D,(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[J,M,(0,d.Wm)("a",N,[Z,(0,d.Wm)(ce)]),$]),ee]),le,(0,d.Wm)("ul",null,[(0,d.Wm)("li",null,[(0,d.Wm)(o,{to:"/en-US/faq/"},{default:(0,d.w5)((()=>[oe])),_:1})])])],64)}}}}]);