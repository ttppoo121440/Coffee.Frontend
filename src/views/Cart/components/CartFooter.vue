<template>
  <div class="cart-footer">
    <div class="row">
      <div class="col-md-6">
        <div class="bg-light p-4">
          <h3 class="mb-5 text-center border-bottom pb-3">
            訂單摘要
          </h3>
          <div class="my-5 d-flex">
            <h4 class="mr-auto">
              總數
            </h4> <h5>{{ cartItemTotal }}</h5>
          </div>
          <div class="my-5 d-flex">
            <h4 class="mr-auto">
              總金額
            </h4>
            <h5>${{ cartPriceTotal }}</h5>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-outline btn-big w-100 mb-5"
            @click="$router.push('/products')"
          >
            繼續購物
          </button>
          <button
            type="button"
            class="btn btn-big w-100"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CartFooter',
  props: {
    cartList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({ cartPriceTotal: 'Cart/cartPriceTotal', cartItemTotal: 'Cart/cartItemTotal' }),
  },
  methods: {
    ...mapActions({ clearCart: 'Cart/clearCart' }),
  },
};
</script>
