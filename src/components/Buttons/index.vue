<template>
  <button v-bind:class="['button', buttonColor, buttonType]" v-on:click="$emit('click')">
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
        case "secondary":
          return "btn-secondary";
        case "warning":
          return "btn-warning";
        default:
          return "btn-primary";
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
  width: 70%;
  padding: 7px 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @include sm {
    width: 100%;
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