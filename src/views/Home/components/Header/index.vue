<template>
  <header class="header">
    <Logo />
    <Menu :class-name="'header-menu'" />
    <Social />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Logo from '@/components/Logo';
import Social from '@/components/Social';

export default {
  name: 'Header',
  components: {
    Menu,
    Social,
    Logo,
  },
};
</script>
