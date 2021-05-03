(self.webpackChunk=self.webpackChunk||[]).push([[522],{3522:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>xe});var l=a(6252),n=a(9963),r=a(2262),o=a(2119),i=a(7621),s=a(3577);const u={class:"hero"},c={key:1,id:"main-title"},d={key:2,class:"description"},v={key:3,class:"actions"},m={key:0,class:"features"},p={class:"theme-default-content custom"};var g=a(480);const h=(0,l.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=(0,o.yj)(),a=(0,i.WF)(),{item:n}=(0,r.BK)(e),s=(0,l.Fl)((()=>(0,g.ak)(n.value.link))),u=(0,l.Fl)((()=>(0,g.B2)(n.value.link)||(0,g.R5)(n.value.link))),c=(0,l.Fl)((()=>{if(!u.value)return n.value.target?n.value.target:s.value?"_blank":void 0})),d=(0,l.Fl)((()=>"_blank"===c.value)),v=(0,l.Fl)((()=>!s.value&&!u.value&&!d.value)),m=(0,l.Fl)((()=>{if(!u.value)return n.value.rel?n.value.rel:d.value?"noopener noreferrer":void 0})),p=(0,l.Fl)((()=>n.value.ariaLabel||n.value.text)),h=(0,l.Fl)((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link}));return{isActiveInSubpath:(0,l.Fl)((()=>!(!v.value||!h.value)&&t.path.startsWith(n.value.link))),isBlankTarget:d,isRouterLink:v,linkRel:m,linkTarget:c,linkAriaLabel:p}}});h.render=function(e,t,a,n,r,o){const i=(0,l.up)("RouterLink"),u=(0,l.up)("OutboundLink");return e.isRouterLink?((0,l.wg)(),(0,l.j4)(i,(0,l.dG)({key:0,class:["nav-link",{"router-link-active":e.isActiveInSubpath}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"before"),(0,l.Uk)(" "+(0,s.zw)(e.item.text)+" ",1),(0,l.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,l.wg)(),(0,l.j4)("a",(0,l.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,l.WI)(e.$slots,"before"),(0,l.Uk)(" "+(0,s.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,l.wg)(),(0,l.j4)(u,{key:0})):(0,l.ry)("",!0),(0,l.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))};const b=h,k=(0,l.aZ)({name:"Home",components:{NavLink:b},setup(){const e=(0,i.I2)(),t=(0,i.I5)(),a=(0,l.Fl)((()=>e.value.heroImage?(0,i.pJ)(e.value.heroImage):null)),n=(0,l.Fl)((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),r=(0,l.Fl)((()=>e.value.heroAlt||n.value||"hero")),o=(0,l.Fl)((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),s=(0,l.Fl)((()=>(0,g.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:t,type:a="primary"})=>({text:e,link:t,type:a}))):[])),u=(0,l.Fl)((()=>(0,g.kJ)(e.value.features)?e.value.features:[])),c=(0,l.Fl)((()=>e.value.footer)),d=(0,l.Fl)((()=>e.value.footerHtml));return{heroImage:a,heroAlt:r,heroText:n,tagline:o,actions:s,features:u,footer:c,footerHtml:d}}});k.render=function(e,t,a,n,r,o){const i=(0,l.up)("NavLink"),g=(0,l.up)("Content");return(0,l.wg)(),(0,l.j4)("main",{class:"home","aria-labelledby":e.heroText?"main-title":null},[(0,l.Wm)("header",u,[e.heroImage?((0,l.wg)(),(0,l.j4)("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,["src","alt"])):(0,l.ry)("",!0),e.heroText?((0,l.wg)(),(0,l.j4)("h1",c,(0,s.zw)(e.heroText),1)):(0,l.ry)("",!0),e.tagline?((0,l.wg)(),(0,l.j4)("p",d,(0,s.zw)(e.tagline),1)):(0,l.ry)("",!0),e.actions.length?((0,l.wg)(),(0,l.j4)("p",v,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.actions,(e=>((0,l.wg)(),(0,l.j4)(i,{key:e.text,class:["action-button",[e.type]],item:e},null,8,["class","item"])))),128))])):(0,l.ry)("",!0)]),e.features.length?((0,l.wg)(),(0,l.j4)("div",m,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.features,(e=>((0,l.wg)(),(0,l.j4)("div",{key:e.title,class:"feature"},[(0,l.Wm)("h2",null,(0,s.zw)(e.title),1),(0,l.Wm)("p",null,(0,s.zw)(e.details),1)])))),128))])):(0,l.ry)("",!0),(0,l.Wm)("div",p,[(0,l.Wm)(g)]),e.footer?((0,l.wg)(),(0,l.j4)(l.HY,{key:1},[e.footerHtml?((0,l.wg)(),(0,l.j4)("div",{key:0,class:"footer",innerHTML:e.footer},null,8,["innerHTML"])):((0,l.wg)(),(0,l.j4)("div",{key:1,class:"footer",textContent:(0,s.zw)(e.footer)},null,8,["textContent"]))],64)):(0,l.ry)("",!0)],8,["aria-labelledby"])};const w=k,f={class:"page"},y={class:"theme-default-content"},L={class:"page-meta"},W={key:0,class:"meta-item edit-link"},j={key:1,class:"meta-item last-updated"},F={class:"meta-item-label"},x={class:"meta-item-info"},I={key:2,class:"meta-item contributors"},N={class:"meta-item-label"},T={class:"meta-item-info"},B=(0,l.Uk)(", ");var H=a(7319);const $=e=>(0,g.ak)(e)?/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":null:"GitHub",S={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},C=()=>{const e=(0,H.X6)(),t=(0,i.Vi)(),a=(0,i.I2)();return(0,l.Fl)((()=>{var l,n;if(null!=(n=null!=(l=a.value.editLink)?l:e.value.editLink)&&!n)return null;const{repo:r,docsRepo:o=r,docsBranch:i="main",docsDir:s="",editLinkText:u}=e.value;if(!o)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:l,editLinkPattern:n})=>{const r=$(e);let o;return n?o=n:null!==r&&(o=S[r]),o?o.replace(/:repo/,"GitHub"===r?`https://github.com/${e}`:e).replace(/:branch/,t).replace(/:path/,(0,g.FY)(`${(0,g.U1)(a)}/${l}`)):null})({docsRepo:o,docsBranch:i,docsDir:s,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))},P=(0,l.aZ)({name:"PageMeta",components:{NavLink:b},setup:()=>({themeLocale:(0,H.X6)(),editNavLink:C(),lastUpdated:(()=>{const e=(0,i.I5)(),t=(0,H.X6)(),a=(0,i.Vi)(),n=(0,i.I2)();return(0,l.Fl)((()=>{var l,r,o,i;return(null==(r=null!=(l=n.value.lastUpdated)?l:t.value.lastUpdated)||r)&&(null==(o=a.value.git)?void 0:o.updatedTime)?new Date(null==(i=a.value.git)?void 0:i.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=(0,H.X6)(),t=(0,i.Vi)(),a=(0,i.I2)();return(0,l.Fl)((()=>{var l,n,r,o;return null!=(n=null!=(l=a.value.contributors)?l:e.value.contributors)&&!n||null==(o=null==(r=t.value.git)?void 0:r.contributors)?null:o}))})()})});P.render=function(e,t,a,n,r,o){const i=(0,l.up)("NavLink");return(0,l.wg)(),(0,l.j4)("footer",L,[e.editNavLink?((0,l.wg)(),(0,l.j4)("div",W,[(0,l.Wm)(i,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):(0,l.ry)("",!0),e.lastUpdated?((0,l.wg)(),(0,l.j4)("div",j,[(0,l.Wm)("span",F,(0,s.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,l.Wm)("span",x,(0,s.zw)(e.lastUpdated),1)])):(0,l.ry)("",!0),e.contributors&&e.contributors.length?((0,l.wg)(),(0,l.j4)("div",I,[(0,l.Wm)("span",N,(0,s.zw)(e.themeLocale.contributorsText)+": ",1),(0,l.Wm)("span",T,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.contributors,((t,a)=>((0,l.wg)(),(0,l.j4)(l.HY,{key:a},[(0,l.Wm)("span",{class:"contributor",title:`email: ${t.email}`},(0,s.zw)(t.name),9,["title"]),a!==e.contributors.length-1?((0,l.wg)(),(0,l.j4)(l.HY,{key:0},[B],64)):(0,l.ry)("",!0)],64)))),128))])])):(0,l.ry)("",!0)])};const z=P,A={key:0,class:"page-nav"},R={class:"inner"},U={key:0,class:"prev"},Y=(0,l.Uk)(" ← "),D={key:1,class:"next"},O=(0,l.Uk)(" → "),X=e=>!1===e?null:(0,g.HD)(e)?(0,H.sC)(e):!!(0,g.PO)(e)&&e,Z=(e,t,a)=>{const l=e.findIndex((e=>e.link===t));if(-1!==l){const t=e[l+a];return(null==t?void 0:t.link)?t:null}for(const l of e)if(l.children){const e=Z(l.children,t,a);if(e)return e}return null},E=(0,l.aZ)({name:"PageNav",components:{NavLink:b},setup(){const e=(0,i.I2)(),t=(0,H.VU)(),a=(0,o.yj)();return{prevNavLink:(0,l.Fl)((()=>{const l=X(e.value.prev);return!1!==l?l:Z(t.value,a.path,-1)})),nextNavLink:(0,l.Fl)((()=>{const l=X(e.value.next);return!1!==l?l:Z(t.value,a.path,1)}))}}});E.render=function(e,t,a,n,r,o){const i=(0,l.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,l.wg)(),(0,l.j4)("nav",A,[(0,l.Wm)("p",R,[e.prevNavLink?((0,l.wg)(),(0,l.j4)("span",U,[Y,(0,l.Wm)(i,{item:e.prevNavLink},null,8,["item"])])):(0,l.ry)("",!0),e.nextNavLink?((0,l.wg)(),(0,l.j4)("span",D,[(0,l.Wm)(i,{item:e.nextNavLink},null,8,["item"]),O])):(0,l.ry)("",!0)])])):(0,l.ry)("",!0)};const V=E,G=(0,l.aZ)({name:"Page",components:{PageMeta:z,PageNav:V}});G.render=function(e,t,a,n,r,o){const i=(0,l.up)("Content"),s=(0,l.up)("PageMeta"),u=(0,l.up)("PageNav");return(0,l.wg)(),(0,l.j4)("main",f,[(0,l.WI)(e.$slots,"top"),(0,l.Wm)("div",y,[(0,l.Wm)(i)]),(0,l.Wm)(s),(0,l.Wm)(u),(0,l.WI)(e.$slots,"bottom")])};const K=G,M={ref:"navbar",class:"navbar"},_={ref:"siteBrand"},q={key:0,class:"navbar-links"},J={class:"title"},Q=(0,l.Wm)("span",{class:"arrow down"},null,-1),ee={class:"title"},te={class:"nav-dropdown"},ae={class:"dropdown-subtitle"},le={key:1},ne={class:"dropdown-subitem-wrapper"},re=(0,l.aZ)({name:"DropdownLink",components:{NavLink:b},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,r.BK)(e),a=(0,l.Fl)((()=>t.value.ariaLabel||t.value.text)),n=(0,r.iH)(!1),i=(0,o.yj)();return(0,l.YP)((()=>i.path),(()=>{n.value=!1})),{open:n,dropdownAriaLabel:a,handleDropdown:e=>{const t=0===e.detail;n.value=!!t&&!n.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});re.render=function(e,t,a,r,o,i){const u=(0,l.up)("NavLink");return(0,l.wg)(),(0,l.j4)("div",{class:["dropdown-wrapper",{open:e.open}]},[(0,l.Wm)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,l.Wm)("span",J,(0,s.zw)(e.item.text),1),Q],8,["aria-label"]),(0,l.Wm)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[2]||(t[2]=t=>e.open=!e.open)},[(0,l.Wm)("span",ee,(0,s.zw)(e.item.text),1),(0,l.Wm)("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),(0,l.wy)((0,l.Wm)("ul",te,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.item.children,((t,a)=>((0,l.wg)(),(0,l.j4)("li",{key:t.link||a,class:"dropdown-item"},[t.children?((0,l.wg)(),(0,l.j4)(l.HY,{key:0},[(0,l.Wm)("h4",ae,[t.link?((0,l.wg)(),(0,l.j4)(u,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,l.wg)(),(0,l.j4)("span",le,(0,s.zw)(t.text),1))]),(0,l.Wm)("ul",ne,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(t.children,(a=>((0,l.wg)(),(0,l.j4)("li",{key:a.link,class:"dropdown-subitem"},[(0,l.Wm)(u,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,l.wg)(),(0,l.j4)(u,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[n.F8,e.open]])],2)};const oe=re,ie=e=>(0,g.HD)(e)?(0,H.sC)(e):e.children?{...e,children:e.children.map(ie)}:e,se=(0,l.aZ)({name:"NavbarLinks",components:{NavLink:b,DropdownLink:oe},setup(){const e=(()=>{const e=(0,H.X6)();return(0,l.Fl)((()=>(e.value.navbar||[]).map(ie)))})(),t=(()=>{const e=(0,o.tv)(),t=(0,i.I)(),a=(0,i.I5)(),n=(0,H.X6)();return(0,l.Fl)((()=>{var l,r;const o=Object.keys(a.value.locales);if(o.length<2)return[];const i=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(l=n.value.selectLanguageText)?l:"unkown language",ariaLabel:null!=(r=n.value.selectLanguageAriaLabel)?r:"unkown language",children:o.map((l=>{var r,o,u,c,d,v;const m=null!=(o=null==(r=a.value.locales)?void 0:r[l])?o:{},p=null!=(c=null==(u=n.value.locales)?void 0:u[l])?c:{},g=`${m.lang}`,h=null!=(d=p.selectLanguageName)?d:g;let b;if(g===a.value.lang)b=s;else{const a=i.replace(t.value,l);b=e.getRoutes().some((e=>e.path===a))?a:null!=(v=p.home)?v:l}return{text:h,link:b}}))}]}))})(),a=(()=>{const e=(0,H.X6)(),t=(0,l.Fl)((()=>e.value.repo)),a=(0,l.Fl)((()=>t.value?$(t.value):null)),n=(0,l.Fl)((()=>"GitHub"===a.value?`https://github.com/${t.value}`:t.value)),r=(0,l.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,l.Fl)((()=>n.value&&r.value?[{text:r.value,link:n.value}]:[]))})();return{navbarLinks:(0,l.Fl)((()=>[...e.value,...t.value,...a.value]))}}});se.render=function(e,t,a,n,r,o){const i=(0,l.up)("DropdownLink"),s=(0,l.up)("NavLink");return e.navbarLinks.length?((0,l.wg)(),(0,l.j4)("nav",q,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.navbarLinks,(e=>((0,l.wg)(),(0,l.j4)("div",{key:e.link,class:"navbar-links-item"},[e.children?((0,l.wg)(),(0,l.j4)(i,{key:0,item:e},null,8,["item"])):((0,l.wg)(),(0,l.j4)(s,{key:1,item:e},null,8,["item"]))])))),128))])):(0,l.ry)("",!0)};const ue=se,ce=(0,l.Wm)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[(0,l.Wm)("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),de=(0,l.aZ)({name:"ToggleSidebarButton",emits:["toggle"]});de.render=function(e,t,a,n,r,o){return(0,l.wg)(),(0,l.j4)("div",{class:"toggle-sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[ce])};const ve=de,me=(0,l.aZ)({name:"Navbar",components:{NavbarLinks:ue,ToggleSidebarButton:ve},emits:["toggle-sidebar"],setup(){const e=(0,i.I)(),t=(0,i.I5)(),a=(0,H.X6)(),n=(0,r.iH)(null),o=(0,r.iH)(null),s=(0,l.Fl)((()=>a.value.home||e.value)),u=(0,l.Fl)((()=>a.value.logo)),c=(0,l.Fl)((()=>t.value.title)),d=(0,r.iH)(0),v=(0,l.Fl)((()=>d.value?{maxWidth:d.value+"px"}:{}));return(0,l.bv)((()=>{const e=pe(n.value,"paddingLeft")+pe(n.value,"paddingRight"),t=()=>{var t;window.innerWidth<719?d.value=0:d.value=n.value.offsetWidth-e-((null==(t=o.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1)})),{navbar:n,siteBrand:o,siteBrandLink:s,siteBrandLogo:u,siteBrandTitle:c,linksWrapperStyle:v,withBase:i.pJ}}});function pe(e,t){var a,l,n;const r=null==(n=null==(l=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:l.getComputedStyle(e,null))?void 0:n[t],o=Number.parseInt(r,10);return Number.isNaN(o)?0:o}me.render=function(e,t,a,n,r,o){const i=(0,l.up)("ToggleSidebarButton"),u=(0,l.up)("RouterLink"),c=(0,l.up)("NavbarLinks"),d=(0,l.up)("NavbarSearch");return(0,l.wg)(),(0,l.j4)("header",M,[(0,l.Wm)(i,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),(0,l.Wm)("span",_,[(0,l.Wm)(u,{to:e.siteBrandLink},{default:(0,l.w5)((()=>[e.siteBrandLogo?((0,l.wg)(),(0,l.j4)("img",{key:0,class:"logo",src:e.withBase(e.siteBrandLogo),alt:e.siteBrandTitle},null,8,["src","alt"])):(0,l.ry)("",!0),e.siteBrandTitle?((0,l.wg)(),(0,l.j4)("span",{key:1,class:["site-name",{"can-hide":e.siteBrandLogo}]},(0,s.zw)(e.siteBrandTitle),3)):(0,l.ry)("",!0)])),_:1},8,["to"])],512),(0,l.Wm)("div",{class:"navbar-links-wrapper",style:e.linksWrapperStyle},[(0,l.WI)(e.$slots,"before"),(0,l.Wm)(c,{class:"can-hide"}),(0,l.WI)(e.$slots,"after"),(0,l.Wm)(d)],4)],512)};const ge=me,he={class:"sidebar"},be={class:"sidebar-links"},ke=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),we=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||ke(e.path)===ke(t)))(e,t.link)||!!t.children&&t.children.some((t=>we(e,t))),fe=(e,t)=>e.link?(0,l.h)(b,{...t,item:e}):(0,l.h)("p",t,e.text),ye=(e,t)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?(0,l.h)("ul",{class:{"sidebar-sub-headers":t>0}},e.children.map((e=>(0,l.h)("li",(0,l.h)(Le,{item:e,depth:t+1}))))):null},Le=({item:e,depth:t=0})=>{const a=(0,o.yj)(),n=we(a,e);return e.isGroup?[(0,l.h)("section",{class:"sidebar-group"},[fe(e,{class:{"sidebar-heading":!0,active:n}}),ye(e,t)])]:[fe(e,{class:{"sidebar-link":!0,active:n}}),ye(e,t)]};Le.displayName="SidebarChild",Le.props={item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}};const We=(0,l.aZ)({name:"Sidebar",components:{NavbarLinks:ue,SidebarChild:Le},setup:()=>({sidebarItems:(0,H.VU)()})});We.render=function(e,t,a,n,r,o){const i=(0,l.up)("NavbarLinks"),s=(0,l.up)("SidebarChild");return(0,l.wg)(),(0,l.j4)("aside",he,[(0,l.Wm)(i),(0,l.WI)(e.$slots,"top"),(0,l.Wm)("ul",be,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.sidebarItems,(e=>((0,l.wg)(),(0,l.j4)(s,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,l.WI)(e.$slots,"bottom")])};const je=We,Fe=(0,l.aZ)({name:"Layout",components:{Home:w,Page:K,Navbar:ge,Sidebar:je,Transition:n.uT},setup(){const e=(0,i.Vi)(),t=(0,i.I2)(),a=(0,H.X6)(),n=(0,l.Fl)((()=>!1!==t.value.navbar&&!1!==a.value.navbar)),s=(0,H.VU)(),u=(0,r.iH)(!1),c=e=>{u.value="boolean"==typeof e?e:!u.value},d={x:0,y:0},v=(0,l.Fl)((()=>[{"no-navbar":!n.value,"no-sidebar":!s.value.length,"sidebar-open":u.value},t.value.pageClass]));let m;(0,l.bv)((()=>{const e=(0,o.tv)();m=e.afterEach((()=>{c(!1)}))})),(0,l.Ah)((()=>{m()}));const p=(0,H.P$)(),g=p.resolve,h=p.pending;return{frontmatter:t,page:e,containerClass:v,shouldShowNavbar:n,toggleSidebar:c,onTouchStart:e=>{d.x=e.changedTouches[0].clientX,d.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-d.x,a=e.changedTouches[0].clientY-d.y;Math.abs(t)>Math.abs(a)&&Math.abs(t)>40&&(t>0&&d.x<=80?c(!0):c(!1))},onBeforeEnter:g,onBeforeLeave:h}}});Fe.render=function(e,t,a,r,o,i){const s=(0,l.up)("Navbar"),u=(0,l.up)("Sidebar"),c=(0,l.up)("Home"),d=(0,l.up)("Page");return(0,l.wg)(),(0,l.j4)("div",{class:["theme-container",e.containerClass],onTouchstart:t[2]||(t[2]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?((0,l.wg)(),(0,l.j4)(s,{key:0,onToggleSidebar:e.toggleSidebar},{before:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"navbar-before")])),after:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"navbar-after")])),_:1},8,["onToggleSidebar"])):(0,l.ry)("",!0),(0,l.Wm)("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=t=>e.toggleSidebar(!1))}),(0,l.Wm)(u,null,{top:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"sidebar-top")])),bottom:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"sidebar-bottom")])),_:1}),e.frontmatter.home?((0,l.wg)(),(0,l.j4)(c,{key:1})):((0,l.wg)(),(0,l.j4)(n.uT,{key:2,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{key:e.page.path},{top:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"page-top")])),bottom:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"page-bottom")])),_:1})])),_:1},8,["onBeforeEnter","onBeforeLeave"]))],34)};const xe=Fe}}]);