<template>
  <section>
    <Loading :active.sync="$store.state.Loading.loading" />
    <Banner :src="'https://cdn.stocksnap.io/img-thumbs/960w/menu-chalkboard_AO8NDC5UDL.jpg'" />
    <div class="container">
      <div class="text-center my-5">
        <h1 class="title">
          產品專區
        </h1>
      </div>
      <div class="container text-center py-5">
        <Carousel
          v-if="product.category.length !== 0"
          :categorys="product.category"
          @categoryHandler="categoryHandler"
        />
      </div>
      <ProductsList
        class="mb-5"
        :data="filterProduct"
      />
    </div>
  </section>
</template>

<script>
import Banner from '@/components/PagesHeader/Banner';
import Carousel from '@/components/Carousel';
import ProductsList from './components/ProductsList';

export default {
  name: 'Product',
  components: {
    ProductsList,
    Banner,
    Carousel,
  },
  data() {
    return {
      category: '全部',
    };
  },
  computed: {
    Pagination() {
      return {
        'total-pages': this.$store.state.Pagination.total_pages,
        current: this.$store.state.Pagination.current,
      };
    },
    product() {
      return this.$store.state.Product;
    },
    filterProduct() {
      return this.$store.state.Product.productList.filter((item) => (item.category === this.category
        ? item : this.category === '全部' ? item : false));
    },
  },
  mounted() {
    this.$store.commit('Product/CLEAR_DATA');
    this.$store.commit('Pagination/SET_CURRENT', 1);
    this.$store.dispatch('Product/getProduct');
  },
  methods: {
    categoryHandler(category) {
      this.category = category;
    },
    ChangeNav(page) {
      this.$store.commit('Pagination/SET_CURRENT', page);
      this.$store.dispatch('Product/getProduct');
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
