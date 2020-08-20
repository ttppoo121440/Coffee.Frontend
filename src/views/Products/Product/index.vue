<template>
  <section class="container product-details mt-200 mb-100">
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
        class="col-md-6 my-auto"
      >
        <div class="product-details-pic">
          <img
            :src="product.imageUrl"
            class="img-fluid"
          >
        </div>
      </div>
      <ProductDetails
        v-if="product"
        :key="$route.fullPath"
        :data="product"
        :quantity.sync="quantity"
        :cart="cart"
        @addCart="addCartHandler"
      />
    </transition-group>
    <transition name="page">
      <HotProduct
        v-if="$store.state.Product.hotProduct.length !== 0"
        :product-data="product"
        :data="$store.state.Product.hotProduct"
        @qty="qty"
      />
    </transition>
  </section>
</template>

<script>
import HotProduct from '@/components/HotProduct';
import ProductDetails from '../components/ProductDetails';

export default {
  name: 'Product',
  components: {
    ProductDetails,
    HotProduct,
  },
  data() {
    return {
      quantity: 1,
      cart: [],
    };
  },
  computed: {
    product() {
      return this.$store.state.Product.product;
    },
  },
  mounted() {
    this.$store.commit('Product/CLEAR_DATA');
    this.$store.dispatch(
      'Product/getSingleProducts',
      this.$route.params.id,
    );
    this.$store.dispatch('Product/getHotProduct');
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
