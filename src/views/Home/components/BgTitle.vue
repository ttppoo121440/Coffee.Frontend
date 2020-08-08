<template>
  <span :class="className + '-label'">{{ title }}</span>
</template>

<script>
export default {
  name: 'BgTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";

.left {
  &-label {
    position: absolute;
    font-size: 240px;
    transform: rotate(90deg);
    left: -300px;
    top: 350px;
    z-index: -100;
    color: #f3efea;
  }
}

.right {
  &-label {
    position: absolute;
    font-size: 240px;
    transform: rotate(90deg);
    right: -300px;
    top: 350px;
    z-index: -100;
    color: #f3efea;
  }
}
</style>
