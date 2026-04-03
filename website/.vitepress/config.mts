import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mr_Expence",
  description: "The place for Mr_Expence's Projects and more!",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Resource Pack Guide',
        items: [
          { text: 'Intro', link: '/intro' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
