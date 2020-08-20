<template>
  <div class="col-md-6">
    <div class="product-details-content">
      <span class="py-3 text-primary"><router-link
        class="text-primary"
        to="/products"
      >
        產品專區</router-link>/{{ data.category }}</span>
      <div class="text-left my-5">
        <h1>
          {{ data.title }}
        </h1>
      </div>
      <p>{{ data.description }}</p>
    </div>
    <div class="product-details-function mb-5">
      <div class="product-details-price mt-5">
        <span class="mr-5">售價： {{ data.price }} </span>
        <InputNumber
          :quantity="bindingValue"
          :data="data"
          @calculation="calculation"
          @changeValue="changeValue"
        />
      </div>
      <div class="product-details-cart text-left mt-5">
        <button
          class="btn"
          :class="{disabled:quantity===999}"
          @click="$emit('addCart', data,bindingValue)"
        >
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from '@/components/InputNumber';

export default {
  name: 'ProductDetails',
  components: {
    InputNumber,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    bindingValue: {
      get() {
        return this.quantity;
      },
      set(value) {
        this.$emit('update:quantity', value);
      },
    },
  },
  methods: {
    calculation(data) {
      if (data.quantity === 2) {
        this.$store.dispatch('Cart/productCalculation', data);
        this.bindingValue = 2;
      } else {
        this.$store.commit('Cart/GET_QTY', data);
        this.setQty(data);
      }
    },
    setQty(data) {
      this.$store.state.Cart.goodsList.find((item) => {
        if (item.product.id === data.product.id) {
          this.bindingValue = item.quantity;
        }
        return false;
      });
    },
    addCart(product) {
      this.bindingValue = 2;
      this.$store.dispatch('Cart/addProductCart', { product, quantity: this.quantity });
    },
    editCart(data) {
      this.bindingValue = data.quantity;
      this.$store.dispatch('Cart/editCart', { product: data.product, quantity: data.quantity });
    },
    changeValue(data) {
      const list = this.$store.state.Cart.goodsList.find((item) => item.product.id
       === data.product.id);
      if (!list) {
        this.addCart(data.product);
      } else {
        this.editCart(data);
      }
    },
  },
};
</script>
