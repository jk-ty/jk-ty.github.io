(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1616:function(s,t,n){"use strict";n.r(t);var a=n(6),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("python接口测试")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# ret=requests.get("http://api.linjiashop.com/goods/searchHot")  #发送get请求 没有参数')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.text) # 以文本的形式返回响应体内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.json()）#以json格式返回响应体内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.json()['code']) #通过json方式以字典形式提取数据")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.json()['msg'])")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.json()['data'][0]['id'])")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.status_code) #返回的HTTP状态码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# try:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     assert ret.status_code==200 #断言HTTP响应状态码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     assert ret.json()['code']==20000 #断言返回数据状态码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     assert ret.json()['msg']=='成功' #断言返回的状态信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#     print("用例执行正确!")')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# except:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#     print("用例执行错误!")')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# kws=["红米","红米8","","黑米"] #参数化')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# assert_lens=[2,1,2,0] #断言参数化")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# assert_texts=[\'红米\',"红米8","",""] #断言参数化')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for n in range(len(kws)): #循环进行参数化和断言")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     param={'key':kws[n],'page':1,\"limit\":2}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#     # ret=requests.get("http://api.linjiashop.com/goods/search?key="+kws[n]+"&page=1&limit=2")')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#     ret = requests.get("http://api.linjiashop.com/goods/search",params=param)')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     print(ret.json())")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     try:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         assert ret.status_code==200")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         assert ret.json()['code']==20000")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         assert ret.json()['msg']=='成功'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         assert len(ret.json()['data']['records'])==assert_lens[n] #断言返回数据的个数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         for i in range(len(ret.json()['data']['records'])):")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#             assert assert_texts[n] in ret.json()['data']['records'][i]['name']")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#         print("用例"+str(n+1)+"执行正确!")')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     except AssertionError as e: #捕获断言异常")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         import traceback")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         print(traceback.format_exc()) #打印断言异常")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#         print("用例"+str(n+1)+"执行错误!",e)')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# datas={"mobile":"13000000001"} #表单参数数据')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# ret=requests.post("http://api.linjiashop.com/sendSmsCode",data=datas) #用post表单方式提交请求')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.json())")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.status_code)")]),s._v("\n\ndatas"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mobile"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"13000000001"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smsCode'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2821")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nret"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://api.linjiashop.com/loginOrReg"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("datas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.json())")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.status_code)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(ret.json()['data']['token']) #提取返回数据的token")]),s._v("\n\n\nheaders"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Authorization'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'token'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以字典形式设置请求头信息 并进行了数据关联")]),s._v("\njson_data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idGoods"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"idSku"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'count'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nret"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://api.linjiashop.com/user/cart/add"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用post方式json提交请求并传递请求头信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取请求相关信息，请求头信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取响应头信息")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);