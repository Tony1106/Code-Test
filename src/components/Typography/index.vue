<template>
  <component :is="_variant" :class="classes">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "Typography",
  props: {
    headTitle: Boolean,
    variant: String
  },
  computed: {
    classes() {
      let _classes = ["typography"];
      if (this.headTitle) _classes.push("head_title");
      return _classes;
    },
    _variant() {
      let _variant = "h5";
      if (this.headTitle) {
        _variant = "h1";
      }
      if (this.variant) {
        _variant = this.variant;
      }
      return _variant;
    }
  }
};
</script>

<style lang="scss" scoped>
.typography {
}
.head_title {
  font-size: 45px;
  margin-bottom: 70px;
  font-weight: 500;
}
</style>