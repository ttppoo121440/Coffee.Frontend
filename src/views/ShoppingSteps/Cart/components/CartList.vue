<template>
  <div class="cart pt-5">
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
                    @calculation="changeValue"
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
                <AnimatedNumber
                  :duration="500"
                  :format-value="formatToPrice"
                  :value="cart.quantity * cart.product.price"
                />
              </div>
              <CartDelete @cartDelete="cartDelete(cart.product.id)" />
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <CartFooter
      v-if="cartList.length !== 0"
      :cart-list="cartList"
      @next="$emit('next')"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InputNumber from '@/components/InputNumber';
import AnimatedNumber from 'animated-number-vue';
import CartFooter from './CartFooter';
import CartDelete from './CartDelete';

export default {
  name: 'CartList',
  components: {
    InputNumber,
    CartFooter,
    CartDelete,
    AnimatedNumber,
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
      changeValue: 'Cart/changeValue',
    }),
    formatToPrice(value) {
      const str = value.toString();
      const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
      return `$ ${value.toFixed(0).replace(reg, '$1,')}`;
    },
  },
};
</script>
