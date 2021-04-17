(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{455:function(t,a,e){"use strict";e.r(a);var s=e(30),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"通过-startactivity-冻结解冻应用程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过-startactivity-冻结解冻应用程序"}},[t._v("#")]),t._v(" 通过 startActivity 冻结解冻应用程序")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#授权范围"}},[t._v("授权范围")])]),e("li",[e("a",{attrs:{href:"#如何使用"}},[t._v("如何使用")]),e("ul",[e("li",[e("a",{attrs:{href:"#声明权限"}},[t._v("声明权限")])])])]),e("li",[e("a",{attrs:{href:"#sample"}},[t._v("Sample")])]),e("li",[e("a",{attrs:{href:"#faq"}},[t._v("FAQ")]),e("ul",[e("li",[e("a",{attrs:{href:"#activitynotfoundexception"}},[t._v("ActivityNotFoundException")])]),e("li",[e("a",{attrs:{href:"#securityexception"}},[t._v("SecurityException")])])])]),e("li",[e("a",{attrs:{href:"#current-limitation"}},[t._v("Current Limitation")])]),e("li",[e("a",{attrs:{href:"#need-help"}},[t._v("Need Help")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"授权范围"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权范围"}},[t._v("#")]),t._v(" 授权范围")]),t._v(" "),e("ul",[e("li",[t._v("获取已冻结应用列表、进行冻结应用、进行解冻应用。")])]),t._v(" "),e("h2",{attrs:{id:"如何使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),e("h3",{attrs:{id:"声明权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#声明权限"}},[t._v("#")]),t._v(" 声明权限")]),t._v(" "),e("ul",[e("li",[t._v("需要在"),e("code",[t._v("AndroidManifest.xml")]),t._v("中声明权限（按需申请）\n"),e("ul",[e("li",[t._v("获取已冻结应用列表"),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.GET_DISABLED_APPLICATIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("进行解冻应用"),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.ENABLE_APPLICATIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("进行冻结应用"),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cf.playhi.freezeyou.permission.DISABLE_APPLICATIONS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])])])]),t._v(" "),e("h2",{attrs:{id:"sample"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[t._v("#")]),t._v(" Sample")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/Playhi/FreezeYouApiTest",target:"_blank",rel:"noopener noreferrer"}},[t._v("FreezeYouApiTest"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),e("h3",{attrs:{id:"activitynotfoundexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activitynotfoundexception"}},[t._v("#")]),t._v(" ActivityNotFoundException")]),t._v(" "),e("ul",[e("li",[t._v("已安装的是老版本FreezeYou或未安装FreezeYou")])]),t._v(" "),e("h3",{attrs:{id:"securityexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#securityexception"}},[t._v("#")]),t._v(" SecurityException")]),t._v(" "),e("ul",[e("li",[t._v("是否已经在 "),e("strong",[t._v("Manifest")]),t._v(" 中声明了权限呢（"),e("code",[t._v("冻结\\解冻应用")]),t._v("还需要类似请求敏感权限一样进行 "),e("strong",[e("code",[t._v("requestPermissions")])]),t._v(" ）")])]),t._v(" "),e("h2",{attrs:{id:"current-limitation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#current-limitation"}},[t._v("#")]),t._v(" Current Limitation")]),t._v(" "),e("ul",[e("li",[t._v("需要在安装"),e("strong",[t._v("FreezeYou")]),t._v("后再安装或更新（覆盖安装）使用相关权限的应用，否则可能会报 Exception （在 Android Google 的文档中有提及需要在请求前安装）")])]),t._v(" "),e("h2",{attrs:{id:"need-help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#need-help"}},[t._v("#")]),t._v(" Need Help")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://shang.qq.com/wpa/qunwpa?idkey=1b94199f20fa607ca03d33a8b53f37203fbf721e84900a7e20d89ba5a6fd3da5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Join QQ Group(704086494)"),e("OutboundLink")],1)])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=5vmxG1F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Join QQ Group(838379270)"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);