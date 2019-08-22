<template>
  <div class="main-body">
    <div class="flex-column flex-start content">
      <typography headTitle>Sign In</typography>
      <text-input label="Email" :error="errors.email" v-model="values.email" type="email"></text-input>
      <text-input
        label="Password"
        :error="errors.password"
        v-model="values.password"
        type="password"
      ></text-input>
      <div class="reset-password">
        <a href="./resetPassword">Want to reset password?</a>
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
export default {
  name: "SignIn",
  data() {
    return {
      values: {
        email: "",
        password: ""
      },
      errors: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signIn() {
      console.log("sign in");
      this.validateForm();
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
        this.errors.email = "Please input the valid email";
      }
      if (password.length < 6)
        this.errors.password = "Please input the valid password.";
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
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
    .reset-password {
      margin-top: 15px;
      margin-bottom: 30px;
    }
  }
  .side-image {
    justify-self: stretch;
  }
}
</style>