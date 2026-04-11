import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mr_Expence",
  description: "The place for Mr_Expence's Projects and more!",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/intro' }
    ],
    siteTitle: 'Mr_Expence',
    logo: '/cat_logo.png',
    outline: {
      level: 'deep',  // show h2 and h3
      label: 'On this page'  // optional, customizes the heading
    },
    sidebar: [
      {
        text: 'Resource Pack Guide',
        items: [
          { text: 'Intro', link: '/guide/intro' },
          { text: 'Structure', link: '/guide/structure' },
          { text: 'Textures', link: '/guide/textures' },
          { text: 'Models', link: '/guide/models' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mr-Expence' },
      { icon: 'modrinth', link: 'https://modrinth.com/user/Mr_Expence' },
      { icon: 'curseforge', link: 'https://www.curseforge.com/members/mr_expence/projects' },
      { icon: 'discord', link: 'https://discord.gg/3kbz7edSa6' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Mr_Expence' },
      { icon: 'twitch', link: 'https://www.twitch.tv/mrexpence' }
    ]
  }
})
