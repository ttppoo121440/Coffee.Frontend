<template>
  <div class="page-banner">
    <img
      :src="src"
      alt="banner"
      class="w-100"
    >
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">

.page-banner {
  img {
    min-height: 300px;
    max-height: 600px;
  }
}
</style>
