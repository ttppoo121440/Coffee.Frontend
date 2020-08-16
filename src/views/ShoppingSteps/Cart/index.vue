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
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CartList from './components/CartList';

export default {
  name: 'Cart',
  components: {
    CartList,
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
};
</script>

<style lang="scss" src="./style.scss"></style>
