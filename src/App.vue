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
</style>

