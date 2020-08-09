<template>
  <div class="d-flex">
    <button
      class="btn btn-sm btn-right"
      :class="{disabled:quantity===1}"
      @click="calculation(data, quantity - 1)"
    >
      -
    </button>
    <input
      :value="quantity"
      type="text"
      class="text-center btn-input"
      maxlength="3"
      @change="changeValue"
    >
    <button
      class="btn btn-sm btn-left"
      :class="{disabled:quantity===999}"
      @click="calculation(data, quantity + 1)"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: {
    quantity: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    calculation(product, quantity) {
      this.$emit('calculation', { product, quantity });
    },
    changeValue(quantity) {
      if (Number(quantity.target.value) < 1) {
        const temp = quantity;
        temp.target.value = 1;
        this.$emit('changeValue', { quantity: Number(quantity.target.value), product: this.data });
      } else {
        this.$emit('changeValue', { quantity: Number(quantity.target.value), product: this.data });
      }
    },
  },
};
</script>
