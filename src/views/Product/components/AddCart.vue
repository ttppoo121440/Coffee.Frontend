<template>
  <div class="product-details-cart text-left mt-5">
    <button
      v-if="checkItem"
      class="btn"
      :class="{disabled:checkItem}"
    >
      已加到購物車
    </button>
    <button
      v-else
      :class="{disabled:quantity===999}"
      class="btn"
      @click="addCart"
    >
      加到購物車
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddCart',
  props: {
    quantity: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    checkItem() {
      return this.$store.state.Cart.goodsList.find((item) => item.product.id === this.id);
    },
  },
  methods: {
    addCart() {
      this.$emit('addCart');
    },
  },
};
</script>
