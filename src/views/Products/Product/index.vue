<template>
  <section class="container product-details mt-200">
    <Loading :active.sync="$store.state.Loading.loading" />
    <transition-group
      v-if="!$store.state.Loading.loading"
      name="page"
      appear
      tag="div"
      class="row"
    >
      <div
        :key="$route.name"
        class="col-md-6"
      >
        <div class="product-details-pic">
          <img
            :src="$store.state.Product.product.imageUrl"
            alt=""
            class="w-100 h-100"
          >
        </div>
      </div>
      <ProductDetails
        :key="$route.fullPath"
        :data="$store.state.Product.product"
        :quantity.sync="quantity"
        :cart="cart"
        @addCart="addCartHandler"
        @calculation="calculation"
      />
    </transition-group>
  </section>
</template>

<script>
import Product from '@/storeModule/Product';
import ProductDetails from '../components/ProductDetails';

export default {
  name: 'Product',
  components: {
    ProductDetails,
  },
  data() {
    return {
      quantity: 1,
      cart: [],
    };
  },
  async mounted() {
    this.$registerModule(this.$store, { Product });
    await this.$store.dispatch(
      'Product/getSingleProducts',
      this.$route.params.id,
    );
    this.getCartId();
  },
  beforeDestroy() {
    this.$unregisterModule(this.$store, ['Product']);
  },
  methods: {
    async calculation(data) {
      const qty = await this.$store.dispatch('Cart/productCalculation', data);
      this.quantity = qty;
    },
    addCart(product) {
      this.quantity = 2;
      this.$store.dispatch('Cart/addProductCart', {
        product,
        quantity: this.quantity,
      });
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
