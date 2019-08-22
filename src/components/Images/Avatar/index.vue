<template>
  <img :src="getImageURL" :alt="alt" :class="['avatar', classes]" />
</template>

<script>
import { handleURLImport } from "@/mixins/handleURLImport";
export default {
  name: "Avatar",
  mixins: [handleURLImport],
  props: {
    size: { type: String, default: "small" }
  },
  computed: {
    classes() {
      switch (this.size) {
        case "small":
          return "image_small";
          break;
        case "medium":
          return "image_medium";
          break;
        case "big":
          return "image_big";
          break;

        default:
          return "image_small";
          break;
      }
    }
  }
};
</script>

<style>
.avatar {
  border-radius: 50%;
}
.image_small {
  height: 24px;
  width: 24px;
}
.image_medium {
  height: 30px;
  width: 30px;
}
.image_big {
  height: 48px;
  width: 48px;
}
</style>