(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1618:function(s,n,e){"use strict";e.r(n);var a=e(6),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("title: 'python自动化'\ndate: 2022-07-02 10:35:07")]),s._v(" "),e("p",[s._v("tags:")]),s._v(" "),e("ul",[e("li",[s._v("'python自动化'\ncategories:")]),s._v(" "),e("li",[s._v("'python'")])]),s._v(" "),e("h1",{attrs:{id:"python自动化-selenium"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python自动化-selenium"}},[s._v("#")]),s._v(" python自动化 （selenium）")]),s._v(" "),e("h2",{attrs:{id:"_1、浏览器操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、浏览器操作"}},[s._v("#")]),s._v(" 1、浏览器操作")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#在打开谷歌浏览器\ndriver = webdriver.Chrome(r"C:\\Users\\Y\\Desktop\\test_auto\\chromedriver.exe")\n\n#打开百度页面\ndriver.get("https://www.baidu.com")\n\n# 休眠2秒\ntime.sleep(2)\n\n#打开博客\ndriver.get("http://www.ydlyy.fun/")\n\n#点浏览器左箭头键，返回上页\ndriver.back()\n\n# 点浏览器右箭头，切换下一页\ndriver.forward()\n\n#刷新浏览器\ndriver.refresh()\n\n #打开新窗口\ndriver.execute_script("window.open(\'https://www.qq.com\')")\n\n# 关闭当前窗口\n# driver.close()\n\n# 关闭浏览器，清空临时文件\n# driver.quit()\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## 2、元素定位\n\n### 2.1、基本定位方式(以百度为例)\n\n#### 1.通过id定位(id属性)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过id定位元素send_keys()是向输入框中输入内容")]),s._v("\ndriver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("By"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kw"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_keys"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"山无陵，江水为竭，冬雷震震，夏雨雪！"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过id点击元素click()是点击定位到的元素")]),s._v("\ndriver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("By"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"su"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("click"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("2.通过name定位（name属性）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('driver.find_element(By.NAME,"wd").send_keys("旧客听雨")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("3.通过class定位(class属性)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('driver.find_element(By.CLASS_NAME,"s_ipt").send_keys("旧客听雨")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("4.通过tag定位(通过标签来定位)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('driver.find_elements(By.TAG_NAME,"input")[7].send_keys("山无陵，江水为竭，冬雷震震，夏雨雪，天地\n合，乃敢与君绝！")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("5.通过link定位（通过链接）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('driver.find_element(By.LINK_TEXT,"hao123").click()\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("6.通过partial link定位\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('driver.find_element(By.PARTIAL_LINK_TEXT,"hao").click()\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#### 7.通过XPath定位\n\nXPath 是一种在XML 文档中定位元素的语言\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("driver.find_element_by_xpath(\"//input[@id='kw']\").send_keys(\"123\")\n//表示当前页面某个目录下，\ninput 表示定位元素的标签名，\n[@id=‘kw’] 表示这个元素的id 属性值等于kw；\n如果不想指定标签名也可以用星号（*）代替，\n.表示当前节点。\n\n//ul/*：ul的所有子元素\n//input[2]：第2个input元素\n//input[last()]：最后一个input元素\n//div[@class='']: 有class属性的div元素\n//span[text()='XX']: 文本是XX的span元素\n//div[contains(@class,'')]：包含class属性的div元素\n\ndriver.find_element(By.XPATH,\"//div/a[@target='_blank']\").send_keys(\"山无陵，江水为竭！\")\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h4",{attrs:{id:"_8-通过css定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-通过css定位"}},[s._v("#")]),s._v(" 8.通过css定位")]),s._v(" "),e("p",[s._v("CSS是一种语言，它被用来描述HTML 和XML 文档的表现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('通过css标签定位\n\ndriver.find_element(By.CSS_SELECTOR,"#su").click()\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"_2-2、操作对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、操作对象"}},[s._v("#")]),s._v(" 2.2、操作对象")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#### 1.clear()清空输入框\n\n#### 2.send_keys()输入文本信息\n\n#### 3.click()模拟单击鼠标\n\n#### 4.submit()模拟回车操作\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"_2-3、鼠标事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、鼠标事件"}},[s._v("#")]),s._v(" 2.3、鼠标事件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('from selenium.webdriver.common.action_chains  import  ActionChains \n\ncontext_click()右击 \ndouble_click() 双击 \nmove_to_element() 鼠标悬停\n\n#鼠标悬停\nActionChains(driver).move_to_element(driver.find_element(By.CSS_SELECTOR,"button[title=\'\n加入会员A\']")).perform()\n#鼠标双击\nActionChains(driver).double_click(driver.find_element(By.ID,"telA")).perform() \n#鼠标右击\nActionChains(driver).context_click(driver.find_element(By.ID,"telA")).perform() \n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"_2-4键盘事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4键盘事件"}},[s._v("#")]),s._v(" 2.4键盘事件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("from selenium.webdriver.common.keys import Keys\nsend_keys(Keys.BACK_SPACE) 删除键（BackSpace）\nsend_keys(Keys.SPACE) 空格键(Space)\nsend_keys(Keys.TAB) 制表键(Tab)\nsend_keys(Keys.ESCAPE) 回退键（Esc）\nsend_keys(Keys.ENTER) 回车键（Enter）\nsend_keys(Keys.CONTROL,'a') 全选（Ctrl+A）\nsend_keys(Keys.CONTROL,'c') 复制（Ctrl+C）\nsend_keys(Keys.CONTROL,'x') 剪切（Ctrl+X）\nsend_keys(Keys.CONTROL,'v') 粘贴（Ctrl+V）\nsend_keys(Keys.F1) 键盘F1\n……\nSend_keys(Keys.F5)键盘F5\n…\nsend_keys(Keys.F12) 键盘F12\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('from selenium import webdriver\n# 导入Keys 模块\nfrom selenium.webdriver.common.keys import Keys\ndriver = webdriver.Firefox()\ndriver.get("http://www.baidu.com")\n# 输入框输入内容\ndriver.find_element_by_id("kw").send_keys("seleniumm")\n# 删除多输入的一个m\ndriver.find_element_by_id("kw").send_keys(Keys.BACK_SPACE)\n# 输入空格键+“教程”\ndriver.find_element_by_id("kw").send_keys(Keys.SPACE)\ndriver.find_element_by_id("kw").send_keys(u"教程")\n# ctrl+a 全选输入框内容\ndriver.find_element_by_id("kw").send_keys(Keys.CONTROL,\'A\')\n# ctrl+x 剪切输入框内容\ndriver.find_element_by_id("kw").send_keys(Keys.CONTROL,\'X\')\n# ctrl+v 粘贴内容到输入框\ndriver.find_element_by_id("kw").send_keys(Keys.CONTROL,\'V\')\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h2",{attrs:{id:"_3、定位技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、定位技巧"}},[s._v("#")]),s._v(" 3、定位技巧")]),s._v(" "),e("h3",{attrs:{id:"_3-1、iframe切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、iframe切换"}},[s._v("#")]),s._v(" 3.1、iframe切换")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('driver.switch_to.frame("框架的name or id or frame_element") #切换iframe框架\n\ndriver.switch_to.default_content() #切换回主框架\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"_3-2、下拉框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、下拉框"}},[s._v("#")]),s._v(" 3.2、下拉框")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("from selenium.webdriver.support.select import Select\n#通过下标定位\nSelect(driver.find_element(By.ID,'selectA')).select_by_index(1)\n#value进行定位\nSelect(driver.find_element(By.ID,'selectA')).select_by_value('gz')\n#通过选项文字进行定位\nSelect(driver.find_element(By.ID,'selectA')).select_by_visible_text('A重庆')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"_3-3、alert弹窗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、alert弹窗"}},[s._v("#")]),s._v(" 3.3、Alert弹窗")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("switch_to_alert()\n获取弹出框文本：text\n确定：\n\taccept()\n取消：\n     dismiss()\n输入值:\n      send_keys()\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# driver.switch_to.alert#切换到弹窗\n\n# alert_ele.accept() # 点击弹窗确认键\n\n# alert_ele.dismiss() # 点击弹窗取消键\n\n# alert_ele.send_keys("abcdef") # 弹窗输入框输入信息\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.关闭浏览器全部标签页：driver.quit( )\n\n2.关闭当前标签页（从标签页A打开新的标签页B，关闭标签页A）\ndriver.close( )\n\n获取当前窗口的句柄信息：handle = aa.current_window_handle\n\n获取当前所有开启窗口的句柄信息：handles = aa.window_handles\n\n切换窗口(所有窗口句柄信息存放于列表中)：aa.switch_to_window(handles[0])\n句柄类似于页面的id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);