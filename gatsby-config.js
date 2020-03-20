module.exports = {
  siteMetadata: {
    title: "Home page",
    description: "Tomasz Zadrozny home page",
    keywords: ["developer", "full stack", "javascript", "gatsby", "react"],
    siteUrl: "https://tomasz-zadrozny.netlify.com",
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
