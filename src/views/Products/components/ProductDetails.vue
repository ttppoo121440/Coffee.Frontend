<template>
  <div class="col-md-6">
    <div class="product-details-content">
      <span class="py-3 text-primary">產品專區/{{ data.category }}</span>
      <h1 class="py-3">
        {{ data.title }}
      </h1>
      <p>{{ data.description }}</p>
    </div>
    <div class="product-details-function mb-5">
      <div class="product-details-price mt-3">
        <span class="mr-5">售價： {{ data.price }} </span>
        <InputNumber
          :quantity="bindingValue"
          :data="data"
          @calculation="calculation"
          @changeValue="changeValue"
        />
      </div>
      <div class="product-details-cart text-left mt-3">
        <button
          class="btn mr-2"
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
      this.$emit('calculation', { product: data.product, quantity: data.quantity });
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
      console.log(list);
      if (!list) {
        this.addCart(data.product);
      } else {
        this.editCart(data);
      }
    },
  },
};
</script>
