<template>
  <section class="mt-200">
    <Step :active="0" />
    <h1 class="text-center mt-5">
      購物車
    </h1>
    <div class="container">
      <CartList :cart-list="getCart" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Step from '@/components/Step';
import CartList from './components/CartList';

export default {
  name: 'Cart',
  components: {
    CartList,
    Step,
  },
  computed: {
    ...mapGetters({ getCart: 'Cart/getCart' }),
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
