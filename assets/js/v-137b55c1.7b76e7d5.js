(self.webpackChunk=self.webpackChunk||[]).push([[618],{9830:(e,a,r)=>{"use strict";r.r(a),r.d(a,{data:()=>l});const l={key:"v-137b55c1",path:"/zh-CN/faq/mroot.html",title:"免ROOT - 疑难解答",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"提示",slug:"提示",children:[]},{level:2,title:"adb server version doesn't match this client",slug:"adb-server-version-doesn-t-match-this-client",children:[]},{level:2,title:"error: device unauthorized",slug:"error-device-unauthorized",children:[]},{level:2,title:"java.lang.IllegalStateException: ... there are already several accounts ... (“正在尝试启用免ROOT模式……”)",slug:"java-lang-illegalstateexception-there-are-already-several-accounts-正在尝试启用免root模式",children:[]},{level:2,title:"java.lang.IllegalStateException: ... there are already several users ... (“正在尝试启用免ROOT模式……”)",slug:"java-lang-illegalstateexception-there-are-already-several-users-正在尝试启用免root模式",children:[]},{level:2,title:"java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE_DEVICE_ADMINS",slug:"java-lang-securityexception-neither-user-2000-nor-current-process-has-android-permission-manage-device-admins",children:[]},{level:2,title:"好麻烦，有没有简单点的",slug:"好麻烦-有没有简单点的",children:[]},{level:2,title:"激活以后，USB 调试之类的可以关掉吗？",slug:"激活以后-usb-调试之类的可以关掉吗",children:[]},{level:2,title:"启用以后能否卸载？",slug:"启用以后能否卸载",children:[]},{level:2,title:"更多疑难解答",slug:"更多疑难解答",children:[]},{level:2,title:"需要更多帮助",slug:"需要更多帮助",children:[]}],filePathRelative:"zh-CN/faq/mroot.md",git:{updatedTime:1614773786e3,contributors:[{name:"Playhi",email:"000902play@gmail.com",commits:5}]}}},5579:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>G});var l=r(6252);const t=(0,l.Wm)("h1",{id:"免root-疑难解答",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#免root-疑难解答","aria-hidden":"true"},"#"),(0,l.Uk)(" 免ROOT - 疑难解答")],-1),n={class:"table-of-contents"},i=(0,l.Uk)("提示"),o=(0,l.Uk)("adb server version doesn't match this client"),d=(0,l.Uk)("error: device unauthorized"),s=(0,l.Uk)("java.lang.IllegalStateException: ... there are already several accounts ... (“正在尝试启用免ROOT模式……”)"),u=(0,l.Uk)("java.lang.IllegalStateException: ... there are already several users ... (“正在尝试启用免ROOT模式……”)"),c=(0,l.Uk)("java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE_DEVICE_ADMINS"),h=(0,l.Uk)("好麻烦，有没有简单点的"),m=(0,l.Uk)("激活以后，USB 调试之类的可以关掉吗？"),v=(0,l.Uk)("启用以后能否卸载？"),g=(0,l.Uk)("更多疑难解答"),W=(0,l.Uk)("需要更多帮助"),p=(0,l.Wm)("h2",{id:"提示",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#提示","aria-hidden":"true"},"#"),(0,l.Uk)(" 提示")],-1),f=(0,l.Uk)("如果想要启用免ROOT，但在来到这里之前还没有尝试过启用免ROOT，建议先前往"),k=(0,l.Uk)("启用免ROOT"),b=(0,l.Uk)("。"),U=(0,l.uE)('<h2 id="adb-server-version-doesn-t-match-this-client" tabindex="-1"><a class="header-anchor" href="#adb-server-version-doesn-t-match-this-client" aria-hidden="true">#</a> adb server version doesn&#39;t match this client</h2><ul><li><strong>(仅限使用Windows系统的用户)</strong> 把解压后得到的adb文件，删去占用空间较大的那个(约2544KB)，再试试？</li><li>是否有PC端手机助手类软件占用了相关端口呢？可以先退出相关助手类软件（结束其PC端后台，含衍生内容）。</li></ul><h2 id="error-device-unauthorized" tabindex="-1"><a class="header-anchor" href="#error-device-unauthorized" aria-hidden="true">#</a> error: device unauthorized</h2><ul><li>请在被操作设备上点击确认允许操作。</li></ul><h2 id="java-lang-illegalstateexception-there-are-already-several-accounts-正在尝试启用免root模式" tabindex="-1"><a class="header-anchor" href="#java-lang-illegalstateexception-there-are-already-several-accounts-正在尝试启用免root模式" aria-hidden="true">#</a> java.lang.IllegalStateException: ... there are already several accounts ... (“正在尝试启用免ROOT模式……”)</h2><ul><li>请检查您系统设置中账户中的账户是否全部删除了(需要全部删除，免ROOT启用后，可以再手动加回去)(实在删不掉的账户，可以试试断开网络连接以后删除，还不行的话可以试试先备份相关的应用数据以后卸载相关应用，成功后再恢复备份)，如果不清楚是哪个应用程序的账户没有清除干净，请在<code>“正在尝试启用免ROOT模式……”</code>上方，寻找<code>“当前设备账户信息：”</code>在<code>Accounts</code>组中，检查<code>type=</code>这一项，<code>=</code>后面的是应用程序包名，然后在 <strong>自冻 FreezeYou</strong> 列表中寻找该包名对应的程序即可获知账户来自哪个应用程序。</li><li>也可以尝试重启至<b>安全模式</b>（调出关机界面后，长按显示的“关机”按钮），再次尝试进行激活。</li></ul><h2 id="java-lang-illegalstateexception-there-are-already-several-users-正在尝试启用免root模式" tabindex="-1"><a class="header-anchor" href="#java-lang-illegalstateexception-there-are-already-several-users-正在尝试启用免root模式" aria-hidden="true">#</a> java.lang.IllegalStateException: ... there are already several users ... (“正在尝试启用免ROOT模式……”)</h2>',7),x=(0,l.Uk)("请检查您系统设置中可见的其他用户是否已经删除了、分身应用是否已经关闭了(部分分身的实现利用的是 Android 自带的多用户功能，会影响免ROOT的启用)，如果还是失败，可以尝试 "),O=(0,l.Wm)("code",null,"adb shell pm remove-user [USER_ID]",-1),y=(0,l.Uk)(),w=(0,l.Uk)("。"),_=(0,l.Wm)("h2",{id:"java-lang-securityexception-neither-user-2000-nor-current-process-has-android-permission-manage-device-admins",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#java-lang-securityexception-neither-user-2000-nor-current-process-has-android-permission-manage-device-admins","aria-hidden":"true"},"#"),(0,l.Uk)(" java.lang.SecurityException: Neither user 2000 nor current process has android.permission.MANAGE_DEVICE_ADMINS")],-1),j=(0,l.Uk)("在 "),E=(0,l.Wm)("code",null,"USB调试",-1),R=(0,l.Uk)(" 下方 还有一个 "),S=(0,l.Wm)("code",null,"USB调试(安全设置)",-1),T=(0,l.Uk)("，也需要打开，如果提示登录小米账号，请避免勾选 同步 项。"),z={href:"https://www.miui.com/thread-5711795-1-1.html",target:"_blank",rel:"noopener noreferrer"},I=(0,l.Uk)("MIUI公告"),N=(0,l.Wm)("h2",{id:"好麻烦-有没有简单点的",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#好麻烦-有没有简单点的","aria-hidden":"true"},"#"),(0,l.Uk)(" 好麻烦，有没有简单点的")],-1),A={href:"https://www.atmb.top/?from=freezeyou",target:"_blank",rel:"noopener noreferrer"},C=(0,l.Uk)("使用 AutumnBox 启用 自冻FreezeYou 免ROOT模式"),B=(0,l.uE)('<h2 id="激活以后-usb-调试之类的可以关掉吗" tabindex="-1"><a class="header-anchor" href="#激活以后-usb-调试之类的可以关掉吗" aria-hidden="true">#</a> 激活以后，USB 调试之类的可以关掉吗？</h2><ul><li>正常情况下是可以的（目前还没有收到关闭后失效或无法关闭的情况），同时为了安全考虑，也建议激活完成后<code>关闭 USB 调试</code>。</li></ul><h2 id="启用以后能否卸载" tabindex="-1"><a class="header-anchor" href="#启用以后能否卸载" aria-hidden="true">#</a> 启用以后能否卸载？</h2><ul><li>可以卸载，但可能需要先到 <code>更多设置</code> → <code>危险区</code> 点击 <code>解除免ROOT</code>，然后正常卸载即可。</li></ul><h2 id="更多疑难解答" tabindex="-1"><a class="header-anchor" href="#更多疑难解答" aria-hidden="true">#</a> 更多疑难解答</h2>',5),D=(0,l.Uk)("疑难解答"),M=(0,l.Wm)("h2",{id:"需要更多帮助",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#需要更多帮助","aria-hidden":"true"},"#"),(0,l.Uk)(" 需要更多帮助")],-1),q={href:"https://jq.qq.com/?_wv=1027&k=5RJffet",target:"_blank",rel:"noopener noreferrer"},P=(0,l.Uk)("加入QQ群(704086494)"),G={render:function(e,a){const r=(0,l.up)("RouterLink"),G=(0,l.up)("Badge"),V=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[t,(0,l.Wm)("nav",n,[(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#提示"},{default:(0,l.w5)((()=>[i])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#adb-server-version-doesn-t-match-this-client"},{default:(0,l.w5)((()=>[o])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#error-device-unauthorized"},{default:(0,l.w5)((()=>[d])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#java-lang-illegalstateexception-there-are-already-several-accounts-正在尝试启用免root模式"},{default:(0,l.w5)((()=>[s])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#java-lang-illegalstateexception-there-are-already-several-users-正在尝试启用免root模式"},{default:(0,l.w5)((()=>[u])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#java-lang-securityexception-neither-user-2000-nor-current-process-has-android-permission-manage-device-admins"},{default:(0,l.w5)((()=>[c])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#好麻烦-有没有简单点的"},{default:(0,l.w5)((()=>[h])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#激活以后-usb-调试之类的可以关掉吗"},{default:(0,l.w5)((()=>[m])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#启用以后能否卸载"},{default:(0,l.w5)((()=>[v])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#更多疑难解答"},{default:(0,l.w5)((()=>[g])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"#需要更多帮助"},{default:(0,l.w5)((()=>[W])),_:1})])])]),p,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[f,(0,l.Wm)(r,{to:"/zh-CN/guide/enable-mroot.html"},{default:(0,l.w5)((()=>[k])),_:1}),b])]),U,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[x,O,y,(0,l.Wm)(G,{text:"该操作可能导致系统自带的分身功能无法正常使用",type:"error"}),w])]),_,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[j,E,R,S,T,(0,l.Wm)("a",z,[I,(0,l.Wm)(V)])])]),N,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",A,[C,(0,l.Wm)(V)])])]),B,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)(r,{to:"/zh-CN/faq/"},{default:(0,l.w5)((()=>[D])),_:1})])]),M,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",q,[P,(0,l.Wm)(V)])])])],64)}}}}]);