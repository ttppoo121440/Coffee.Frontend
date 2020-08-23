<template>
  <VueSlickCarousel
    v-bind="settings"
    class="w-100"
  >
    <div
      v-for="product in data"
      :key="product.id"
      class="p-3"
    >
      <div class="list-item">
        <div class="list-pic mb-2">
          <img
            :src="product.imageUrl"
            alt="list1"
            class="img-fluid"
            draggable="false"
          >
        </div>
        <div class="list-content">
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
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import { mapActions } from 'vuex';
import Buttons from '@/components/HotProduct/Buttons';

export default {
  name: 'HotList',
  components: { VueSlickCarousel, Buttons },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: Object.freeze({
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      }),
    };
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

<style lang="scss"  src="./style.scss"></style>
