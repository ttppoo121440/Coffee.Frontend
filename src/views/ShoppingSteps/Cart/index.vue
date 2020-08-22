<template>
  <section class="my-110">
    <Loading :active.sync="$store.state.Loading.loading" />
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
      <HotProduct
        v-if="$store.state.Product.hotProduct.length !== 0"
        :data="$store.state.Product.hotProduct"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import HotProduct from '@/components/HotProduct';
import CartList from './components/CartList';

export default {
  name: 'Cart',
  components: {
    CartList,
    HotProduct,
  },
  computed: {
    ...mapGetters({ getCart: 'Cart/getCart' }),
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
