<template>
  <section class="my-110">
    <div class="text-center my-5">
      <h1 class="title">
        購物車
      </h1>
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

<style lang="scss" src="./style.scss">
.test {
  position: relative;
}
</style>
