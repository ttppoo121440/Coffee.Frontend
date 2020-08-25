<template>
  <header class="header">
    <Logo />
    <Menu :class-name="'header-menu'" />
    <Social />
  </header>
</template>

<script>
import Menu from '@/components/Menu/index.vue';
import Logo from '@/components/Logo/index.vue';
import Social from '@/components/Social/index.vue';

export default {
  name: 'Header',
  components: {
    Menu,
    Social,
    Logo,
  },
};
</script>
