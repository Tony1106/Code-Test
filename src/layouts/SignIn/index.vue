<template>
  <containers type="authentication">
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
        <text-input
          label="Email"
          placeholder="Enter your email"
          :error="errors.email"
          v-model="values.email"
          type="email"
        ></text-input>
        <text-input
          label="Password"
          placeholder="Enter your password"
          :error="errors.password"
          v-model="values.password"
          type="password"
        ></text-input>
        <div class="reset-password">
          <a href="./resetpassword">Want to reset password?</a>
        </div>
      </div>
      <v-button icon="keyboard_arrow_right" v-on:click="signIn">Login</v-button>
    </div>
    <side-image url="login-shield.svg"></side-image>
  </containers>
</template>

<script>
import Containers from "@/components/Containers";
import TextInput from "@/components/Forms/TextInput";
import VButton from "@/components/Buttons";
import SideImage from "@/components/Images/SideImage";
import Typography from "@/components/Typography";

import { LayoutEventBus } from "@/layouts/layoutController";
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
        LayoutEventBus.$emit("spinner", "on");
        service("https://reqres.in/api/login", "post", this.values)
          .then(response => {
            LayoutEventBus.$emit("spinner", "off");
            this.handleServiceStatus("Sucess login");
            let { token } = response;
            saveToken(token);
          })
          .catch(err => {
            LayoutEventBus.$emit("spinner", "off");
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
      if (email === "") {
        this.errors.email = "Email is required.";
      } else if (!this.validEmail(email)) {
        this.errors.email = "Please input the valid email.";
      }
      if (password.length < 6)
        this.errors.password = "Password must be more than 6 characters.";
    }
  },
  components: {
    Containers,
    TextInput,
    VButton,
    SideImage,
    Typography
  }
};
</script>

<style lang="scss" scoped>
.content {
  @include side-content;
  .form {
    width: 100%;
    margin-bottom: 30px;
  }
  .reset-password {
  }
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
</style>