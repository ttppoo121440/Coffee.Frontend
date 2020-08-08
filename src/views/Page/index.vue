<template>
  <div>
    <PagesHeader />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import PagesHeader from '@/components/PagesHeader';

export default {
  name: 'Page',
  components: {
    PagesHeader,
    Footer,
  },
};
</script>

<style>

</style>
