module.exports = [{
        text: '项目',
        link: '/技术文章/项目/vuepress',
        icon: 'reco-eye'
    },
    {
        text: '框架',
        icon: 'reco-faq',
        items: [
            { text: '框架', link: '/技术文章/框架/框架相关' },
        ]
    },
    {
        text: 'JAVA',
        link: '/技术文章/',
        icon: 'reco-api',
        items: [{
                text: 'Java基础',
                items: [
                    { text: 'JavaSE', link: '/技术文章/java/javase' },
                    { text: 'JavaEE', link: '/技术文章/java高级/javaee' },
                ],
            },

        ]
    },
    {
        text: '前端',
        icon: 'reco-api',
        items: [
            { text: 'html', link: '/技术文章/前端/html' },
            { text: 'css', link: '/技术文章/前端/css' },
            { text: 'JavaScript', link: '/技术文章/前端/JavaScript' },
        ]
    },
    {
        text: 'Python',
        icon: 'reco-api',
        items: [
            { text: 'python基础', link: '/技术文章/python/python基础' },
            { text: 'python爬虫', link: '/技术文章/python/python爬虫' },
        ]
    },
    {
        text: '参考博客',
        icon: 'reco-blog',
        items: [
            { text: '君哥', link: 'https://www.it235.com/', icon: 'reco-blog' },
        ]
    }, /**/
    { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
]