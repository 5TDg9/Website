import{_ as d,r as i,o as c,c as h,a as e,b as o,w as a,F as u,d as t,e as l}from"./app.61a3ca34.js";const m={},p=e("h1",{id:"scheduled-task-faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scheduled-task-faq","aria-hidden":"true"},"#"),t(" Scheduled Task - FAQ")],-1),_={class:"table-of-contents"},g=t("It seems that the scheduled task is not working"),f=t("Why the actual execution is sometimes a little later"),k=t("Manually entering the package name is so troublesome"),w=t("Wi-Fi not turned on as planned"),y=t("Cellular data not turned on as planned"),b=t("How to get the alias of my customization"),x=t("More Faq"),F=t("Need More Help"),z=l('<h2 id="it-seems-that-the-scheduled-task-is-not-working" tabindex="-1"><a class="header-anchor" href="#it-seems-that-the-scheduled-task-is-not-working" aria-hidden="true">#</a> It seems that the scheduled task is not working</h2><ul><li>Is <code>FreezeYou</code> the latest version?</li><li>Has <code>FreezeYou</code> been added to the allow-to-run list of the system? For example, allow running in the background, ignoring battery optimizations.</li><li>Are spaces missing in tasks?</li><li>Are there extra spaces in the task?</li><li>Commas should be <code>,</code>, not <code>\uFF0C</code>.</li><li>Pay attention to capitalization!</li></ul><h2 id="why-the-actual-execution-is-sometimes-a-little-later" tabindex="-1"><a class="header-anchor" href="#why-the-actual-execution-is-sometimes-a-little-later" aria-hidden="true">#</a> Why the actual execution is sometimes a little later</h2><ul><li>Since Android 6.0, Google introduced one new power-save mode, which organizes some tasks of applications to perform together in order to reduce power consumption, which will cause some tasks to be delayed.</li><li>Since these applications usually wake up the system frequently or even continuously, the scheduled tasks of <code>FreezeYou</code> can generally be executed on time when the applications are running.</li></ul><h2 id="manually-entering-the-package-name-is-so-troublesome" tabindex="-1"><a class="header-anchor" href="#manually-entering-the-package-name-is-so-troublesome" aria-hidden="true">#</a> Manually entering the package name is so troublesome</h2>',5),q=e("li",null,[t("In "),e("strong",null,"Application List"),t(", click the corresponding application (by default, "),e("strong",null,"Click Function"),t(" is set to "),e("strong",null,"Choose Action"),t("), the interface for selecting the operation will appear, which has the function of "),e("strong",null,"Copy Package Name"),t(".")],-1),v=t("In "),C=e("strong",null,"Application List",-1),A=t(", in the multi-selection mode (long press), you can select "),I=e("strong",null,"Copy After Being Formatted",-1),M=t(" in the menu, and then paste the content to the place where you need to enter."),N=l('<h2 id="wi-fi-not-turned-on-as-planned" tabindex="-1"><a class="header-anchor" href="#wi-fi-not-turned-on-as-planned" aria-hidden="true">#</a> Wi-Fi not turned on as planned</h2><ul><li>See <strong>It seems that the scheduled task is not working</strong>.</li><li>Please check whether the airplane mode is turned on. On some devices, when the airplane mode is turned on, <code>FreezeYou</code> cannot turn on or turn off the Wi-Fi.</li></ul><h2 id="cellular-data-not-turned-on-as-planned" tabindex="-1"><a class="header-anchor" href="#cellular-data-not-turned-on-as-planned" aria-hidden="true">#</a> Cellular data not turned on as planned</h2><ul><li>The function is currently only supported on <strong>Android 4.4 and below</strong> or <strong>with ROOT permission</strong> or <strong><code>FreezeYou</code> has been installed as a high-privilege system application</strong> on the device.</li><li>Check if the <code>Enable or Disable Cellular Data</code> permission is granted.</li></ul><h2 id="how-to-get-the-alias-of-my-customization" tabindex="-1"><a class="header-anchor" href="#how-to-get-the-alias-of-my-customization" aria-hidden="true">#</a> How to get the alias of my customization</h2><ul><li>Go to <code>Settings</code> - <code>Manage space</code> - <code>Manage my customization</code>, click the appropriate item, then click <strong>Copy Alias</strong>.</li></ul><h2 id="more-faq" tabindex="-1"><a class="header-anchor" href="#more-faq" aria-hidden="true">#</a> More Faq</h2>',7),S=t("FAQ"),B=e("h2",{id:"need-more-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#need-more-help","aria-hidden":"true"},"#"),t(" Need More Help")],-1),L={href:"https://jq.qq.com/?_wv=1027&k=5RJffet",target:"_blank",rel:"noopener noreferrer"},H=t("Join QQ Group(704086494)");function W(Y,E){const n=i("RouterLink"),s=i("Badge"),r=i("ExternalLinkIcon");return c(),h(u,null,[p,e("nav",_,[e("ul",null,[e("li",null,[o(n,{to:"#it-seems-that-the-scheduled-task-is-not-working"},{default:a(()=>[g]),_:1})]),e("li",null,[o(n,{to:"#why-the-actual-execution-is-sometimes-a-little-later"},{default:a(()=>[f]),_:1})]),e("li",null,[o(n,{to:"#manually-entering-the-package-name-is-so-troublesome"},{default:a(()=>[k]),_:1})]),e("li",null,[o(n,{to:"#wi-fi-not-turned-on-as-planned"},{default:a(()=>[w]),_:1})]),e("li",null,[o(n,{to:"#cellular-data-not-turned-on-as-planned"},{default:a(()=>[y]),_:1})]),e("li",null,[o(n,{to:"#how-to-get-the-alias-of-my-customization"},{default:a(()=>[b]),_:1})]),e("li",null,[o(n,{to:"#more-faq"},{default:a(()=>[x]),_:1})]),e("li",null,[o(n,{to:"#need-more-help"},{default:a(()=>[F]),_:1})])])]),z,e("ul",null,[q,e("li",null,[v,C,A,I,M,o(s,{text:"6.7+",type:"tip",vertical:"top"})])]),N,e("ul",null,[e("li",null,[o(n,{to:"/en-US/faq/"},{default:a(()=>[S]),_:1})])]),B,e("ul",null,[e("li",null,[e("a",L,[H,o(r)])])])],64)}var R=d(m,[["render",W],["__file","schedules.html.vue"]]);export{R as default};
