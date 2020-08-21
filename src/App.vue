<template>
  <div id="app">
    <notifications
      group="foo"
      position="top center"
      classes="my-style"
    />
    <transition
      name="page"
      appear
    >
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "~@/assets/scss/main.scss";

.vue-notification-group {
  top: 11% !important;
}

.my-style {
  padding: 10px;
  margin: 0 5px 5px;
  font-size: 12px;
  color: #fff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.success {
    background: $primary;
    border-left-color: darken($primary, 5%);
  }
}
</style>
