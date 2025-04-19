import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import social from './data/social'
import type { GiscusConfig } from './src/components/Comment'

const beian = '闽ICP备2020017848号-3'
const beian1 = '闽公网安备35021102000847号'

const config: Config = {
//恒量配置
  title: '鸿安泰达',
//标题
  url: 'https://www.hatd.eu.org/',
//链接
  baseUrl: '/',
//基础网址
  favicon: 'img/favicon.ico',
//图标：img/图标文件
  organizationName: 'HATD',
//组织名称:HATD
  projectName: 'home',
//项目名称：首页
  customFields: {
//自定义字段
    bio: '道阻且长，行则将至',
//生物
    description:
//描述
      '致力于公共安全领域，生产及销售公、检、法、司、武警、反恐、部队及相关部门用于安全检查、排爆、反恐、缉毒、治安、刑侦、通讯、救援、户外等业务所需装备器材。',
  },


  themeConfig: {
   //主题配置
    // announcementBar: {
   //公告栏
    //   id: 'announcementBar-3',
   //公告3
    //   content: ``,
   //主要内容
    // },
    image: 'img/og.png',
//图片
    metadata: [
//元数据
      {
        name: 'author',
//姓名
        content: '鸿安泰达',
//内容
      },
      {
        name: 'keywords',
//关键字
        content: 'blog, javascript, typescript, node, react, vue, web',
//内容：博客、 javascript, typescript, node, react, vue, web
      },

      {
        name: 'keywords',
//关键字
        content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向, 主攻ts全栈',
//内容：编程爱好者, Web开发者, 写过爬虫, 学过逆向, 主攻ts全栈
      },
    ],

    docs: {
//文档
      sidebar: {
//侧边栏
        hideable: true,
//可隐藏：真
      },
    },

    navbar: {
//导航栏
      logo: {
//标志
        alt: '鸿安泰达',
//
        src: 'img/logo.webp',
//浅色模式：图标logo
        srcDark: 'img/logo.webp',
//暗色模式：图标logo
      },
      hideOnScroll: true,
//滚动时隐藏
      items: [
//项目
        { label: '首页', position: 'right', to: 'blog/product' },
//标签：首页，位置：右  
        {
          label: '产品中心',
          position: 'right',
          items: [
            { label: '警用装备', to: 'blog/product/police' },
            { label: '战术装备', to: 'blog/product/tactics' },
            { label: '户外装备', to: 'blog/product/outdoor' },
          ],
        },
        { label: '项目', position: 'right', to: 'project' },
        { label: '友链', position: 'right', to: 'friends' },
        { label: '联系我们', position: 'right', to: 'about' },

        // {
        //   type: 'localeDropdown',
//类型：下拉菜单
        //   position: 'right',
//位置：右
        // },
      ],
    },






    footer: {
//页脚
      style: 'dark',
//风格：深色
      links: [
//链接
        {
          title: '学习',
//标题：学习
          items: [
//项目
            { label: '首页', to: 'home' },
//标签：首页，致，主页
            { label: '警用装备', to: 'product/police' },
//
            { label: '战术装备', to: 'product/tactics' },
            { label: '户外装备', to: 'product/outdoor' },
          ],
        },


        {
          title: '社交媒体',
          items: [
            { label: '关于我们', to: '/about' },
            { label: 'GitHub', href: social.github.href },
            { label: 'Twitter', href: social.x.href },
            { label: '掘金', href: social.juejin.href },
            { label: 'Discord', href: social.discord.href },
          ],
        },


        {
          title: '网站',
          items: [
            { label: 'js反混淆', to: 'https://js-deobfuscator.kuizuo.cn' },
            { label: 'cyberChef', to: 'https://gchq.github.io/CyberChef' },
            { label: 'api服务', to: 'https://api.kuizuo.cn' },
            { label: '便民服务', to: 'https://service.kuizuo.cn' },
            { label: '站点监控', to: 'https://uptime.kuizuo.cn' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '友链', position: 'right', to: 'friends' },
            {
              html: `
                <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                </a>
                `,
            },
          ],
        },
      ],
      copyright: `
        <p style="margin-bottom: 0;"><a href="http://beian.miit.gov.cn/">${beian}</a></p>
        <p style="display: inline-flex; align-items: center;"><img style="height:20px;margin-right: 0.5rem;" src="/img/police.png" alt="police" height="20"/><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${
          beian1.match(/\d+/)?.[0]
        }" >${beian1}</a></p>
        <p>Copyright © 2020 - ${new Date().getFullYear()} kuizuo. | Built with Docusaurus.</p>
        `,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: ['bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf', 'diff'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tweet-theme.css'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    // ['docusaurus-plugin-baidu-tongji', { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog', // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '代码人生：编织技术与生活的博客之旅',
        blogSidebarCount: 10,
        blogSidebarTitle: '博文',
        postsPerPage: 12,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '愧怍',
          description: 'feedId:41215011978385457+userId:41840354283324416',
          copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      console.log(
        `%c Kz Blog %c https://github.com/kuizuo/blog`,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;',
      )

      const motto = `
This Webisite Powered By Kz Blog.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '愧怍的个人博客',
      },
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  onBrokenLinks: 'warn',
}

export default config
