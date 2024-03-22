const webpack = require("webpack");
const { templateCompilerOptions } = require("@tresjs/core");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: (tag) =>
            tag.startsWith("Tres-") || tag.startsWith("tres-"),
        };
        return options;
      });
  },
};
