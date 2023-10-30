module.exports = {
    'flowchart': {

    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "有新的内容更新",
            buttonText: "刷新"
        }
    },
    "vuepress-plugin-auto-sidebar": {
        // collapsable: true,
        // titleMode: "titlecase",
    },
    "vuepress-plugin-baidu-autopush": {

    },
    'sitemap': {
        hostname: 'https://www.ydlyy.fun'
    },
    'copyright': {
        noCopy: true, // 选中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
    },
    '@vuepress/medium-zoom': {
        selector: 'img',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16
        }
    },
    "dynamic-title": {
        showIcon: "./favicon.ico",
        showText: "(/≧▽≦/)欢迎回来！",
        hideIcon: "/favicon.ico",
        hideText: "(●—●)哦吼,不要走,给个收藏吧！",
        recoverTime: 2000
    },
    '@vuepress/nprogress': {

    },
    'vuepress-plugin-smooth-scroll': {

    },
    'reading-progress': {
        //阅读进度条
    },
    'vuepress-plugin-code-copy': {
        //一键复制代码
    },
}