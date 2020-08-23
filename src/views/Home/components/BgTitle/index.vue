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
    top: 200px;
    left: -300px;
    z-index: -100;
    font-size: 240px;
    color: #f3efea;
    transform: rotate(90deg);

    @include media-down(sm) {
      display: none;
    }
  }
}

.right {
  &-label {
    position: absolute;
    right: -300px;
    bottom: 300px;
    z-index: -100;
    font-size: 240px;
    color: #f3efea;
    transform: rotate(90deg);

    @include media-down(sm) {
      display: none;
    }
  }
}
</style>
