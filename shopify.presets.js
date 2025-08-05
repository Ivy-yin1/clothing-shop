// This file deosn't support ES modules exporting.
// Read more here: https://www.npmjs.com/package/env-cmd#%EF%B8%8F-environment-file-formats

// You can either use this config file or the .json version
// By default its picking up the .json version.

const { author, version } = require("./package.json");

module.exports = {
  development: {
    SHOPIFY_CLI_THEME_TOKEN: "shptka_05f19183b9466c81b7d603105e3c6c79",
    SHOPIFY_FLAG_STORE: "ivys-clothing-shop.myshopify.com",
    SHOPIFY_FLAG_PATH: ".",
  },
  test: {
    SHOPIFY_CLI_THEME_TOKEN: "shyptaa_a7192e0c7b2a9ee...",
    SHOPIFY_FLAG_STORE: "example.myshopify.com",
    SHOPIFY_FLAG_THEME_ID: `${author}/test-theme@${version}`,
    SHOPIFY_FLAG_PATH: ".",
  },
  production: {
    SHOPIFY_FLAG_THEME_ID: `${author}/theme@${version}`,
    SHOPIFY_FLAG_PATH: ".",
  },
};
