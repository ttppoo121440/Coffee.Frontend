<template>
  <section class="home-list-hot">
    <BgTitle
      :class-name="'right'"
      :title="title"
    />
    <div class="container">
      <div class="p-3">
        <h2 class="home-border-title">
          {{ title }}
        </h2>
      </div>
      <div class="row mx-0 list">
        <div class="col-md-6 col-xl-4 col-lg-4">
          <div class="list-item">
            <div class="list-pic mb-2">
              <img
                src="~@/assets/images/pexels-photo-4457107.png"
                alt="list1"
                class="w-100 h-100"
              >
            </div>
            <div class="list-content">
              <h3>
                貓屎咖啡豆
              </h3>
              <p>售價：999</p>
              <div class="list-btns">
                <button class="btn btn-outline btn-sm mr-2">
                  觀看更多
                </button>
                <button class="btn btn-sm btn-sm">
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-lg-4">
          <div class="list-item">
            <div class="list-pic mb-2">
              <img
                src="~@/assets/images/pexels-photo-4457107.png"
                alt="list1"
                class="w-100 h-100"
              >
            </div>
            <div class="list-content">
              <h3>
                貓屎咖啡豆
              </h3>
              <p>售價：999</p>
              <div class="list-btns">
                <button class="btn btn-outline btn-sm mr-2">
                  觀看更多
                </button>
                <button class="btn btn-sm">
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-lg-4">
          <div class="list-item">
            <div class="list-pic mb-2">
              <img
                src="~@/assets/images/pexels-photo-4457107.png"
                alt="list1"
                class="w-100 h-100"
              >
            </div>
            <div class="list-content">
              <h3>
                貓屎咖啡豆
              </h3>
              <p>售價：999</p>
              <div class="list-btns">
                <button class="btn btn-outline btn-sm mr-2">
                  觀看更多
                </button>
                <button class="btn btn-sm">
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pb-5 p-3">
        <button
          class="btn btn-outline btn-big"
          type="button"
          @click="$router.push('/products')"
        >
          More
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import BgTitle from '../BgTitle';

export default {
  name: 'HotProduct',
  components: {
    BgTitle,
  },
  data() {
    return {
      title: '熱門產品',
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.home-list-hot {
  position: relative;
  padding-bottom: 65px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 50%;
    bottom: 0;
    background: $primary;
    opacity: 0.1;
    z-index: -1;
  }
  .list {
    margin: 175px 0 100px;

    @include media-down(sm) {
      margin: 0 0 100px;
    }

    .col-xl-4 {
      padding: 0;
      &:not(:last-child) {
        padding-right: 30px;
        @include media-down(lg) {
          padding: 15px;
        }
      }
      @include media-down(lg) {
        padding: 15px;
      }
    }
    &-item {
      width: 100%;
      background: $white;
      box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.15);
      .list-pic {
        padding: 20px;
      }
      .list-btns .btn {
        width: 100%;
        padding: 10px 0;
        margin: 10px 0;
      }
    }
    &-pic {
      height: 320px;
    }
    &-content {
      padding: 0 20px 20px 20px;
      color: $primary;
      font-weight: 700;
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  .btn {
    @include media-down(sm) {
      width: 100%;
      padding: 10px 0;
    }
  }
}
</style>
