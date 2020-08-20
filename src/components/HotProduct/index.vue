<template>
  <section class="list-hot no-bg">
    <div class="p-3">
      <h2 class="border-title ">
        熱門商品
      </h2>
    </div>
    <div>
      <VueSlickCarousel
        v-bind="settings"
        class="w-100 list"
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
              <div class="list-btns">
                <button
                  class="btn btn-outline btn-sm mr-2"
                  @click="goProductPage(product.id)"
                >
                  觀看更多
                </button>
                <button
                  class="btn btn-sm btn-sm"
                  @click="addCartHandler(product)"
                >
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import { mapActions } from 'vuex';

export default {
  name: 'CarouselHome',
  components: { VueSlickCarousel },
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
      settings: {
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
      },
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
