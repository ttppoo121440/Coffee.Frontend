<template>
  <div class="product-details-price mt-5">
    <span class="mr-5">售價： {{ data.price }} </span>
    <InputNumber
      :quantity="bindingValue"
      :data="data"
      @calculation="changeValue"
      @changeValue="changeValue"
    />
  </div>
</template>

<script>
import InputNumber from '@/components/InputNumber/index.vue';

export default {
  name: 'DetailPic',
  components: {
    InputNumber,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    quantity: {
      type: Number,
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
    setQty(data) {
      this.$store.state.Cart.goodsList.find((item) => {
        if (item.product.id === data.product.id) {
          this.bindingValue = data.quantity;
        }
        return false;
      });
    },
    changeValue(data) {
      this.$store.dispatch('Cart/changeValue', data);
      this.setQty(data);
    },
  },
};
</script>
