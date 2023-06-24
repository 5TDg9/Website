import{_ as n,r as i,o as u,c as h,b as e,e as l,w as o,d,a as c}from"./app-ddd38ec8.js";const s={},f=e("h1",{id:"daily-use-faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#daily-use-faq","aria-hidden":"true"},"#"),d(" Daily Use - FAQ")],-1),_={class:"table-of-contents"},x=c('<h2 id="点了冻结以后-对应的应用程序在桌面上找不到了" tabindex="-1"><a class="header-anchor" href="#点了冻结以后-对应的应用程序在桌面上找不到了" aria-hidden="true">#</a> 点了冻结以后，对应的应用程序在桌面上找不到了</h2><ul><li>是的。正常情况下，无特殊处理的话是会消失的，但不必担心，解冻后对应的应用程序会再次出现的，相关数据<strong>正常情况</strong>下不会丢失。</li><li>那我怎么方便的打开对应的应用程序？可在 <code>自冻 FreezeYou</code> 的应用列表中，创建对应应用程序的<em>桌面冻结解冻启动快捷方式</em>（建议在冻结前创建）。</li></ul><h2 id="部分应用解冻不了" tabindex="-1"><a class="header-anchor" href="#部分应用解冻不了" aria-hidden="true">#</a> 部分应用解冻不了</h2><ul><li>有些应用是系统（含系统应用）执行了停用（冻结）的，目前在免ROOT模式下无法解冻。</li><li>免ROOT模式冻结的，在使用 <strong>自冻FreezeYou</strong> 以 <strong>ROOT模式</strong> 时需要选择 <strong>HIDE/UNHIDE</strong> 模式解冻。</li></ul><h2 id="桌面为什么有三个图标" tabindex="-1"><a class="header-anchor" href="#桌面为什么有三个图标" aria-hidden="true">#</a> 桌面为什么有三个图标</h2><ul><li>目前的新版本已经默认只显示一个图标了。</li><li>早期版本的图标有部分用户反馈夜间有些吓人，因此后来又加入了一个图标，同时又将早期版本的一个针对 Android 7.0 的圆形图标拆出单列，最终就出现了三个图标的壮观景象，不过不必担心，这三个图标可以在<code>更多设置</code>中自行选择开关，甚至可以全部关闭——使用拨号盘启动(需拨号软件支持，原生Android默认支持)。</li></ul><h2 id="我不小心把桌面的三个图标全关了-而我的桌面又不支持暗码启动-freezeyou" tabindex="-1"><a class="header-anchor" href="#我不小心把桌面的三个图标全关了-而我的桌面又不支持暗码启动-freezeyou" aria-hidden="true">#</a> 我不小心把桌面的三个图标全关了，而我的桌面又不支持暗码启动 FreezeYou</h2><ul><li>啊哈，不必担心，进入<code>系统设置</code>，然后在<code>应用程序</code>中找到<code>自冻FreezeYou</code>，那个熟悉的<code>清除数据</code>是不是被<code>管理空间</code>吃掉了啊？这就对了，点一下<code>管理空间</code>，熟悉的一切就又回来啦！</li></ul><h2 id="一键锁屏后只能密码解锁了" tabindex="-1"><a class="header-anchor" href="#一键锁屏后只能密码解锁了" aria-hidden="true">#</a> 一键锁屏后只能密码解锁了</h2>',9),z=e("strong",null,"部分",-1),b={href:"https://issuetracker.google.com/issues/37010802#comment110",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,[d("自"),e("code",null,"5.2"),d("版本开始，已ROOT的设备使用一键锁屏已能够不再影响 Smartlock 。")],-1),m=c('<h2 id="为什么桌面上的快捷方式右下角有个小标志-能不能去掉" tabindex="-1"><a class="header-anchor" href="#为什么桌面上的快捷方式右下角有个小标志-能不能去掉" aria-hidden="true">#</a> 为什么桌面上的快捷方式右下角有个小标志，能不能去掉</h2><ul><li>自 Android 8.0 开始，Android 默认会在应用程序创建的快捷方式右下角加入来源应用程序的图标。</li><li>自 FreezeYou 5.3 版本开始，可以在桌面的添加小部件（微件）中找到 一键冻结、一键解冻、一键锁屏 ，这个是没有右下角的标志的。</li><li>自 FreezeYou 7.2 版本开始，可以通过添加桌面小部件（微件），找到 FreezeYou 分组，选择 冻结解冻启动 小部件，这个是没有右下角角标的，创建完成后使用时与创建桌面快捷方式等效。</li></ul><h2 id="应用列表里右侧的点是什么" tabindex="-1"><a class="header-anchor" href="#应用列表里右侧的点是什么" aria-hidden="true">#</a> 应用列表里右侧的点是什么</h2><ul><li>浅灰色或无色是指该应用未冻结，如果是主题色（比如蓝色），是指对应的应用已经被冻结了。</li></ul><h2 id="锁屏后一键冻结似乎没有生效" tabindex="-1"><a class="header-anchor" href="#锁屏后一键冻结似乎没有生效" aria-hidden="true">#</a> 锁屏后一键冻结似乎没有生效</h2><ul><li>是否在<code>更多设置</code>中开启了<code>锁屏后一键冻结</code>的功能呢？</li><li>是不是没有在系统或相关的管理软件中给予<code>自冻FreezeYou</code>后台服务的白名单呢？</li><li>推荐通过在<code>计划任务</code>中的<code>触发器任务</code>中，使用触发器<code>关闭屏幕时</code>达到类似效果。</li></ul><h2 id="离开冻结似乎无效诶" tabindex="-1"><a class="header-anchor" href="#离开冻结似乎无效诶" aria-hidden="true">#</a> 离开冻结似乎无效诶</h2><ul><li>是否在<code>更多设置</code>中开启了<code>离开冻结</code>的功能呢？</li><li>有没有在系统设置中启用<code>自冻FreezeYou</code>的无障碍功能呢？</li><li>是不是没有在系统或相关的管理软件中给予<code>自冻FreezeYou</code>后台服务的白名单呢？</li></ul><h2 id="应用程序的图标似乎变成透明的了" tabindex="-1"><a class="header-anchor" href="#应用程序的图标似乎变成透明的了" aria-hidden="true">#</a> 应用程序的图标似乎变成透明的了</h2><ul><li>在 Android 8.0 、8.1 的部分设备上发生了这个问题。如何避免呢？不要在应用程序被冻结的时候更新或覆盖安装对应的应用程序即可避免。</li></ul><h2 id="应用程序的图标变安卓机器人了" tabindex="-1"><a class="header-anchor" href="#应用程序的图标变安卓机器人了" aria-hidden="true">#</a> 应用程序的图标变安卓机器人了</h2><ul><li>在 Android 8.0 、8.1 的部分设备上发生了这个问题。如何避免呢？不要在应用程序被冻结的时候更新或覆盖安装对应的应用程序即可避免。</li></ul><h2 id="解冻启动-和-冻解启动-有什么区别" tabindex="-1"><a class="header-anchor" href="#解冻启动-和-冻解启动-有什么区别" aria-hidden="true">#</a> <strong>解冻启动</strong> 和 <strong>冻解启动</strong> 有什么区别</h2><ul><li><code>单击功能</code> 中的 <code>解冻启动</code> 是解冻后启动（不会冻结），而 <code>冻解启动</code> 是 <code>自动冻解</code> 的一个衍生功能，会在解冻时提示或直接启动相应的应用程序。</li></ul><h2 id="桌面-一键冻结-一键解冻-快捷方式有时会没有效果" tabindex="-1"><a class="header-anchor" href="#桌面-一键冻结-一键解冻-快捷方式有时会没有效果" aria-hidden="true">#</a> 桌面 一键冻结 一键解冻 快捷方式有时会没有效果</h2><ul><li>部分设备系统对应用有极其严格的限制，一般情况下，开启针对<code>自冻FreezeYou</code>的电池免优化以及允许自启动后，该问题消失。</li></ul><h2 id="无法在-自冻freezeyou-中创建桌面快捷方式" tabindex="-1"><a class="header-anchor" href="#无法在-自冻freezeyou-中创建桌面快捷方式" aria-hidden="true">#</a> 无法在 自冻FreezeYou 中创建桌面快捷方式</h2><ul><li>是否在权限中允许<code>自冻FreezeYou</code>创建快捷方式了呢？</li><li>可以尝试使用<code>自冻FreezeYou</code>的<code>冻结/解冻/启动</code>桌面小部件达到同样效果。</li></ul><h2 id="应用分身、双开似乎用不了了" tabindex="-1"><a class="header-anchor" href="#应用分身、双开似乎用不了了" aria-hidden="true">#</a> 应用分身、双开似乎用不了了</h2><ul><li>启用免ROOT以后，部分设备可能会出现系统自带的应用分身无法正常使用的情况，如若发生此情况，可以使用其他第三方分身软件代替，暂无已知的更好的解决办法，如有更好的解决方案，欢迎联系我们。</li></ul><h2 id="我开启了-缓存应用程序图标-但是列表加载仍然很慢" tabindex="-1"><a class="header-anchor" href="#我开启了-缓存应用程序图标-但是列表加载仍然很慢" aria-hidden="true">#</a> 我开启了 缓存应用程序图标 但是列表加载仍然很慢</h2><ul><li>开启后第一次载入需要写入缓存，耗时会可能比较长的。</li><li>如果后续仍然加载时间较长，请注意是否清除了 <code>自冻(FreezeYou)</code> 的缓存(Cache)数据，图标缓存是保存在缓存(Cache)数据中的，如果被清除，则需要重新生成。</li><li>如果没有清除缓存数据，也不是第一次载入，那很可能您的设备的小文件读取效率较低，无法快速完成读取，导致载入缓慢。这问题不大，稍稍多等一会儿即可。</li></ul><h2 id="主界面除了以一行一个的列表的方式展现-还有没有别的" tabindex="-1"><a class="header-anchor" href="#主界面除了以一行一个的列表的方式展现-还有没有别的" aria-hidden="true">#</a> 主界面除了以一行一个的列表的方式展现，还有没有别的</h2><ul><li>可至 <code>更多设置</code> - <code>外观</code> - <code>首页格局</code>，更换，支持列表（默认）、网格。</li></ul><h2 id="可否跟随系统的暗色模式自动调整我设定的日常配色方案至暗色" tabindex="-1"><a class="header-anchor" href="#可否跟随系统的暗色模式自动调整我设定的日常配色方案至暗色" aria-hidden="true">#</a> 可否跟随系统的暗色模式自动调整我设定的日常配色方案至暗色</h2><ul><li>至 <code>更多设置</code> - <code>外观</code>，勾选 <code>允许跟随系统自动切换暗色模式</code> 即可。</li></ul><h2 id="我想移除通知栏里的特定应用的快捷冻结的通知-可我划不掉" tabindex="-1"><a class="header-anchor" href="#我想移除通知栏里的特定应用的快捷冻结的通知-可我划不掉" aria-hidden="true">#</a> 我想移除通知栏里的特定应用的快捷冻结的通知，可我划不掉</h2><ul><li>前往 <code>更多设置</code> - <code>通知栏</code> - <code>管理冻结解冻快捷通知</code> 中选中相应的应用程序，移除通知即可。</li><li>这种情况一般是选中了 <code>更多设置</code> - <code>通知栏</code> - <code>冻结与解冻</code> 中的 <code>禁止滑动移除</code> 选项，如不需要，则关闭后下次创建的通知栏快捷操作就可以被滑动移除了。</li></ul><h2 id="我-不-想让自冻freezeyou出现在最近应用列表里" tabindex="-1"><a class="header-anchor" href="#我-不-想让自冻freezeyou出现在最近应用列表里" aria-hidden="true">#</a> 我（不）想让自冻FreezeYou出现在最近应用列表里</h2><ul><li>前往 <code>更多设置</code> - <code>常规</code>，调整 <code>显示在最近任务列表</code> 的启用与否即可。</li><li>一般情况下，使用返回键离开 <code>自冻</code> 时，<code>显示在最近任务列表</code>的未启用状态能够得到体现。</li></ul><h2 id="能不能避免冻结尚有通知存在于通知栏的应用程序" tabindex="-1"><a class="header-anchor" href="#能不能避免冻结尚有通知存在于通知栏的应用程序" aria-hidden="true">#</a> 能不能避免冻结尚有通知存在于通知栏的应用程序</h2><ul><li>至 <code>更多设置</code> - <code>冻结与解冻</code>，勾选 <code>避免冻结有通知的应用程序</code> 即可。</li></ul><h2 id="能不能避免冻结正在前台使用的应用程序" tabindex="-1"><a class="header-anchor" href="#能不能避免冻结正在前台使用的应用程序" aria-hidden="true">#</a> 能不能避免冻结正在前台使用的应用程序</h2><ul><li>至 <code>更多设置</code> - <code>冻结与解冻</code>，勾选 <code>避免冻结前台应用程序</code> 即可。</li></ul><h2 id="如何管理我的自选" tabindex="-1"><a class="header-anchor" href="#如何管理我的自选" aria-hidden="true">#</a> 如何管理我的自选</h2><ul><li>前往 <code>更多设置</code> - <code>管理空间</code> - <code>管理我的自选</code>，点击需要管理的自选即可管理。</li></ul><h2 id="如何解除安裝" tabindex="-1"><a class="header-anchor" href="#如何解除安裝" aria-hidden="true">#</a> 如何解除安裝</h2><ul><li>If device owner is set to <code>FreezeYou</code>, click <code>Release device-owner permission</code> first.</li><li>If profile owner is set to <code>FreezeYou</code>, click <code>Release profile-owner permission</code> first.</li><li>Then, go to <code>FreezeYou</code> <code>Settings</code> - <code>Danger Zone</code>, and click <code>Uninstall</code>.</li></ul><h2 id="more-faq" tabindex="-1"><a class="header-anchor" href="#more-faq" aria-hidden="true">#</a> More Faq</h2>',39),Y=e("h2",{id:"需要更多幫助",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#需要更多幫助","aria-hidden":"true"},"#"),d(" 需要更多幫助")],-1);function g(k,p){const a=i("router-link"),t=i("ExternalLinkIcon"),r=i("RouterLink");return u(),h("div",null,[f,e("nav",_,[e("ul",null,[e("li",null,[l(a,{to:"#点了冻结以后-对应的应用程序在桌面上找不到了"},{default:o(()=>[d("点了冻结以后，对应的应用程序在桌面上找不到了")]),_:1})]),e("li",null,[l(a,{to:"#部分应用解冻不了"},{default:o(()=>[d("部分应用解冻不了")]),_:1})]),e("li",null,[l(a,{to:"#桌面为什么有三个图标"},{default:o(()=>[d("桌面为什么有三个图标")]),_:1})]),e("li",null,[l(a,{to:"#我不小心把桌面的三个图标全关了-而我的桌面又不支持暗码启动-freezeyou"},{default:o(()=>[d("我不小心把桌面的三个图标全关了，而我的桌面又不支持暗码启动 FreezeYou")]),_:1})]),e("li",null,[l(a,{to:"#一键锁屏后只能密码解锁了"},{default:o(()=>[d("一键锁屏后只能密码解锁了")]),_:1})]),e("li",null,[l(a,{to:"#为什么桌面上的快捷方式右下角有个小标志-能不能去掉"},{default:o(()=>[d("为什么桌面上的快捷方式右下角有个小标志，能不能去掉")]),_:1})]),e("li",null,[l(a,{to:"#应用列表里右侧的点是什么"},{default:o(()=>[d("应用列表里右侧的点是什么")]),_:1})]),e("li",null,[l(a,{to:"#锁屏后一键冻结似乎没有生效"},{default:o(()=>[d("锁屏后一键冻结似乎没有生效")]),_:1})]),e("li",null,[l(a,{to:"#离开冻结似乎无效诶"},{default:o(()=>[d("离开冻结似乎无效诶")]),_:1})]),e("li",null,[l(a,{to:"#应用程序的图标似乎变成透明的了"},{default:o(()=>[d("应用程序的图标似乎变成透明的了")]),_:1})]),e("li",null,[l(a,{to:"#应用程序的图标变安卓机器人了"},{default:o(()=>[d("应用程序的图标变安卓机器人了")]),_:1})]),e("li",null,[l(a,{to:"#解冻启动-和-冻解启动-有什么区别"},{default:o(()=>[d("解冻启动 和 冻解启动 有什么区别")]),_:1})]),e("li",null,[l(a,{to:"#桌面-一键冻结-一键解冻-快捷方式有时会没有效果"},{default:o(()=>[d("桌面 一键冻结 一键解冻 快捷方式有时会没有效果")]),_:1})]),e("li",null,[l(a,{to:"#无法在-自冻freezeyou-中创建桌面快捷方式"},{default:o(()=>[d("无法在 自冻FreezeYou 中创建桌面快捷方式")]),_:1})]),e("li",null,[l(a,{to:"#应用分身、双开似乎用不了了"},{default:o(()=>[d("应用分身、双开似乎用不了了")]),_:1})]),e("li",null,[l(a,{to:"#我开启了-缓存应用程序图标-但是列表加载仍然很慢"},{default:o(()=>[d("我开启了 缓存应用程序图标 但是列表加载仍然很慢")]),_:1})]),e("li",null,[l(a,{to:"#主界面除了以一行一个的列表的方式展现-还有没有别的"},{default:o(()=>[d("主界面除了以一行一个的列表的方式展现，还有没有别的")]),_:1})]),e("li",null,[l(a,{to:"#可否跟随系统的暗色模式自动调整我设定的日常配色方案至暗色"},{default:o(()=>[d("可否跟随系统的暗色模式自动调整我设定的日常配色方案至暗色")]),_:1})]),e("li",null,[l(a,{to:"#我想移除通知栏里的特定应用的快捷冻结的通知-可我划不掉"},{default:o(()=>[d("我想移除通知栏里的特定应用的快捷冻结的通知，可我划不掉")]),_:1})]),e("li",null,[l(a,{to:"#我-不-想让自冻freezeyou出现在最近应用列表里"},{default:o(()=>[d("我（不）想让自冻FreezeYou出现在最近应用列表里")]),_:1})]),e("li",null,[l(a,{to:"#能不能避免冻结尚有通知存在于通知栏的应用程序"},{default:o(()=>[d("能不能避免冻结尚有通知存在于通知栏的应用程序")]),_:1})]),e("li",null,[l(a,{to:"#能不能避免冻结正在前台使用的应用程序"},{default:o(()=>[d("能不能避免冻结正在前台使用的应用程序")]),_:1})]),e("li",null,[l(a,{to:"#如何管理我的自选"},{default:o(()=>[d("如何管理我的自选")]),_:1})]),e("li",null,[l(a,{to:"#如何解除安裝"},{default:o(()=>[d("如何解除安裝")]),_:1})]),e("li",null,[l(a,{to:"#more-faq"},{default:o(()=>[d("More Faq")]),_:1})]),e("li",null,[l(a,{to:"#需要更多幫助"},{default:o(()=>[d("需要更多幫助")]),_:1})])])]),x,e("ul",null,[e("li",null,[d("是的，在"),z,d("设备上（尤其是依托于Google服务实现人脸或指纹解锁的设备上），出于安全因素考虑，系统是强制的使在通过设备管理器锁屏的情况下禁止人脸、指纹、以及SmartLock的（"),e("a",b,[d("谷歌官方解释在这里"),l(t)]),d("）。")]),F]),m,e("ul",null,[e("li",null,[l(r,{to:"/zh-TW/faq/"},{default:o(()=>[d("疑難排解")]),_:1})])]),Y,e("ul",null,[e("li",null,[l(r,{to:"/zh-TW/about/contactUs.html"},{default:o(()=>[d("聯繫我們")]),_:1})])])])}const O=n(s,[["render",g],["__file","daily.html.vue"]]);export{O as default};
