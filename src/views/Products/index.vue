<template>
  <section>
    <Loading :active.sync="$store.state.Loading.loading" />
    <Banner :src="'https://cdn.stocksnap.io/img-thumbs/960w/menu-chalkboard_AO8NDC5UDL.jpg'" />
    <div class="container">
      <h1 class="text-center my-5">
        產品專區
      </h1>
      <ProductsList
        class="mb-5"
        :data="productList"
      />
      <Pagination
        v-if="productList.length !==0"
        v-bind="Pagination"
        @ChangeNav="ChangeNav"
      />
    </div>
  </section>
</template>

<script>
import Pagination from '@/components/Pagination';
import Banner from '@/components/PagesHeader/Banner';
import Product from '@/storeModule/Product';
import ProductsList from './components/ProductsList';

export default {
  name: 'Product',
  components: {
    Pagination,
    ProductsList,
    Banner,
  },
  computed: {
    Pagination() {
      return {
        'total-pages': this.$store.state.Pagination.total_pages,
        current: this.$store.state.Pagination.current,
      };
    },
    productList() {
      return this.$store.state.Product === undefined ? []
        : this.$store.state.Product.productList;
    },
  },
  mounted() {
    this.$registerModule(this.$store, { Product });
    this.$store.commit('Pagination/SET_CURRENT', 1);
    this.$store.dispatch('Product/getProduct');
  },
  beforeDestroy() {
    this.$unregisterModule(this.$store, ['Product']);
  },
  methods: {
    ChangeNav(page) {
      this.$store.commit('Pagination/SET_CURRENT', page);
      this.$store.dispatch('Product/getProduct');
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
