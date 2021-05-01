(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{455:function(t,a,s){"use strict";s.r(a);var e=s(30),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通过-startactivity-冻结解冻应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-startactivity-冻结解冻应用程序"}},[t._v("#")]),t._v(" 通过 startActivity 冻结解冻应用程序")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#授权范围"}},[t._v("授权范围")])]),s("li",[s("a",{attrs:{href:"#如何使用"}},[t._v("如何使用")]),s("ul",[s("li",[s("a",{attrs:{href:"#声明权限"}},[t._v("声明权限")])])])]),s("li",[s("a",{attrs:{href:"#sample"}},[t._v("Sample")])]),s("li",[s("a",{attrs:{href:"#faq"}},[t._v("FAQ")]),s("ul",[s("li",[s("a",{attrs:{href:"#activitynotfoundexception"}},[t._v("ActivityNotFoundException")])]),s("li",[s("a",{attrs:{href:"#securityexception"}},[t._v("SecurityException")])])])]),s("li",[s("a",{attrs:{href:"#current-limitation"}},[t._v("Current Limitation")])]),s("li",[s("a",{attrs:{href:"#need-help"}},[t._v("Need Help")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"授权范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权范围"}},[t._v("#")]),t._v(" 授权范围")]),t._v(" "),s("ul",[s("li",[t._v("获取已冻结应用列表、进行冻结应用、进行解冻应用。")])]),t._v(" "),s("h2",{attrs:{id:"如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),s("h3",{attrs:{id:"声明权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明权限"}},[t._v("#")]),t._v(" 声明权限")]),t._v(" "),s("ul",[s("li",[t._v("需要在"),s("code",[t._v("AndroidManifest.xml")]),t._v("中声明权限（按需申请）\n"),s("ul",[s("li",[t._v("获取已冻结应用列表"),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.GET_DISABLED_APPLICATIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("进行解冻应用"),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("进行冻结应用"),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[t._v("#")]),t._v(" Sample")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("FreezeYouApiTest"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("h3",{attrs:{id:"activitynotfoundexception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activitynotfoundexception"}},[t._v("#")]),t._v(" ActivityNotFoundException")]),t._v(" "),s("ul",[s("li",[t._v("已安装的是老版本FreezeYou或未安装FreezeYou")])]),t._v(" "),s("h3",{attrs:{id:"securityexception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#securityexception"}},[t._v("#")]),t._v(" SecurityException")]),t._v(" "),s("ul",[s("li",[t._v("是否已经在 "),s("strong",[t._v("Manifest")]),t._v(" 中声明了权限呢（"),s("code",[t._v("冻结\\解冻应用")]),t._v("还需要类似请求敏感权限一样进行 "),s("strong",[s("code",[t._v("requestPermissions")])]),t._v(" ）")])]),t._v(" "),s("h2",{attrs:{id:"current-limitation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current-limitation"}},[t._v("#")]),t._v(" Current Limitation")]),t._v(" "),s("ul",[s("li",[t._v("需要在安装"),s("strong",[t._v("FreezeYou")]),t._v("后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）")])]),t._v(" "),s("h2",{attrs:{id:"need-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#need-help"}},[t._v("#")]),t._v(" Need Help")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=l356Aq75",target:"_blank",rel:"noopener noreferrer"}},[t._v("Join QQ Group(704086494)"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=5vmxG1F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Join QQ Group(838379270)"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);