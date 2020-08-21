module.exports = {
  publicPath: './',
  outputDir: './dist',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    disableHostCheck: true,
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData:
        `@import "~@/assets/scss/functions.scss";
         @import "~@/assets/scss/variables.scss";
         @import "~@/assets/scss/mixins/breakpoints.scss";`,
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
};
