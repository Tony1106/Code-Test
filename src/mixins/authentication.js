export const authentication = {
  data: function() {
    return {
      serviceStatus: {
        success: "",
        error: ""
      }
    };
  },
  methods: {
    handleServiceStatus(success, error) {
      if (success) {
        this.serviceStatus.error = "";
        this.serviceStatus.success = success;
      }
      if (error) {
        this.serviceStatus.error = error;
        this.serviceStatus.success = "";
      }
    },
    isFormValid() {
      let { errors } = this;
      let isValid = true;
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          if (errors[key]) isValid = false;
        }
      }
      return isValid;
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
