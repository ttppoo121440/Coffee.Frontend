<template>
  <div class="banner-bottom">
    <div class="banner-bottom-box">
      <span class="w-100">澳洲人咖啡館</span>
    </div>
    <div class="ml-auto mr-5">
      <span class="banner-bottom-line">澳洲人咖啡</span>
    </div>
    <div class="banner-bottom-more">
      <div class="pl-5 banner-bottom-more-click">
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
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";

.banner-bottom {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: calc(100% - 565px);
  height: 100px;
  line-height: 100px;
  &-box {
    width: 170px;
    color: $white;
    text-align: center;
    background: $primary;
  }
  &-line {
    position: relative;
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
      span {
        margin-left: 50px;
      }
      &-click {
        cursor: pointer;
        a:hover {
          color: $white !important;
        }
      }
    }
}
</style>
