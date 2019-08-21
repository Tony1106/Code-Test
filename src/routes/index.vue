<template>
  <div>
    <customer-header />
    <component v-bind:is="currentPage"></component>
  </div>
</template>

<script>
import Header from "@/components/Pages/Header";
//import the component and register
import NotFound from "@/layouts/NotFound";
import ResetPassword from "@/layouts/ResetPassword";
import SignIn from "@/layouts/SignIn";

//Define the route of the application:
const routes = {
  "/resetpassword": "ResetPassword",
  "/signin": "SignIn"
};
export default {
  name: "Application",
  data() {
    return {
      currentRoute: window.location.pathname
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
    customerHeader: Header
  }
};
</script>

