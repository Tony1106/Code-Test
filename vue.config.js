module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/constants/styles/_variables.scss";
        @import "@/constants/styles/_mixins.scss";
          `
      }
    }
  }
};
