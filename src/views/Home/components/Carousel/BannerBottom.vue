<template>
  <div class="banner-bottom">
    <div class="banner-bottom-box">
      <span class="w-100">喵喵咖啡館</span>
    </div>
    <div class="ml-auto mr-5">
      <span class="banner-bottom-line">喵喵咖啡</span>
    </div>
    <div
      class="banner-bottom-more"
      @click.prevent="gotoAbout"
    >
      <div
        class="pl-xl-5 pl-lg-0 banner-bottom-more-click"
      >
        <a
          href="#"
          class="text-white mr-5"
        >點我觀看更多</a>
        <v-icon
          name="chevron-down"
          scale="2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerBottom',
  methods: {
    gotoAbout() {
      const anchor = document.querySelector('#more');
      window.scrollTo({
        top: anchor.offsetHeight,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.banner-bottom {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: calc(100% - 565px);
  height: 100px;
  line-height: 100px;

  @include media-down(lg) {
    width: calc(100% - 200px);
  }
  @include media-down(sm) {
    position: absolute;
    bottom: 0;
  }

  &-box {
    width: 170px;
    color: $white;
    text-align: center;
    background: $primary;
    @include media-down(lg) {
      color: $primary;
      width: 100px;
    }
    @include media-down(sm) {
      display: none;
    }
  }
  &-line {
    position: relative;
    @include media-down(sm) {
      display: none;
    }
    &::before {
      z-index: -1;
      content: "";
      width: 200px;
      height: 1px;
      position: absolute;
      bottom: 10px;
      left: -215px;
      border-bottom: 1px solid $primary;
    }
  }

  &-more {
    position: absolute;
    width: 565px;
    background: $primary;
    right: -565px;
    height: 200px;
    bottom: 0;
    line-height: 200px;
    color: $white;
    cursor: pointer;

    @include media-down(lg) {
      width: 200px;
      display: flex;
      right: -200px;
    }

    @include media-down(sm) {
      line-height: 100px;
      height: 100px;
      right: 0;
      left: 0;
    }

    a {
      @include media-down(lg) {
        display: none;
      }
    }

    span {
      margin-left: 50px;
    }
    &-click {

      @include media-down(lg) {
        margin: 0 auto;
      }

      a:hover {
        color: $white !important;
      }
    }
  }
}
</style>
