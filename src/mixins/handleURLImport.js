export const handleURLImport = {
  props: {
    url: String,
    alt: String
  },
  computed: {
    //Url can be store on local or cloud
    getImageURL() {
      let resolveURL;
      try {
        resolveURL = require("@/assets/" + this.url);
      } catch (error) {
        resolveURL = this.url;
      }
      return resolveURL;
    }
  }
};
