module.exports = {
  siteMetadata: {
    name: "Tomasz Zadrozny",
    description: "Tomasz Zadrozny Home Page",
    keywords: [
      "developer",
      "web",
      "full stack",
      "javascript",
      "tomasz zadrozny",
      "software"
    ],
    siteUrl: "https://tomekz.dev",
    author: {
      name: "Tomasz Zadrozny",
      url: "https://github.com/tomekz",
      email: "zadrozny.tomasz@gmail.com"
    },
    siteImage: "terminal-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 280
    }
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(node => {
            console.log({ node });
            return {
              url: `${site.siteMetadata.siteUrl}${node.node.path}`,
              changefreq: `yearly`,
              priority: 0.5
            };
          })
      }
    },
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: ["recommendation-letters", "projects"]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-35680516-2"
      }
    }
  ]
};
