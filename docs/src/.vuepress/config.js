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
            text: 'FSR-RFID',
            link: '/fsr-rfid/',
        },
        {
            text: 'Tablevision',
            link: '/tablevision/',
        },
        {
            text: 'Dashboard',
            link: 'https://v1.vuepress.vuejs.org'
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
                    ]
                }
            ],
            '/fsr-rfid/': [
                {
                    title: 'FSR-RFID Docs',
                    collapsable: false,
                    children: [
                        '',
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