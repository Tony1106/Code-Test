<template>
  <div class="side-image">
    <img :src="getImageURL" v-bind:alt="alt" />
  </div>
</template>

<script>
import { handleURLImport } from "@/mixins/handleURLImport";
export default {
  name: "SideImage",
  mixins: [handleURLImport]
};
</script>

<style lang="scss" scoped>
.side-image {
  max-width: 700px;
  justify-self: stretch;
  align-self: center;
  @include md {
    width: 150px;
  }
  img {
    width: 100%;
  }
}
</style>