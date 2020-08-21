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

.left {
  &-label {
    position: absolute;
    font-size: 240px;
    transform: rotate(90deg);
    left: -300px;
    top: 270px;
    z-index: -100;
    color: #f3efea;
    @include media-down(sm) {
      font-size: 100px;
      left: -250px;
      bottom: 0px;
    }
  }
}

.right {
  &-label {
    position: absolute;
    font-size: 240px;
    transform: rotate(90deg);
    right: -300px;
    bottom: 300px;
    z-index: -100;
    color: #f3efea;

    @include media-down(sm) {
      font-size: 100px;
      top: auto;
      bottom: 150px;
      right: -125px;
    }
  }
}
</style>
