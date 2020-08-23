<template>
  <section>
    <Loading :active.sync="$store.state.Loading.loading" />
    <Banner id="banner" />
    <div class="container">
      <div class="text-center my-5">
        <h1
          class="title"
        >
          產品專區
        </h1>
      </div>
      <div class="container text-center py-5">
        <Category
          v-if="$store.state.Product.category.length !== 0"
          :categorys="$store.state.Product.category"
          @categoryHandler="categoryHandler"
        />
      </div>
      <ProductsList
        class="mb-5"
        :data="filterProduct"
      />
      <ProductsNav
        :current.sync="currentIndex"
        :page-size="pageSize"
        :category="category"
      />
    </div>
  </section>
</template>

<script>
import Banner from '@/components/PagesHeader/Banner';
import Category from '@/components/Category';
import ProductsList from './components/ProductsList';
import ProductsNav from './components/ProductsNav';

export default {
  name: 'Product',
  components: {
    ProductsList,
    Banner,
    Category,
    ProductsNav,
  },
  data() {
    return {
      category: '全部',
      nav: 0,
      current: 1,
      pageSize: 6,
    };
  },
  computed: {
    currentIndex: {
      get() {
        return this.current;
      },
      set(val) {
        const total = this.$store.state.Product.productList.length;
        if (val <= 1) {
          this.current = 1;
        } else {
          this.current = val;
        } if (Math.ceil(total / this.pageSize) < this.current) {
          this.current = Math.ceil(total / this.pageSize);
        }
      },
    },
    totalNav: {
      get() {
        return this.nav;
      },
      set(val) {
        this.nav = val;
      },
    },
    filterProduct() {
      const startNum = (this.currentIndex - 1) * this.pageSize;
      const endNum = startNum + this.pageSize;

      return this.$store.state.Product.productList.filter((item) => (item.category === this.category
        ? item : this.category === '全部' ? item : false)).slice(startNum, endNum);
    },
  },
  mounted() {
    this.$store.commit('Product/CLEAR_DATA');
    this.$store.dispatch('Product/getProduct');
  },
  methods: {
    categoryHandler(category) {
      this.category = category;
      this.currentIndex = 1;
      this.totalNav = this.filterProduct.length;
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
