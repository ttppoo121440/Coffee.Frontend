<template>
  <div class="container">
    <transition-group
      name="page"
      appear
      tag="div"
      class="row mx-0 card"
    >
      <div
        v-for="product in data"
        :key="product.id"
        class="col-md-6 col-xl-4 col-lg-6 my-3"
      >
        <div class="card-item">
          <div class="card-pic mb-2">
            <img
              :src="product.imageUrl"
              class="img-fluid"
            >
          </div>
          <div class="card-content">
            <h3>
              {{ product.title }}
            </h3>
            <p>售價：{{ product.price }}</p>
            <Buttons
              @goProductPage="goProductPage(product.id)"
              @addCartHandler="addCartHandler(product)"
            />
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Buttons from '@/components/HotProduct/Buttons.vue';

export default {
  name: 'ProductsList',
  components: {
    Buttons,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions({ addCart: 'Cart/addCart' }),
    goProductPage(id) {
      this.$router.push(`/Product/${id}`).catch(() => {});
    },
    addCartHandler(product) {
      this.addCart(product);
      this.$notify({
        group: 'foo',
        type: 'success',
        title: '提示',
        text: '加入購物車成功!',
      });
    },
  },
};
</script>
