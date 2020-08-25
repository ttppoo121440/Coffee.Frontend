<template>
  <section class="container product-details pt-200 mb-100">
    <Loading :active.sync="$store.state.Loading.loading" />
    <ProductDetails
      v-if="product"
      :data="product"
      :quantity.sync="quantity"
      @addCart="addCartHandler"
    />
    <HotProduct
      v-if="$store.state.Product.hotProduct.length !== 0"
      :product-data="product"
      :data="$store.state.Product.hotProduct"
      @qty="qty"
    />
  </section>
</template>

<script>
import HotProduct from '@/components/HotProduct/index.vue';
import ProductDetails from './components/ProductDetails.vue';

export default {
  name: 'Product',
  components: {
    ProductDetails,
    HotProduct,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    product() {
      return this.$store.state.Product.product;
    },
  },
  async mounted() {
    this.$store.commit('Product/CLEAR_DATA');
    await this.$store.dispatch('Product/getSingleProducts', this.$route.params.id);
    await this.$store.dispatch('Product/getHotProduct');
    this.getCartId();
  },
  methods: {
    qty(qty) {
      if (qty !== 0) {
        this.quantity = qty;
      }
    },
    addCart(product) {
      this.quantity = 2;
      this.$store.dispatch('Cart/addCart', product);
    },
    editCart(product) {
      this.quantity += 1;
      this.$store.dispatch('Cart/editCart', {
        product,
        quantity: this.quantity,
      });
    },
    addCartHandler(product) {
      const list = this.$store.state.Cart.goodsList.find(
        (item) => item.product.id === product.id,
      );
      if (!list) {
        this.addCart(product);
      } else {
        this.editCart(product);
      }
      this.$notify({
        group: 'foo',
        type: 'success',
        title: '提示',
        text: '加入購物車成功!',
      });
    },
    getCartId() {
      const list = this.$store.state.Cart.goodsList.find(
        (item) => item.product.id === this.$route.params.id,
      );
      if (!list) {
        this.quantity = 1;
      } else {
        this.quantity = list.quantity;
      }
    },
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
