<template>
  <containers type="authentication">
    <div class="flex-column flex-start content">
      <typography headTitle>New Password</typography>
      <div v-if="serviceStatus.error" class="error">
        <span>
          <i class="material-icons">close</i>
        </span>
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
          label="New password"
          placeholder="Enter your new password"
          :error="errors.newPassword"
          v-model="values.newPassword"
          type="password"
        ></text-input>
        <text-input
          label="Confirm password"
          placeholder="Confirm your new password"
          :error="errors.confirmPassword"
          v-model="values.confirmPassword"
          type="password"
        ></text-input>
      </div>
      <v-button icon="keyboard_arrow_right" v-on:click="submitNewPassword">Save</v-button>
    </div>
    <side-image url="login-user.svg"></side-image>
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
  name: "ResetPassword",
  mixins: [authentication],
  data() {
    return {
      values: {
        newPassword: "",
        confirmPassword: ""
      },
      errors: {
        newPassword: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    submitNewPassword() {
      this.validateForm();
      if (this.isFormValid()) {
        LayoutEventBus.$emit("spinner", "on");
        service("https://reqres.in/api/register", "post", this.values)
          .then(response => {
            LayoutEventBus.$emit("spinner", "off");
            this.handleServiceStatus("Sucess create new password");
            let { token } = response;
            saveToken(token);
          })
          .catch(err => {
            LayoutEventBus.$emit("spinner", "off");
            this.handleServiceStatus(null, err);
          });
      }
    },
    validateForm() {
      let { newPassword, confirmPassword } = this.values;
      //Reset erros state
      this.errors = {
        newPassword: "",
        confirmPassword: ""
      };
      if (newPassword.length < 6)
        this.errors.newPassword = "Password must be more than 6 characters";
      if (newPassword !== confirmPassword)
        this.errors.confirmPassword = "Password is not match";
      if (confirmPassword.length < 6)
        this.errors.confirmPassword = "Password must be more than 6 characters";
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