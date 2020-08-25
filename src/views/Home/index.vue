<template>
  <div class="container-fluid p-0">
    <component
      :is="component"
      v-for="component in componentList"
      :key="component"
    />
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue';
import Navbar from './components/Navbar/index.vue';
import Header from './components/Header/index.vue';
import BannerBlock from './components/BannerBlock/index.vue';
import About from './About/index.vue';
import LatestNews from './LatestNews/index.vue';
import HotProduct from './HotProduct/index.vue';

export default {
  name: 'Home',
  components: {
    Header,
    BannerBlock,
    About,
    LatestNews,
    HotProduct,
    Navbar,
    Footer,
  },
  data() {
    return {
      componentList: [
        'Header',
        'BannerBlock',
        'About',
        'LatestNews',
        'HotProduct',
        'Navbar',
        'Footer',
      ],
    };
  },
  mounted() {
    this.$store.commit('Product/CLEAR_DATA');
    this.$store.dispatch('Product/getHotProduct');
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
