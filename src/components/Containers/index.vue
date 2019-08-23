
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Containers",
  props: {
    type: String
  },
  computed: {
    classes() {
      let _classes = ["container"];
      switch (this.type) {
        case "authentication":
          _classes.push("authentication");
          break;
        default:
          break;
      }
      return _classes;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.authentication {
  height: calc(100vh - 116px);
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: flex-start;
  margin-left: 100px;
  width: calc(100% - 100px);
  box-sizing: border-box;
  @include md {
    @include flex-center;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding-top: 50px;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
  @include sm {
    justify-content: space-around;
  }
}
</style>