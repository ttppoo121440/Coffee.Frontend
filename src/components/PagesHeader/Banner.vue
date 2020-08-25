<template>
  <div class="page-banner" />
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss">

.page-banner {
  object-fit: cover;
  position: relative;
  z-index: -1;
  height: 600px;
  background: url("~@/assets/images/page-banner.jpg") no-repeat center center;
  background-position-y: 80%;
  background-size: cover;
}
</style>
