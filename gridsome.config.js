// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "TechyWrite",
  siteUrl: "https://techywrite.ashutoshkrris.in",
  icon: "./src/favicon.png",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: "./tailwind.config.cjs",
        mainCssFile: "./src/assets/tailwind.css",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: [],
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "G-GXL60Z6WPF",
      },
    },
  ],
};
