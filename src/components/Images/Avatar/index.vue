<template>
  <img v-bind:src="url" v-bind:alt="alt" />
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: String,
    alt: String
  }
};
</script>

<style>
</style>