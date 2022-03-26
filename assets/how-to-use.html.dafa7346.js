import{r as i,o as l,c as s,a as e,b as c,w as r,F as h,e as n,d as o}from"./app.350a5e3a.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const p={},f=n('<h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1><p><code>FreezeYou</code> has a lot of functions, here are some brief introductions, which are convenient to get started quickly.</p><h2 id="grant-permissions" tabindex="-1"><a class="header-anchor" href="#grant-permissions" aria-hidden="true">#</a> Grant Permissions</h2><p>Some functions in <code>FreezeYou</code> require special permissions. For example, <code>Freeze and Unfreeze</code> requires special authorization to use it normally (if not use related functions, it&#39;s no need to grant these permissions). At present, if you want to use the <code>Freeze and Unfreeze</code> function, you need to ensure that at least one of the following permissions has been or can be granted to <code>FreezeYou</code>, and select the corresponding option in <code>Settings</code> - <code>Freeze and Unfreeze</code> - <code>Select freeze and unfreeze mode</code>.</p>',4),_=o("Device Policy Manager (DPM) (Usually be called NoRoot) \u2192 How to "),k=o("grant permission"),m=e("li",null,"Root",-1),y=e("li",null,"System App",-1),z={id:"freeze-and-unfreeze",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#freeze-and-unfreeze","aria-hidden":"true"},"#",-1),b=o(" Freeze and Unfreeze "),w=e("p",null,[o("Run "),e("code",null,"FreezeYou"),o(", and after the application list is loaded, click the corresponding application, and select "),e("strong",null,"Run/Freeze/Unfreeze"),o(" to perform related operations.")],-1),x={id:"view-by-category",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#view-by-category","aria-hidden":"true"},"#",-1),v=o(" View by Category "),O=n("<p>By default, after launching <code>FreezeYou</code>, the homepage will directly display all applications. At this time, if we want to find some applications, it is sometimes troublesome. At this point, we can click <code>\u22EE</code> in the upper end corner, <code>+</code> in the lower end corner, or <code>\u2261</code> on the device to call up the menu, and click <code>View Mode</code> to view by category. By the way, if there is enough space, the <code>View Mode</code> will display as an icon near the <code>\u22EE</code>.</p>",1),K={id:"quick-search",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#quick-search","aria-hidden":"true"},"#",-1),S=o(" Quick Search "),U=e("p",null,[o("After launching "),e("code",null,"FreezeYou"),o(", in the main interface, we can click "),e("code",null,"Search"),o(" near the top to perform a quick search."),e("br"),o(" For example, typing "),e("code",null,"A"),o(" immediately filters and lists all applications in that category that contain "),e("code",null,"A"),o(" or "),e("code",null,"a"),o(" in their name (case-insensitive).")],-1),L={id:"scheduled-task",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#scheduled-task","aria-hidden":"true"},"#",-1),R=o(" Scheduled Task "),q=o("Scheduled task have many functions and are complicated, see \u2192 "),T=o("Scheduled Task"),B=o("."),E={id:"change-interface-style",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#change-interface-style","aria-hidden":"true"},"#",-1),N=o(" Change Interface Style "),V=n("<p>Launch <code>FreezeYou</code>, click <code>\u22EE</code> in the upper end corner or <code>+</code> in the lower end corner or <code>\u2261</code> on the device to call up the menu, click <code>Settings</code>, click <code>Appearance</code>, and click <code>Interface Style</code> to modify.</p>",1),C={id:"backup-and-restore",tabindex:"-1"},Q=e("a",{class:"header-anchor",href:"#backup-and-restore","aria-hidden":"true"},"#",-1),G=o(" Backup and Restore "),M=n('<p>Launch <code>FreezeYou</code>, click <code>\u22EE</code> in the upper end corner or <code>+</code> in the lower end corner or <code>\u2261</code> on the device to call up the menu, click <code>Settings</code>, click <code>Backup and Restore</code>, click <code>Export</code> to export the current settings, scheduled tasks and other data, click <code>Import</code>, the data in the input box below will be read, and you can select the data items to be imported.</p><h2 id="notification-tiles" tabindex="-1"><a class="header-anchor" href="#notification-tiles" aria-hidden="true">#</a> Notification Tiles</h2><p>Through the notification bar tile, you can click the tile to quickly perform operations. Pull down the notification bar, click <code>Edit</code>, set the corresponding tile to be displayed (requires device support).<br><strong>Available notification tiles:</strong></p><ul><li>One Key Freeze</li><li>One Key Unfreeze</li><li>One Key Screen Lock</li></ul><h2 id="one-key-freeze" tabindex="-1"><a class="header-anchor" href="#one-key-freeze" aria-hidden="true">#</a> One Key Freeze</h2><p><code>One Key Freeze</code> will perform the <code>freeze</code> operation on each application that exists in the <code>One Key Freeze list</code>. Before using, you need to add the corresponding application to the <code>One Key Freeze list</code> (click the application in the application list, and click <code>Add/Remove</code>).<br><strong>Usage:</strong></p><ul><li>Launch <code>FreezeYou</code>, click <code>\u22EE</code> in the upper end corner or <code>+</code> in the lower end corner or <code>\u2261</code> on the device to call up the menu, click <code>Execute</code>, and click <code>One Key Freeze</code>.</li><li>Launch <code>FreezeYou</code>, click <code>\u22EE</code> in the upper end corner or <code>+</code> in the lower end corner or <code>\u2261</code> on the device to call up the menu, click <code>Shortcuts</code>, and click <code>One Key Freeze</code>, then you can use this shortcut on the launcher for <code>One Key Freeze</code>.</li><li>Call up the <code>Add Widget</code> or <code>Add Gadget</code> or <code>Add Tool</code> menu on the launcher, select <code>FreezeYou</code>, and select <code>One Key Freeze</code>, then you can use the shortcut on the launcher to execute <code>One Key Freeze</code>.</li></ul><h2 id="one-key-unfreeze" tabindex="-1"><a class="header-anchor" href="#one-key-unfreeze" aria-hidden="true">#</a> One Key Unfreeze</h2><p><code>One Key Unfreeze</code> will perform the <code>unfreeze</code> operation on each application that exists in the <code>One Key Unfreeze list</code>. Before using, you need to add the corresponding application to the <code>One Key Unfreeze list</code> (click the application in the application list, and click <code>Add/Remove</code>).<br><strong>Usage:</strong></p><ul><li>Launch <code>FreezeYou</code>, click <code>\u22EE</code> in the upper end corner or <code>+</code> in the lower end corner or <code>\u2261</code> on the device to call up the menu, click <code>Execute</code>, and click <code>One Key Unfreeze</code>.</li><li>Launch <code>FreezeYou</code>, click <code>\u22EE</code> in the upper end corner or <code>+</code> in the lower end corner or <code>\u2261</code> on the device to call up the menu, click <code>Shortcuts</code>, and click <code>One Key Unfreeze</code>, then you can use this shortcut on the launcher for <code>One Key Unfreeze</code>.</li><li>Call up the <code>Add Widget</code> or <code>Add Gadget</code> or <code>Add Tool</code> menu on the launcher, select <code>FreezeYou</code>, and select <code>One Key Unfreeze</code>, then you can use the shortcut on the launcher to execute <code>One Key Unfreeze</code>.</li></ul><h2 id="leave-freeze" tabindex="-1"><a class="header-anchor" href="#leave-freeze" aria-hidden="true">#</a> Leave Freeze</h2><p><em>It is recommended to use <code>Scheduled Task</code> instead</em><br> Launch <code>FreezeYou</code>, click <code>\u22EE</code> in the upper end corner or <code>+</code> in the lower end corner or <code>\u2261</code> on the device to call up the menu, click <code>Settings</code>, click <code>Automation</code>, and check <code>Leave Freeze</code>, then when we leave the application which is in <code>Freeze Once Quit list</code> (click the corresponding application in the application list, and click <code>Add/Remove</code> to add to or remove from the list), the corresponding application will be frozen.</p><h2 id="auto-one-key-freeze-after-screen-locked" tabindex="-1"><a class="header-anchor" href="#auto-one-key-freeze-after-screen-locked" aria-hidden="true">#</a> Auto One Key Freeze After Screen Locked</h2><p><em>It is recommended to use <code>Scheduled Task</code> instead</em><br> Launch <code>FreezeYou</code>, click <code>\u22EE</code> in the upper end corner or <code>+</code> in the lower end corner or <code>\u2261</code> on the device to call up the menu, click <code>Settings</code>, click <code>Automation</code>, and check <code>One Key freeze after screen locked</code>, then <code>One Key freeze</code> will be executed after screen locked.</p><h2 id="need-help" tabindex="-1"><a class="header-anchor" href="#need-help" aria-hidden="true">#</a> Need Help</h2>',15),P=o("FAQ"),D={href:"https://jq.qq.com/?_wv=1027&k=5RJffet",target:"_blank",rel:"noopener noreferrer"},H=o("Join QQ Group(704086494)");function J(W,j){const d=i("RouterLink"),t=i("Badge"),a=i("ExternalLinkIcon");return l(),s(h,null,[f,e("ul",null,[e("li",null,[_,c(d,{to:"/tr-TR/guide/enable-mroot.html"},{default:r(()=>[k]),_:1})]),m,y]),e("h2",z,[g,b,c(t,{text:"Be extra cautious",type:"warning"})]),w,e("h2",x,[F,v,c(t,{text:"1.13+",type:"tip"})]),O,e("h2",K,[A,S,c(t,{text:"2.13+",type:"tip"})]),U,e("h2",L,[Y,R,c(t,{text:"6.0+",type:"tip"})]),e("p",null,[q,c(d,{to:"/tr-TR/guide/schedules.html"},{default:r(()=>[T]),_:1}),B]),e("h2",E,[I,N,c(t,{text:"4.0+",type:"tip"})]),V,e("h2",C,[Q,G,c(t,{text:"8.8+",type:"tip"})]),M,e("ul",null,[e("li",null,[c(d,{to:"/tr-TR/faq/"},{default:r(()=>[P]),_:1})]),e("li",null,[e("a",D,[H,c(a)])])])],64)}var $=u(p,[["render",J]]);export{$ as default};
