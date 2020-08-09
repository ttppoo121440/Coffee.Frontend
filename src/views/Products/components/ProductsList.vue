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
              alt="card1"
              class="w-100 h-100"
            >
          </div>
          <div class="card-content">
            <h3>
              {{ product.title }}
            </h3>
            <p>售價：{{ product.price }}</p>
            <div class="card-btns">
              <button
                class="btn btn-outline btn-sm mr-2"
                @click="goProductPage(product.id)"
              >
                觀看更多
              </button>
              <button
                class="btn btn-sm mr-2"
                @click="addCart(product)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductsList',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions({ addCart: 'Cart/addCart' }),
    goProductPage(id) {
      this.$router.push(`/Product/${id}`);
    },
  },
};
</script>
