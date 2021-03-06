let wordpressConfig;

try {
  wordpressConfig = require(`./.wordpress-config`);
  siteConfig = require("./site-config");
} catch (e) {
  console.log(e);
}

module.exports = {
  plugins: [
    {
      resolve: `@draftbox-co/gatsby-wordpress-balsa-theme`,
      options: {
        wordpressConfig,
        siteConfig,
      },
    },
  ],
};
