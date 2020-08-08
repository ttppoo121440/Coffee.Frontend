<template>
  <nav class="nav show">
    <div class="logo pl-3">
      <router-link to="/">
        <img
          src="~@/assets/images/logo.png"
          alt="logo"
          height="100"
        >
      </router-link>
    </div>
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
  <!-- <div class="pages-header-banner" /> -->
</template>

<script>
import Menu from '@/components/Menu';
import Social from '@/components/Social';

export default {
  name: 'PagesHeader',
  components: {
    Menu,
    Social,
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
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

ul.nav-social {
  @include media-down(md) {
    display: none;
  }
  .list-item {
    padding: 10px;
  }
  .fa-icon {
    color: $primary;
  }
}
.pages-header-banner {
  z-index: -1;
  position: relative;
  background: url("https://cdn.stocksnap.io/img-thumbs/960w/menu-chalkboard_AO8NDC5UDL.jpg")
    no-repeat center center;
  background-size: cover;
  top: 0;
  right: 0;
  left: 0;
  height: 600px;
  filter: brightness(50%);
  h2 {
    background: transparent;
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 64px;
    color: $white;
  }
}
</style>
