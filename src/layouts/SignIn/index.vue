<template>
  <div class="main-body">
    <div class="flex-column flex-start content">
      <h1>Sign In</h1>
      <text-input label="Email" error="this is an error" v-model="values.email" type="email"></text-input>
      <text-input label="Password" v-model="values.password" type="password"></text-input>
      <v-button icon="keyboard_arrow_right">Login</v-button>
      <v-button>Login</v-button>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/Forms/TextInput";
import VButton from "@/components/Buttons";
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
  components: {
    TextInput,
    VButton
  }
};
</script>

<style lang="scss" scoped>
.main-body {
  margin-top: 20px;
  .content {
    @include side-content;
  }
}
</style>