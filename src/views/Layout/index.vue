<template>
  <div>
    <PagesHeader />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue';
import PagesHeader from '@/components/PagesHeader/index.vue';

export default {
  name: 'Layout',
  components: {
    PagesHeader,
    Footer,
  },
};
</script>
