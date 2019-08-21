<template>
  <button v-bind:class="['button', buttonColor, buttonType]">
    <slot></slot>
    <div v-if="icon">
      <i class="material-icons">{{icon}}</i>
    </div>
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: {
    size: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String
    }
  },
  computed: {
    buttonColor() {
      switch (this.color) {
        case "primary":
          return "btn-primary";
          break;
        case "secondary":
          return "btn-secondary";
          break;
        case "warning":
          return "btn-warning";
          break;

        default:
          return "btn-primary";
          break;
      }
    },
    buttonType() {
      if (this.icon) {
        return "button-with-icon";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: white;
  height: 35px;
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 6px 5px #b1b1b13b;
  transition: 0.3s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
.button-with-icon {
  @include flex-center;
  justify-content: space-between;
  flex-direction: row;
}
.btn-primary {
  background-color: #dddddd;
  &:hover {
    background-color: $color-primary;
  }
}
</style>