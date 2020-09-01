<template>
  <div
    class="page-banner"
    :style="bannerPic"
  />
</template>

<script>
export default {
  name: 'Banner',
  props: {
    pic: {
      type: String,
      required: true,
    },
  },
  computed: {
    bannerPic() {
      return {
        background: `url('${this.pic}') no-repeat 80% 45%`,
      };
    },
  },
};
</script>

<style lang="scss">

.page-banner {
  object-fit: cover;
  position: relative;
  z-index: -1;
  height: 500px;
  background-position-y: 60%;
  background-size: cover;
}
</style>
