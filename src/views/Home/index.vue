<template>
  <div class="container-fluid p-0">
    <Loading :active.sync="$store.state.Loading.loading" />
    <Header />
    <BannerBlock />
    <About />
    <Navbar />
    <LatestNews />
    <HotProduct v-if="this.$store.state.Product.hotProduct.length !== 0" />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BannerBlock from './components/BannerBlock';
import About from './About';
import LatestNews from './LatestNews';
import HotProduct from './HotProduct';

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
  mounted() {
    this.$store.commit('Product/CLEAR_DATA');
    this.$store.dispatch('Product/getHotProduct');
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
