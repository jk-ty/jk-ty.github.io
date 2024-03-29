const themeConfig = require('./config/theme/index.js')
const navConf = require('./config/nav')
const sidebarConf = require('./config/sidebar')
const pluginsConf = require('./config/plugins/index')
module.exports = {
    //注意，此处需要填写你部署在nginx下的文件夹名称，如果是根目录，那么可以注释掉此行，注释掉后本地打开index.html无法访问
    //base: "/dist/",
    // title: "Broad Tao",
    title: "我的学习分享",
    description: '己不由心，身又岂能由己。',
    dest: './dist',
    port: '7777',
    head: [
        ['link', { rel: 'icon', href: './favicon.ico' }],
        ['meta', { name: 'keywords', content: 'Broad Tao,vuepress,自建博客,Broad Tao' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["meta", { name: "robots", content: "all" }],
        ["meta", { name: "author", content: "Broad Tao" }],
        ["link", { rel: "stylesheet", href: "/css/style.css" }], //显示nav小logo
        ["script", { charset: "utf-8", src: "/js/custom.js" }], //加载右侧菜单栏图片
        // 百度统计
        /*
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?e312f85a409131e18146064e62b19798";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        `],
        */

    ],
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        smoothScroll: true,
        // 博客设置
        /*
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },*/
        /*
        valineConfig: {
            // your appId
            appId: 'AwhnPnTxxzGzoHsz',
            // your appKey
            appKey: '0M6f1PazzzalVIukU',
            recordIP:true,
            placeholder:'来都来了，冒个泡再走呗...',
            visitor:true,
        },
        */
        authorAvatar: '/avatar.png',
        // 最后更新时间
        lastUpdated: 'Time', // string | boolean
        //repo: 'it235',
        // 如果你的文档不在仓库的根部
        //docsDir: 'docs',
        // 可选，默认为 master
        //docsBranch: 'source',
        //editLinks: true,
        //editLinkText: '在 GitHub 上编辑此页！',
        // 作者
        author: 'Broad Tao',
        // 项目开始时间
        startYear: '2022',
        nav: navConf,
        sidebar: sidebarConf,
        sidebarDepth: 2,
        // 自动形成侧边导航
        sidebar: 'auto',
        // logo: '/head.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // ICP备案
        record: '豫ICP备2022014869号',
        recordLink: 'https://beian.miit.gov.cn/',
    },
    markdown: {
        lineNumbers: true
    },
    plugins: pluginsConf
}