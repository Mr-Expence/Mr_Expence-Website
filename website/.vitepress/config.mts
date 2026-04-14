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
      { text: 'Resource Pack Guide', link: '/guide/intro' },
      {
        text: 'Projects',
        items: [
          { text: 'Flaming Swords', link: '/projects/flaming-swords' },
          { text: 'Shulker UI', link: '/projects/shulker-ui' },
          { text: "Mr_Expence's PvP Overlay", link: '/projects/mr-expence-pvp-overlay' },
          { text: "Bare Bones Buttons", link: '/projects/bare-bones-buttons' },
          { text: "Cosmetics+", link: '/projects/cosmetics' },
          { text: "Alternate Effect Particles", link: '/projects/alternate-effect-particles' },
          { text: "Bare Bone Crossless Lamps", link: '/projects/bare-bone-crossless-lamps' }
        ]
      }
    ],
    siteTitle: 'Mr_Expence',
    logo: '/cat_logo.png',
    outline: {
      level: 'deep',  // show h2 and h3
      label: 'On this page'  // optional, customizes the heading
    },
    sidebar: {
      '/guide/': [
      {
        text: 'Resource Pack Guide',
        items: [
          { text: 'Intro', link: '/guide/intro' },
          { text: 'Structure', link: '/guide/structure' },
          { text: 'Pack Setup', link: '/guide/pack_setup' },
          { text: 'Textures', link: '/guide/textures' },
          { text: 'Models', link: '/guide/models' }
        ]
      }
    ],
    '/python/': [
      {
        text: 'Python Tutorial',
        items: [
          { text: 'Setup', link: '/python/setup' },
          { text: 'Variables', link: '/python/variables' },
          { text: 'Strings', link: '/python/strings' },
          { text: 'Operators', link: '/python/operators' },
          { text: 'Conditionals', link: '/python/conditionals' },
          { text: 'Loops', link: '/python/loops' },
          { text: 'Functions', link: '/python/functions' },
          { text: 'Lists', link: '/python/lists' },
          { text: 'Dictionaries', link: '/python/dictionaries' },
          { text: 'Files', link: '/python/files' },
          { text: 'Errors', link: '/python/errors' },
          { text: 'Modules', link: '/python/modules' },
          { text: 'Problems', link: '/python/problems' }
        ]
      }
    ]
  },
  search: {
      provider: 'local'
    },

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
