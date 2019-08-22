<template>
  <div class="main-body">
    <div class="flex-column flex-start content">
      <h1>Sign In</h1>
      <text-input label="Email" error="this is an error" v-model="values.email" type="email"></text-input>
      <text-input label="Password" v-model="values.password" type="password"></text-input>
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
export default {
  name: "SignIn",
  data() {
    return {
      values: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signIn() {
      console.log("sign in");
    }
  },
  components: {
    TextInput,
    VButton,
    SideImage
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