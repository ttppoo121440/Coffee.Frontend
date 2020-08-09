<template>
  <div id="app">
    <Notification
      :show.sync="$store.state.Notification.show"
      :content.sync="$store.state.Notification.content"
    />
    <transition
      name="page"
      appear
    >
      <router-view
        :key="$route.fullPath"
      />
    </transition>
  </div>
</template>

<script>
import Notification from '@/components/Notification';

export default {
  name: 'App',
  components: {
    Notification,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/main.scss";
</style>
