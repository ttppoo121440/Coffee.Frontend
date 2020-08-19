<template>
  <header class="header">
    <div class="logo pl-3">
      <a href="#">
        <h1>
          Logo
        </h1>
      </a>
    </div>
    <Menu :class-name="'header-menu'" />
    <Social />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Social from '@/components/Social';

export default {
  name: 'Header',
  components: {
    Menu,
    Social,
  },
};
</script>
