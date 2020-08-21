<template>
  <section class="list-hot no-bg">
    <div class="p-3">
      <h2 class="border-title ">
        熱門商品
      </h2>
    </div>
    <SlickCarousel
      :data="data"
      :product-data="productData"
      @goProductPage="goProductPage"
      @addCartHandler="addCartHandler"
    />
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import SlickCarousel from './SlickCarousel';

export default {
  name: 'CarouselHome',
  components: { SlickCarousel },
  props: {
    data: {
      type: Array,
      required: true,
    },
    productData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions({ addCart: 'Cart/addCart' }),
    goProductPage(id) {
      this.$router.push(`/Product/${id}`).catch(() => {});
    },
    addCartHandler(product) {
      this.addCart(product);
      if (this.productData !== undefined) {
        this.getQty(product);
      }
    },
    getQty(data) {
      let qty = 0;
      this.$store.state.Cart.goodsList.find((item) => {
        if (this.productData.id === data.id) {
          qty = item.quantity;
          return qty;
        }
        return qty;
      });
      this.$emit('qty', qty);
    },
  },
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
