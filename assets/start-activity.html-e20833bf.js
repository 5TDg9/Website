import{_ as r,r as i,o as u,c as d,b as a,e as n,w as t,d as e,a as l}from"./app-a02312fa.js";const p={},h=a("h1",{id:"通过-startactivity-冻结解冻应用程序",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#通过-startactivity-冻结解冻应用程序","aria-hidden":"true"},"#"),e(" 通过 startActivity 冻结解冻应用程序")],-1),m={class:"table-of-contents"},_=l(`<h2 id="授权范围" tabindex="-1"><a class="header-anchor" href="#授权范围" aria-hidden="true">#</a> 授权范围</h2><ul><li>获取已冻结应用列表、进行冻结应用、进行解冻应用。</li></ul><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><h3 id="声明权限" tabindex="-1"><a class="header-anchor" href="#声明权限" aria-hidden="true">#</a> 声明权限</h3><ul><li>需要在<code>AndroidManifest.xml</code>中声明权限（按需申请） <ul><li>获取已冻结应用列表<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.GET_DISABLED_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>进行解冻应用<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>进行冻结应用<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="примеры" tabindex="-1"><a class="header-anchor" href="#примеры" aria-hidden="true">#</a> Примеры</h2>`,6),f={href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"},x=l('<h2 id="чаво" tabindex="-1"><a class="header-anchor" href="#чаво" aria-hidden="true">#</a> ЧАВО</h2><h3 id="activitynotfoundexception" tabindex="-1"><a class="header-anchor" href="#activitynotfoundexception" aria-hidden="true">#</a> ActivityNotFoundException</h3><ul><li>已安装的是老版本FreezeYou或未安装FreezeYou</li></ul><h3 id="securityexception" tabindex="-1"><a class="header-anchor" href="#securityexception" aria-hidden="true">#</a> SecurityException</h3><ul><li>是否已经在 <strong>Manifest</strong> 中声明了权限呢（<code>冻结\\解冻应用</code>还需要类似请求敏感权限一样进行 <strong><code>requestPermissions</code></strong> ）</li></ul><h2 id="текущие-ограничения" tabindex="-1"><a class="header-anchor" href="#текущие-ограничения" aria-hidden="true">#</a> Текущие ограничения</h2><ul><li>需要在安装<strong>FreezeYou</strong>后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）</li></ul><h2 id="нужна-помощь" tabindex="-1"><a class="header-anchor" href="#нужна-помощь" aria-hidden="true">#</a> Нужна помощь?</h2>',8);function k(v,g){const s=i("router-link"),o=i("ExternalLinkIcon"),c=i("RouterLink");return u(),d("div",null,[h,a("nav",m,[a("ul",null,[a("li",null,[n(s,{to:"#授权范围"},{default:t(()=>[e("授权范围")]),_:1})]),a("li",null,[n(s,{to:"#如何使用"},{default:t(()=>[e("如何使用")]),_:1}),a("ul",null,[a("li",null,[n(s,{to:"#声明权限"},{default:t(()=>[e("声明权限")]),_:1})])])]),a("li",null,[n(s,{to:"#примеры"},{default:t(()=>[e("Примеры")]),_:1})]),a("li",null,[n(s,{to:"#чаво"},{default:t(()=>[e("ЧАВО")]),_:1}),a("ul",null,[a("li",null,[n(s,{to:"#activitynotfoundexception"},{default:t(()=>[e("ActivityNotFoundException")]),_:1})]),a("li",null,[n(s,{to:"#securityexception"},{default:t(()=>[e("SecurityException")]),_:1})])])]),a("li",null,[n(s,{to:"#текущие-ограничения"},{default:t(()=>[e("Текущие ограничения")]),_:1})]),a("li",null,[n(s,{to:"#нужна-помощь"},{default:t(()=>[e("Нужна помощь?")]),_:1})])])]),_,a("ul",null,[a("li",null,[a("a",f,[e("FreezeYouApiTest"),n(o)])])]),x,a("ul",null,[a("li",null,[n(c,{to:"/ru-UA/about/contactUs.html"},{default:t(()=>[e("Связаться с нами")]),_:1})])])])}const y=r(p,[["render",k],["__file","start-activity.html.vue"]]);export{y as default};
