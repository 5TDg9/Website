import{_ as d,r as l,o as c,c as h,b as e,e as a,w as o,d as t,a as s}from"./app-ddd38ec8.js";const u={},m=e("h1",{id:"scheduled-task-faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scheduled-task-faq","aria-hidden":"true"},"#"),t(" Scheduled Task - FAQ")],-1),p={class:"table-of-contents"},g=s('<h2 id="it-seems-that-the-scheduled-task-is-not-working" tabindex="-1"><a class="header-anchor" href="#it-seems-that-the-scheduled-task-is-not-working" aria-hidden="true">#</a> It seems that the scheduled task is not working</h2><ul><li>Is <code>FreezeYou</code> the latest version?</li><li>Has <code>FreezeYou</code> been added to the allow-to-run list of the system? For example, allow running in the background, ignoring battery optimizations.</li><li>Are spaces missing in tasks?</li><li>Are there extra spaces in the task?</li><li>Commas should be <code>,</code>, not <code>，</code>.</li><li>Pay attention to capitalization!</li></ul><h2 id="why-the-actual-execution-is-sometimes-a-little-later" tabindex="-1"><a class="header-anchor" href="#why-the-actual-execution-is-sometimes-a-little-later" aria-hidden="true">#</a> Why the actual execution is sometimes a little later</h2><ul><li>Since Android 6.0, Google introduced one new power-save mode, which organizes some tasks of applications to perform together in order to reduce power consumption, which will cause some tasks to be delayed.</li><li>Since these applications usually wake up the system frequently or even continuously, the scheduled tasks of <code>FreezeYou</code> can generally be executed on time when the applications are running.</li></ul><h2 id="manually-entering-the-package-name-is-so-troublesome" tabindex="-1"><a class="header-anchor" href="#manually-entering-the-package-name-is-so-troublesome" aria-hidden="true">#</a> Manually entering the package name is so troublesome</h2>',5),f=e("li",null,[t("In "),e("strong",null,"Application List"),t(", click the corresponding application (by default, "),e("strong",null,"Click Function"),t(" is set to "),e("strong",null,"Choose Action"),t("), the interface for selecting the operation will appear, which has the function of "),e("strong",null,"Copy Package Name"),t(".")],-1),_=e("strong",null,"Application List",-1),k=e("strong",null,"Copy After Being Formatted",-1),w=s('<h2 id="wi-fi-not-turned-on-as-planned" tabindex="-1"><a class="header-anchor" href="#wi-fi-not-turned-on-as-planned" aria-hidden="true">#</a> Wi-Fi not turned on as planned</h2><ul><li>See <strong>It seems that the scheduled task is not working</strong>.</li><li>Please check whether the airplane mode is turned on. On some devices, when the airplane mode is turned on, <code>FreezeYou</code> cannot turn on or turn off the Wi-Fi.</li></ul><h2 id="cellular-data-not-turned-on-as-planned" tabindex="-1"><a class="header-anchor" href="#cellular-data-not-turned-on-as-planned" aria-hidden="true">#</a> Cellular data not turned on as planned</h2><ul><li>The function is currently only supported on <strong>Android 4.4 and below</strong> or <strong>with ROOT permission</strong> or <strong><code>FreezeYou</code> has been installed as a high-privilege system application</strong> on the device.</li><li>Check if the <code>Enable or Disable Cellular Data</code> permission is granted.</li></ul><h2 id="how-to-get-the-alias-of-my-customization" tabindex="-1"><a class="header-anchor" href="#how-to-get-the-alias-of-my-customization" aria-hidden="true">#</a> How to get the alias of my customization</h2><ul><li>Go to <code>Settings</code> - <code>Manage space</code> - <code>Manage my customization</code>, click the appropriate item, then click <strong>Copy Alias</strong>.</li></ul><h2 id="more-faq" tabindex="-1"><a class="header-anchor" href="#more-faq" aria-hidden="true">#</a> More Faq</h2>',7),y=e("h2",{id:"need-more-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#need-more-help","aria-hidden":"true"},"#"),t(" Need More Help")],-1);function b(x,F){const n=l("router-link"),r=l("Badge"),i=l("RouterLink");return c(),h("div",null,[m,e("nav",p,[e("ul",null,[e("li",null,[a(n,{to:"#it-seems-that-the-scheduled-task-is-not-working"},{default:o(()=>[t("It seems that the scheduled task is not working")]),_:1})]),e("li",null,[a(n,{to:"#why-the-actual-execution-is-sometimes-a-little-later"},{default:o(()=>[t("Why the actual execution is sometimes a little later")]),_:1})]),e("li",null,[a(n,{to:"#manually-entering-the-package-name-is-so-troublesome"},{default:o(()=>[t("Manually entering the package name is so troublesome")]),_:1})]),e("li",null,[a(n,{to:"#wi-fi-not-turned-on-as-planned"},{default:o(()=>[t("Wi-Fi not turned on as planned")]),_:1})]),e("li",null,[a(n,{to:"#cellular-data-not-turned-on-as-planned"},{default:o(()=>[t("Cellular data not turned on as planned")]),_:1})]),e("li",null,[a(n,{to:"#how-to-get-the-alias-of-my-customization"},{default:o(()=>[t("How to get the alias of my customization")]),_:1})]),e("li",null,[a(n,{to:"#more-faq"},{default:o(()=>[t("More Faq")]),_:1})]),e("li",null,[a(n,{to:"#need-more-help"},{default:o(()=>[t("Need More Help")]),_:1})])])]),g,e("ul",null,[f,e("li",null,[t("In "),_,t(", in the multi-selection mode (long press), you can select "),k,t(" in the menu, and then paste the content to the place where you need to enter."),a(r,{text:"6.7+",type:"tip",vertical:"top"})])]),w,e("ul",null,[e("li",null,[a(i,{to:"/uk-UA/faq/"},{default:o(()=>[t("FAQ")]),_:1})])]),y,e("ul",null,[e("li",null,[a(i,{to:"/uk-UA/about/contactUs.html"},{default:o(()=>[t("Contact Us")]),_:1})])])])}const A=d(u,[["render",b],["__file","schedules.html.vue"]]);export{A as default};
