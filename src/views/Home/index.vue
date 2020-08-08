<template>
  <div class="container-fluid p-0">
    <Header />
    <Carousel />
    <About />
    <Navbar />
    <LatestNews />
    <HotProduct />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/Section/About';
import LatestNews from './components/Section/LatestNews';
import HotProduct from './components/Section/HotProduct';

export default {
  name: 'Home',
  components: {
    Header,
    Carousel,
    About,
    LatestNews,
    HotProduct,
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
