export default {
    title: 'DevHacks',
    description: 'Tutorials and Git Cheatsheets',
  
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Tutorials', link: '/tutorials/' },
        { text: 'Git Cheatsheet', link: '/cheatsheets/' }
      ],
  
      sidebar: {
        '/tutorials/': [
          { text: 'Docker Guide', link: '/tutorials/docker' }
        ],
        '/cheatsheets/': [
          { text: 'Git', link: '/cheatsheets/git' },
          { text: 'Git SSH Setup', link: '/cheatsheets/git_ssh_setup' }
        ]
      },
  
      // Adding local search configuration
      search: {
        provider: 'local',
      },
  
      footer: {
        message: 'DevHacks - Tutorials and Git Cheatsheets',
        socialLinks: [
          { icon: 'github', link: 'https://github.com/your-username/devhacks' },
          { icon: 'twitter', link: 'https://twitter.com/your-username' },
          { icon: 'linkedin', link: 'https://www.linkedin.com/in/shohanurnishad' }
        ]
      },
  
      editLink: {
        pattern: 'https://github.com/s-nishad/devhacks/edit/main/docs/:path',
        text: 'Contribute to this page on GitHub'
      }
    },
  
    head: [
      ['script', { 
        async: true, 
        src: 'https://www.googletagmanager.com/gtag/js?id=YOUR-GTM-ID' 
      }],
      ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR-GTM-ID');
      `]
    ]
  }
  