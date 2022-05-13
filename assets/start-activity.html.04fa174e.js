import{_ as c,r as i,o as r,c as u,b as a,d as n,w as s,F as d,e,a as o}from"./app.47b10791.js";const p={},h=a("h1",{id:"\u901A\u8FC7-startactivity-\u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u901A\u8FC7-startactivity-\u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F","aria-hidden":"true"},"#"),e(" \u901A\u8FC7 startActivity \u51BB\u7ED3\u89E3\u51BB\u5E94\u7528\u7A0B\u5E8F")],-1),_={class:"table-of-contents"},m=e("\u6388\u6743\u8303\u56F4"),f=e("\u5982\u4F55\u4F7F\u7528"),x=e("\u58F0\u660E\u6743\u9650"),k=e("Sample"),g=e("FAQ"),v=e("ActivityNotFoundException"),b=e("SecurityException"),y=e("Current Limitation"),A=e("Preciso de ajuda"),q=o(`<h2 id="\u6388\u6743\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743\u8303\u56F4" aria-hidden="true">#</a> \u6388\u6743\u8303\u56F4</h2><ul><li>\u83B7\u53D6\u5DF2\u51BB\u7ED3\u5E94\u7528\u5217\u8868\u3001\u8FDB\u884C\u51BB\u7ED3\u5E94\u7528\u3001\u8FDB\u884C\u89E3\u51BB\u5E94\u7528\u3002</li></ul><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><h3 id="\u58F0\u660E\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u6743\u9650" aria-hidden="true">#</a> \u58F0\u660E\u6743\u9650</h3><ul><li>\u9700\u8981\u5728<code>AndroidManifest.xml</code>\u4E2D\u58F0\u660E\u6743\u9650\uFF08\u6309\u9700\u7533\u8BF7\uFF09 <ul><li>\u83B7\u53D6\u5DF2\u51BB\u7ED3\u5E94\u7528\u5217\u8868<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.GET_DISABLED_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>\u8FDB\u884C\u89E3\u51BB\u5E94\u7528<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>\u8FDB\u884C\u51BB\u7ED3\u5E94\u7528<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li></ul><h2 id="sample" tabindex="-1"><a class="header-anchor" href="#sample" aria-hidden="true">#</a> Sample</h2>`,6),E={href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"},L=e("FreezeYouApiTest"),F=o('<h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="activitynotfoundexception" tabindex="-1"><a class="header-anchor" href="#activitynotfoundexception" aria-hidden="true">#</a> ActivityNotFoundException</h3><ul><li>\u5DF2\u5B89\u88C5\u7684\u662F\u8001\u7248\u672CFreezeYou\u6216\u672A\u5B89\u88C5FreezeYou</li></ul><h3 id="securityexception" tabindex="-1"><a class="header-anchor" href="#securityexception" aria-hidden="true">#</a> SecurityException</h3><ul><li>\u662F\u5426\u5DF2\u7ECF\u5728 <strong>Manifest</strong> \u4E2D\u58F0\u660E\u4E86\u6743\u9650\u5462\uFF08<code>\u51BB\u7ED3\\\u89E3\u51BB\u5E94\u7528</code>\u8FD8\u9700\u8981\u7C7B\u4F3C\u8BF7\u6C42\u654F\u611F\u6743\u9650\u4E00\u6837\u8FDB\u884C <strong><code>requestPermissions</code></strong> \uFF09</li></ul><h2 id="current-limitation" tabindex="-1"><a class="header-anchor" href="#current-limitation" aria-hidden="true">#</a> Current Limitation</h2><ul><li>\u9700\u8981\u5728\u5B89\u88C5<strong>FreezeYou</strong>\u540E\u518D\u5B89\u88C5\u6216\u66F4\u65B0\uFF08\u8986\u76D6\u5B89\u88C5\uFF09\u4F7F\u7528\u76F8\u5173\u6743\u9650\u7684\u5E94\u7528\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u62A5 Exception \uFF08\u5728 Android Google \u7684\u6587\u6863\u4E2D\u6709\u63D0\u53CA\u9700\u8981\u5728\u8BF7\u6C42\u524D\u5B89\u88C5\uFF09</li></ul><h2 id="preciso-de-ajuda" tabindex="-1"><a class="header-anchor" href="#preciso-de-ajuda" aria-hidden="true">#</a> Preciso de ajuda</h2>',8),I=e("Contact Us");function N(P,S){const t=i("RouterLink"),l=i("ExternalLinkIcon");return r(),u(d,null,[h,a("nav",_,[a("ul",null,[a("li",null,[n(t,{to:"#\u6388\u6743\u8303\u56F4"},{default:s(()=>[m]),_:1})]),a("li",null,[n(t,{to:"#\u5982\u4F55\u4F7F\u7528"},{default:s(()=>[f]),_:1}),a("ul",null,[a("li",null,[n(t,{to:"#\u58F0\u660E\u6743\u9650"},{default:s(()=>[x]),_:1})])])]),a("li",null,[n(t,{to:"#sample"},{default:s(()=>[k]),_:1})]),a("li",null,[n(t,{to:"#faq"},{default:s(()=>[g]),_:1}),a("ul",null,[a("li",null,[n(t,{to:"#activitynotfoundexception"},{default:s(()=>[v]),_:1})]),a("li",null,[n(t,{to:"#securityexception"},{default:s(()=>[b]),_:1})])])]),a("li",null,[n(t,{to:"#current-limitation"},{default:s(()=>[y]),_:1})]),a("li",null,[n(t,{to:"#preciso-de-ajuda"},{default:s(()=>[A]),_:1})])])]),q,a("ul",null,[a("li",null,[a("a",E,[L,n(l)])])]),F,a("ul",null,[a("li",null,[n(t,{to:"/pt-BR/about/contactUs.html"},{default:s(()=>[I]),_:1})])])],64)}var C=c(p,[["render",N],["__file","start-activity.html.vue"]]);export{C as default};
