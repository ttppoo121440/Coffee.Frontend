<template>
  <div class="list-btns">
    <button
      class="btn btn-outline btn-sm mr-2"
      @click.stop="goProductPage"
    >
      觀看更多
    </button>
    <button
      v-if="checkItem"
      class="btn btn-sm btn-sm"
      :class="{disabled:checkItem}"
    >
      已加到購物車
    </button>
    <button
      v-else
      class="btn btn-sm btn-sm"
      @click.stop="addCartHandler"
    >
      加到購物車
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
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
    goProductPage() {
      this.$emit('goProductPage');
    },
    addCartHandler() {
      this.$emit('addCartHandler');
    },
  },
};
</script>
