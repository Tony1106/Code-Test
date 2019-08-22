<template>
  <div class="main-body">
    <div class="flex-column flex-start content">
      <typography headTitle>Sign In</typography>
      <div v-if="serviceStatus.error" class="error">
        <i class="material-icons">close</i>
        {{serviceStatus.error}}
      </div>
      <div v-if="serviceStatus.success" class="success">
        <span>
          <i class="material-icons">done</i>
        </span>
        {{serviceStatus.success}}
      </div>
      <div class="form">
        <text-input label="Email" :error="errors.email" v-model="values.email" type="email"></text-input>
        <text-input
          label="Password"
          :error="errors.password"
          v-model="values.password"
          type="password"
        ></text-input>
      </div>
      <div class="reset-password">
        <a href="./resetpassword">Want to reset password?</a>
      </div>
      <v-button icon="keyboard_arrow_right" v-on:click="signIn">Login</v-button>
    </div>
    <side-image url="login-shield.svg" class="side-image"></side-image>
  </div>
</template>

<script>
import TextInput from "@/components/Forms/TextInput";
import VButton from "@/components/Buttons";
import SideImage from "@/components/Images/SideImage";
import Typography from "@/components/Typography";

import { service, saveToken } from "@/services";
import { authentication } from "@/mixins/authentication";
export default {
  name: "SignIn",
  mixins: [authentication],
  data() {
    return {
      values: {
        email: "",
        password: ""
      },
      errors: {
        email: "",
        password: ""
      },
      serviceStatus: {
        success: "",
        error: ""
      }
    };
  },
  methods: {
    signIn() {
      this.validateForm();
      if (this.isFormValid()) {
        service("https://reqres.in/api/login", "post", this.values)
          .then(response => {
            console.log(response);
            this.handleServiceStatus("Sucess login");
            let { token } = response;
            saveToken(token);
          })
          .catch(err => {
            this.handleServiceStatus(null, "The email or password wrong");
          });
      }
    },
    validateForm() {
      let { email, password } = this.values;
      //Reset erros state
      this.errors = {
        email: "",
        password: ""
      };
      if ((this.email = "")) {
        this.errors.email = "Email is required.";
      } else if (!this.validEmail(email)) {
        this.errors.email = "Please input the valid email.";
      }
      if (password.length < 6)
        this.errors.password = "Password must be more than 6 characters.";
    }
  },
  components: {
    TextInput,
    VButton,
    SideImage,
    Typography
  }
};
</script>

<style lang="scss" scoped>
.main-body {
  height: calc(100vh - 116px);
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: flex-start;
  .content {
    @include side-content;
    .form {
      width: 100%;
    }
    .reset-password {
      position: relative;
      top: -40px;
    }
  }
  .side-image {
    justify-self: stretch;
  }
  .error {
    @include flex-center;
    color: red;
    i {
      padding-right: 10px;
    }
  }
  .success {
    @include flex-center;
    color: green;
    i {
      padding-right: 10px;
    }
  }
}
</style>