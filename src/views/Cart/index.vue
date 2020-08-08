<template>
  <section class="mt-200">
    <h1 class="text-center">
      購物車
    </h1>
    <div class="container">
      <CartList
        :cart-list="getCart"
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
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.cart {
  margin: 50px 0;

  &-item {
    width: 100%;
    display: flex;
    padding: 10px 0;
    border-top: 1px solid $primary;

    .col-md-8 {
      @include media-down(sm) {
        padding-right: 0;
      }
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }
    div {
      align-self: center;
    }
  }
  &-detail {
    display: flex;
  }

  &-pic {
    padding: 15px 15px 15px 0;
    img {
      width: 150px;
      height: 150px;
      @include media-down(sm) {
        width: 75px;
        height: 75px;
      }
    }
  }
  &-prduct {
    padding-left: 50px;
    @include media-down(sm) {
      padding: 0;
    }
  }
  &-price-total {
    margin-right: auto;
    font-size: 1.5rem;
    @include media-down(sm) {
      margin-left: auto;
      margin-right: 0;
    }
  }
  &-price {
    padding-left: 20px;
    font-size: 20px;
    margin-left: auto;
    @include media-down(sm) {
      padding-left: 10px;
    }
  }

  &-function {
    display: flex;
    @include media-down(sm) {
      flex-direction: row-reverse;
    }
  }
}
</style>
