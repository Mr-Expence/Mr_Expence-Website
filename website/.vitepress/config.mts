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
      { text: 'Guide', link: '/intro' }
    ],
    outline: {
      level: 'deep',  // show h2 and h3
      label: 'On this page'  // optional, customizes the heading
    },
    sidebar: [
      {
        text: 'Resource Pack Guide',
        items: [
          { text: 'Intro', link: '/intro' },
          { text: 'Resource Pack Structure', link: '/resource_pack_structure' },
          { text: 'Making a Resource Pack', link: '/making_a_new_pack' }
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
