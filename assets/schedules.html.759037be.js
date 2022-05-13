import{_ as r,r as i,o as d,c as h,b as e,d as o,w as n,F as c,e as t,a as l}from"./app.5144a3a0.js";const u={},m=e("h1",{id:"scheduled-task-faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scheduled-task-faq","aria-hidden":"true"},"#"),t(" Scheduled Task - FAQ")],-1),p={class:"table-of-contents"},_=t("It seems that the scheduled task is not working"),g=t("Why the actual execution is sometimes a little later"),f=t("Manually entering the package name is so troublesome"),k=t("Wi-Fi not turned on as planned"),w=t("Cellular data not turned on as planned"),y=t("How to get the alias of my customization"),b=t("More Faq"),x=t("Need More Help"),F=l('<h2 id="it-seems-that-the-scheduled-task-is-not-working" tabindex="-1"><a class="header-anchor" href="#it-seems-that-the-scheduled-task-is-not-working" aria-hidden="true">#</a> It seems that the scheduled task is not working</h2><ul><li>Is <code>FreezeYou</code> the latest version?</li><li>Has <code>FreezeYou</code> been added to the allow-to-run list of the system? For example, allow running in the background, ignoring battery optimizations.</li><li>Are spaces missing in tasks?</li><li>Are there extra spaces in the task?</li><li>Commas should be <code>,</code>, not <code>\uFF0C</code>.</li><li>Pay attention to capitalization!</li></ul><h2 id="why-the-actual-execution-is-sometimes-a-little-later" tabindex="-1"><a class="header-anchor" href="#why-the-actual-execution-is-sometimes-a-little-later" aria-hidden="true">#</a> Why the actual execution is sometimes a little later</h2><ul><li>Since Android 6.0, Google introduced one new power-save mode, which organizes some tasks of applications to perform together in order to reduce power consumption, which will cause some tasks to be delayed.</li><li>Since these applications usually wake up the system frequently or even continuously, the scheduled tasks of <code>FreezeYou</code> can generally be executed on time when the applications are running.</li></ul><h2 id="manually-entering-the-package-name-is-so-troublesome" tabindex="-1"><a class="header-anchor" href="#manually-entering-the-package-name-is-so-troublesome" aria-hidden="true">#</a> Manually entering the package name is so troublesome</h2>',5),z=e("li",null,[t("In "),e("strong",null,"Application List"),t(", click the corresponding application (by default, "),e("strong",null,"Click Function"),t(" is set to "),e("strong",null,"Choose Action"),t("), the interface for selecting the operation will appear, which has the function of "),e("strong",null,"Copy Package Name"),t(".")],-1),A=t("In "),C=e("strong",null,"Application List",-1),v=t(", in the multi-selection mode (long press), you can select "),q=e("strong",null,"Copy After Being Formatted",-1),M=t(" in the menu, and then paste the content to the place where you need to enter."),N=l('<h2 id="wi-fi-not-turned-on-as-planned" tabindex="-1"><a class="header-anchor" href="#wi-fi-not-turned-on-as-planned" aria-hidden="true">#</a> Wi-Fi not turned on as planned</h2><ul><li>See <strong>It seems that the scheduled task is not working</strong>.</li><li>Please check whether the airplane mode is turned on. On some devices, when the airplane mode is turned on, <code>FreezeYou</code> cannot turn on or turn off the Wi-Fi.</li></ul><h2 id="cellular-data-not-turned-on-as-planned" tabindex="-1"><a class="header-anchor" href="#cellular-data-not-turned-on-as-planned" aria-hidden="true">#</a> Cellular data not turned on as planned</h2><ul><li>The function is currently only supported on <strong>Android 4.4 and below</strong> or <strong>with ROOT permission</strong> or <strong><code>FreezeYou</code> has been installed as a high-privilege system application</strong> on the device.</li><li>Check if the <code>Enable or Disable Cellular Data</code> permission is granted.</li></ul><h2 id="how-to-get-the-alias-of-my-customization" tabindex="-1"><a class="header-anchor" href="#how-to-get-the-alias-of-my-customization" aria-hidden="true">#</a> How to get the alias of my customization</h2><ul><li>Go to <code>Settings</code> - <code>Manage space</code> - <code>Manage my customization</code>, click the appropriate item, then click <strong>Copy Alias</strong>.</li></ul><h2 id="more-faq" tabindex="-1"><a class="header-anchor" href="#more-faq" aria-hidden="true">#</a> More Faq</h2>',7),B=t("FAQ"),I=e("h2",{id:"need-more-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#need-more-help","aria-hidden":"true"},"#"),t(" Need More Help")],-1),S=t("Contact Us");function H(W,Y){const a=i("RouterLink"),s=i("Badge");return d(),h(c,null,[m,e("nav",p,[e("ul",null,[e("li",null,[o(a,{to:"#it-seems-that-the-scheduled-task-is-not-working"},{default:n(()=>[_]),_:1})]),e("li",null,[o(a,{to:"#why-the-actual-execution-is-sometimes-a-little-later"},{default:n(()=>[g]),_:1})]),e("li",null,[o(a,{to:"#manually-entering-the-package-name-is-so-troublesome"},{default:n(()=>[f]),_:1})]),e("li",null,[o(a,{to:"#wi-fi-not-turned-on-as-planned"},{default:n(()=>[k]),_:1})]),e("li",null,[o(a,{to:"#cellular-data-not-turned-on-as-planned"},{default:n(()=>[w]),_:1})]),e("li",null,[o(a,{to:"#how-to-get-the-alias-of-my-customization"},{default:n(()=>[y]),_:1})]),e("li",null,[o(a,{to:"#more-faq"},{default:n(()=>[b]),_:1})]),e("li",null,[o(a,{to:"#need-more-help"},{default:n(()=>[x]),_:1})])])]),F,e("ul",null,[z,e("li",null,[A,C,v,q,M,o(s,{text:"6.7+",type:"tip",vertical:"top"})])]),N,e("ul",null,[e("li",null,[o(a,{to:"/uk-UA/faq/"},{default:n(()=>[B]),_:1})])]),I,e("ul",null,[e("li",null,[o(a,{to:"/uk-UA/about/contactUs.html"},{default:n(()=>[S]),_:1})])])],64)}var T=r(u,[["render",H],["__file","schedules.html.vue"]]);export{T as default};
