(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1617:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"爬虫的基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#爬虫的基本原理"}},[s._v("#")]),s._v(" 爬虫的基本原理")]),s._v(" "),a("p",[s._v("网页请求的过程分为两个环节：")]),s._v(" "),a("ol",[a("li",[s._v("Request （请求）：每一个展示在用户面前的网页都必须经过这一步，也就是向服务器发送访问请求。")]),s._v(" "),a("li",[s._v("Response（响应）：服务器在接收到用户的请求后，会验证请求的有效性，然后向用户（客户端）发送响应的容，客户端接收服务器响应的内容，将内容展示出来，就是我们所熟悉的网页请求")])]),s._v(" "),a("h3",{attrs:{id:"关于爬虫的合法性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于爬虫的合法性"}},[s._v("#")]),s._v(" 关于爬虫的合法性")]),s._v(" "),a("p",[s._v("​        几乎每一个网站都有一个名为 robots.txt 的文档，当然也有部分网站没有设定 robots.txt。对于没有设定 robots.txt 的网站可以通过网络爬虫获取没有口令加密的数据，也就是该网站所有页面数据都可以爬取。如果网站有 robots.txt 文档，就要判断是否有禁止访客获取的数据。")]),s._v(" "),a("h3",{attrs:{id:"导入requests包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入requests包"}},[s._v("#")]),s._v(" 导入requests包")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"定义url的地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义url的地址"}},[s._v("#")]),s._v(" 定义url的地址")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"定义搜索内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义搜索内容"}},[s._v("#")]),s._v(" 定义搜索内容")]),s._v(" "),a("p",[s._v("​\t\t如果不需要搜索可以选择去掉这部分")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("kw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'疫情'")]),s._v("\nparam "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"伪装请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪装请求头"}},[s._v("#")]),s._v(" 伪装请求头")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"定义储存结果的文件名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义储存结果的文件名"}},[s._v("#")]),s._v(" 定义储存结果的文件名")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'疫情.txt'")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"发起请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发起请求"}},[s._v("#")]),s._v(" 发起请求")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("response "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" params"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("param"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"获取请求结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取请求结果"}},[s._v("#")]),s._v(" 获取请求结果")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),s._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"存储文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储文件"}},[s._v("#")]),s._v(" 存储文件")]),s._v(" "),a("p",[s._v("​\t\t在存储文件之前可以先进行数据清洗以便后续的使用")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" tem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    tem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"也可以使用beautifulsoup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#也可以使用beautifulsoup"}},[s._v("#")]),s._v(" 也可以使用BeautifulSoup")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入requests包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" bs4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v("    BeautifulSoup\nurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'填入网址'")]),s._v("\nstrhtml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsoup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("strhtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lxml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下面的路径为想要抓取的标签地址根据需要进行修改")]),s._v("\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#arc-body > div:nth-child(110) > img"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"清洗数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清洗数据"}},[s._v("#")]),s._v(" 清洗数据")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    result"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'href'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"绘制饼图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制饼图"}},[s._v("#")]),s._v(" 绘制饼图")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("fig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("figure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmatplotlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rcParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'font.sans-serif'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SimHei'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" labels"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("a_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" explode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" autopct"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%1.2f%%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 画饼图（数据，数据对应的标签，百分数保留两位小数点）")]),s._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("savefig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rumors/templates/饼图2.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#存储饼图")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"擦除画布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#擦除画布"}},[s._v("#")]),s._v(" 擦除画布")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"绘制柱状图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制柱状图"}},[s._v("#")]),s._v(" 绘制柱状图")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("savefig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rumors/templates/柱状图2.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#存储柱状图")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"绘制词云"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制词云"}},[s._v("#")]),s._v(" 绘制词云")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取文本")]),s._v("\npythonInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test2.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ignore'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(pythonInfo)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切割")]),s._v("\npythonCut "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jieba"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pythonInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cut_all"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npythonInfoList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pythonCut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回一个生成器对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(pythonInfoList)")]),s._v("\nbackgroud "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'上海.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将图片格式化成RBG数组")]),s._v("\nmyCloudword "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wordcloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WordCloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("font_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'simkai.ttf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字体路径")]),s._v("\n                                  width"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                  mask"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("backgroud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 字体颜色")]),s._v("\n                                  scale"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比例")]),s._v("\n                                  max_words"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大字数")]),s._v("\n                                  min_font_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最小字体")]),s._v("\n                                  stopwords"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("STOPWORDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认停止词")]),s._v("\n                                  random_state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机角度")]),s._v("\n                                  background_color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'black'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 背景颜色")]),s._v("\n                                  max_font_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大字体")]),s._v("\n                                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("generate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pythonInfoList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("myCloudword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmyCloudword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rumors/templates/词云图片2.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);