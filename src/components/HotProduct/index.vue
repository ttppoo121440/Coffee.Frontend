<template>
  <section class="list-hot no-bg">
    <Loading
      :active.sync="$store.state.Loading.loading"
      :is-full-page="false"
    />
    <div
      :key="title"
      class="p-3"
    >
      <h2 class="border-title ">
        {{ title }}
      </h2>
    </div>
    <transition
      name="page"
      appear
    >
      <SlickCarousel
        v-if="data.length!==0"
        :key="$options.name"
        :data="data"
        :product-data="productData"
        @goProductPage="goProductPage"
        @addCartHandler="addCartHandler"
      />
    </transition>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import SlickCarousel from './SlickCarousel.vue';

export default {
  name: 'HotProduct',
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
  data() {
    return {
      title: Object.freeze('熱門商品'),
    };
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
      this.$notify({
        group: 'foo',
        type: 'success',
        title: '提示',
        text: '加入購物車成功!',
      });
    },
    getQty() {
      this.$store.state.Cart.goodsList.forEach((item) => {
        if (this.productData.id === item.product.id) {
          this.$emit('qty', item.quantity);
        }
      });
    },
  },
};
</script>

<style lang="scss"  scoped src="./style.scss"></style>
