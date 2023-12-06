const sharedConfig = require("tailwind-config/tailwind.config.js");
const { scopedPreflightStyles } = require("tailwindcss-scoped-preflight");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  ...sharedConfig,
  prefix: "novel-",
  plugins:[
    ...sharedConfig.plugins,
    scopedPreflightStyles({
      cssSelector: '.novel-twp', // or .tailwind-preflight or even [data-twp=true] - any valid CSS selector of your choice
      mode: 'matched only', // it's the default
  }),
  ]
};
