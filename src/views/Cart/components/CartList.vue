<template>
  <div class="cart">
    <transition-group
      name="list"
      appear
      tag="div"
      class="w-100"
    >
      <div
        v-for="cart in cartList"
        :key="cart.product.id"
        class="cart-item"
      >
        <div class="row w-100">
          <div class="col-md-8">
            <div class="cart-detail">
              <div class="cart-pic">
                <img :src="cart.product.imageUrl">
              </div>
              <div class="cart-prduct">
                <h2 class="mb-3">
                  {{ cart.product.title }}
                </h2>
                <span>{{ cart.product.category }}</span>
                <div class="count d-flex my-3">
                  <InputNumber
                    :quantity="cart.quantity"
                    :data="cart.product"
                    @calculation="calculation"
                    @changeValue="changeValue"
                  />
                  <div class="cart-price">
                    <span> x {{ cart.product.price }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="cart-function">
              <div class="cart-price-total">
                {{ cart.quantity * cart.product.price }}
              </div>
              <div class="cart-delete">
                <button
                  class="btn p-2"
                  type="button"
                  @click="cartDelete(cart.product.id)"
                >
                  <v-icon
                    name="trash-alt"
                    scale="2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <CartFooter
      v-if="cartList.length !== 0"
      :cart-list="cartList"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InputNumber from '@/components/InputNumber';
import CartFooter from './CartFooter';

export default {
  name: 'CartList',
  components: {
    InputNumber,
    CartFooter,
  },
  props: {
    cartList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      cartDelete: 'Cart/cartDelete',
      calculation: 'Cart/calculation',
      changeValue: 'Cart/changeValue',
    }),
  },
};
</script>
