<template>
  <div class="form">
    <div class="label">{{label}}</div>
    <input
      v-bind:type="type"
      v-bind:placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value.trim())"
    />
    <div class="border"></div>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  name: "Text-Input",
  data() {
    return {};
  },
  props: {
    label: String,
    type: { type: String, default: "text" },
    value: [String, Number],
    placeholder: String,
    error: String
  }
};
</script>
<style lang="scss" scoped>
.form {
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  .label {
    font-weight: 800;
    font-size: 18px;
  }
  input {
    width: 100%;
    border: none;
    height: 18px;
    line-height: 18px;
    font-size: 16px;
    font-weight: 400;
    &:focus {
      outline: none;
    }
  }
  .border {
    margin-top: 3px;
    height: 2px;
    width: 100%;
    background-color: #dddddd;
  }
  .error {
    color: red;
    margin-top: 5px;
    font-weight: 400;
    font-size: 14px;
  }
}
</style>