<template>
  <section class="my-110">
    <div class="text-center my-5">
      <h1
        v-if="this.$store.state.Cart.goodsList.length !== 0"
        class="title"
      >
        購物車
      </h1>
      <div
        v-else
      >
        <h1 class="d-block mb-5">
          您的購物車是空的，
          趕快加入喜歡的商品吧！
        </h1>
        <button
          type="button"
          class="btn"
          @click="$router.push('/products')"
        >
          繼續購物
        </button>
      </div>
    </div>
    <div class="container">
      <CartList
        :cart-list="getCart"
        @next="$emit('next')"
      />
    </div>
    <div class="container">
      <HotProduct
        :data="hotProductData"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import HotProduct from '@/components/HotProduct/index.vue';
import CartList from './components/CartList.vue';

export default {
  name: 'Cart',
  components: {
    CartList,
    HotProduct,
  },
  computed: {
    ...mapGetters({ getCart: 'Cart/getCart' }),
    hotProductData() {
      return this.$store.state.Product.hotProduct.length === 0 ? []
        : this.$store.state.Product.hotProduct;
    },
    bindingStep: {
      get() {
        return this.step;
      },
      set(value) {
        this.$emit('update:step', value);
      },
    },
  },
  mounted() {
    this.$store.commit('Product/CLEAR_DATA');
    this.$store.dispatch('Product/getHotProduct');
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
