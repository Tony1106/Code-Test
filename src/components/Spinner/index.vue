<template>
  <div class="wrapper">
    <div class="spinner">
      <i class="material-icons">camera</i>
      <div class="text">Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.wrapper {
  width: 100%;
  height: 100%;
  background: #b98c8c4f;
  position: fixed;
  top: 0;
  z-index: 999;
  .spinner {
    color: $color-primary;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-25px, -25px);
    z-index: 999;
    @include flex-center;
    flex-direction: column;
    i {
      animation: spin 1s infinite linear;
      font-size: 50px;
    }
    .text {
      font-size: 20px;
    }
  }
}
</style>