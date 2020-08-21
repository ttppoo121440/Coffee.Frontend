<template>
  <ul
    ref="navbarMenu"
    :class="className"
    :style="Height"
    class="list"
  >
    <li
      v-for="menu in menus"
      :key="menu.name"
      :class="className+'-item'"
    >
      <router-link :to="menu.router">
        {{ menu.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    className: {
      type: String,
      required: true,
    },
    menuHeight: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      menus: Object.freeze([
        { name: '首頁', router: '/' },
        { name: '關於我們', router: '/about' },
        { name: '產品專區', router: '/products' },
        { name: '購物車', router: '/cart' },
      ]),
    };
  },
  computed: {
    Height() {
      return {
        height: this.menuHeight,
      };
    },
  },
};
</script>
