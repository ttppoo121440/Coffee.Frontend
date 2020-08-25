<template>
  <section class="list-hot">
    <Loading
      :active.sync="$store.state.Loading.loading"
      :is-full-page="false"
    />
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
      <transition
        v-if="hotProductData.length!==0"
        name="page"
        appear
        tag="div"
      >
        <HotList :data="hotProductData" />
      </transition>
      <div class="text-center pb-5 p-3">
        <button
          class="btn btn-outline btn-big"
          type="button"
          @click="$router.push('/products')"
        >
          了解更多
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import BgTitle from '../components/BgTitle/index.vue';
import HotList from './components/HotList.vue';

export default {
  name: 'HomeHotProduct',
  components: {
    BgTitle,
    HotList,
  },
  data() {
    return {
      title: '熱門產品',
    };
  },
  computed: {
    hotProductData() {
      return this.$store.state.Product.hotProduct.length === 0 ? []
        : this.$store.state.Product.hotProduct;
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
