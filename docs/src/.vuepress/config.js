const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'CS462: G7 IoT Documentation',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
        {
            text: 'Journal',
            link: '/journal/',
        },
        {
            text: 'Tray In/Out Docs',
            link: '/tray-inout/',
        },
        {
            text: 'Tablevision Docs',
            link: '/tablevision/',
        },
        {
            text: 'Our Journey',
            link: '/our_journey/',
        },
        {
            text: 'Dashboard',
            link: 'https://d2b9ybaeuz42aa.cloudfront.net'
        }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        '',
                    ]
                }
            ],
            '/journal/': [
                {
                    title: 'Journal',
                    collapsable: false,
                    children: [
                        '',
                        'fsr-rfid',
                        'tablevision'
                    ]
                }
            ],
            '/tablevision/': [
                {
                    title: 'Tablevision Docs',
                    collapsable: false,
                    children: [
                        '',
                        'documentation'
                    ]
                }
            ],
            '/tray-inout/': [
                {
                    title: 'Tray In/Out Docs',
                    collapsable: false,
                    children: [
                        '',
                        'documentation'
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}