const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const dotenv = require("dotenv")
const { theme } = resolveConfig(tailwindConfig)

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: "Gatsby Blog Contentful",
    author: "Melanie Nolan",
    description: "A blog built with Gatsby and Contentful",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Blog Contentful",
        short_name: "Gatsby Blog Contentful",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.purple[500],
        icon: "static/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "tncu8shbwjqr",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Suez One",
            variants: ["400"],
          },
        ],
      },
    },
  ],
}
