<template>
  <div class="page">
    <v-header></v-header>
    <spinner v-if="layoutControll.isSpinnerOn"></spinner>
    <component v-bind:is="currentPage"></component>
  </div>
</template>
<script>
import Header from "@/components/Pages/Header";
//import the component and register
import NotFound from "@/layouts/NotFound";
import ResetPassword from "@/layouts/ResetPassword";
import SignIn from "@/layouts/SignIn";

import { store } from "@/layouts/layoutController";
import Spinner from "@/components/Spinner";

//Define the route of the application:
const routes = {
  "/resetpassword": "ResetPassword",
  "/signin": "SignIn"
};

export default {
  name: "Application",
  data() {
    return {
      currentRoute: window.location.pathname,
      layoutControll: store.state
    };
  },

  computed: {
    currentPage() {
      return routes[this.currentRoute] || "NotFound";
    }
  },
  components: {
    NotFound,
    ResetPassword,
    SignIn,
    VHeader: Header,
    Spinner
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
}
</style>

