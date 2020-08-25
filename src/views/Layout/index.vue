<template>
  <div>
    <PagesHeader />
    <router-view
      id="v-content"
      :style="{ minHeight: Height + 'px' }"
    />
    <Footer id="footer" />
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
  data() {
    return {
      Height: 0,
    };
  },
  mounted() {
    const footer = document.querySelector('#footer');
    this.Height = document.documentElement.clientHeight - footer.offsetHeight - 100;
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - footer.offsetHeight - 100;
    };
  },
};
</script>
