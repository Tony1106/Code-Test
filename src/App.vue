<template>
  <div id="app">
    <Application />
  </div>
</template>

<script>
import Application from "./routes";

export default {
  name: "app",
  components: {
    Application
  }
};
</script>

<style lang="scss">
@import "./constants/styles/_global.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

