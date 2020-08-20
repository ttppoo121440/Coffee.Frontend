<template>
  <section class="list-hot">
    <BgTitle
      :class-name="'right'"
      :title="title"
    />
    <div class="container">
      <div class="p-3">
        <h2 class="border-title">
          {{ title }}
        </h2>
      </div>
      <div class="row mx-0 list">
        <Carousel :data="product.hotProduct" />
      </div>
      <div class="text-center pb-5 p-3">
        <button
          class="btn btn-outline btn-big"
          type="button"
          @click="$router.push('/products')"
        >
          More
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import BgTitle from '../components/BgTitle';
import Carousel from '../components/Carousel';

export default {
  name: 'HotProduct',
  components: {
    BgTitle,
    Carousel,
  },
  data() {
    return {
      title: '熱門產品',
    };
  },
  computed: {
    product() {
      return this.$store.state.Product;
    },
  },
};
</script>

<style lang="scss" src="./style.scss">

</style>
