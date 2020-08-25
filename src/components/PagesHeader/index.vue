<template>
  <nav class="nav show">
    <Logo />
    <div class="nav-btn">
      <button
        class="nav-menu-icon btn-icon"
        :class="{ active: active === true }"
        @click="activeHandler"
      >
        <span />
      </button>
    </div>
    <Menu
      :class-name="'nav-menu'"
      :menu-height="menuHeight"
    />
    <Social class="nav-social" />
  </nav>
</template>

<script>
import Menu from '@/components/Menu/index.vue';
import Logo from '@/components/Logo/index.vue';
import Social from '@/components/Social/index.vue';

export default {
  name: 'PagesHeader',
  components: {
    Menu,
    Social,
    Logo,
  },
  data() {
    return {
      active: false,
      menuHeight: '',
      navbarMenu: '',
      MenuLength: 0,
      navbarMenuItemHeight: 0,
    };
  },
  mounted() {
    this.screenWidth();
    window.addEventListener('resize', this.screenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.screenWidth);
  },
  methods: {
    screenWidth() {
      window.screenWidth = document.body.clientWidth;
      if (window.screenWidth > 992) {
        this.active = false;
        this.menuHeight = '';
      } else {
        this.active = false;
        this.menuHeight = '0px';
      }
    },
    activeHandler() {
      this.active = !this.active;
      const { navbarMenu } = this.$children[1].$refs;
      this.MenuLength = navbarMenu.getElementsByTagName('li').length;
      this.navbarMenuItemHeight = navbarMenu.getElementsByTagName(
        'li',
      )[0].offsetHeight;
      if (this.active && window.screenWidth < 992) {
        this.menuHeight = `${this.MenuLength * this.navbarMenuItemHeight}px`;
      } else if (window.screenWidth < 992) {
        this.menuHeight = '0px';
      }
    },
  },
};
</script>

<style lang="scss">

ul.nav-social {
  @include media-down(md) {
    display: none;
  }

  .list-item {
    padding: 0 10px;
  }

  .fa-icon {
    color: $primary;
  }
}
</style>
