<template>
  <section class="home-list-news">
    <BgTitle
      :class-name="'left'"
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
            <span class="text-primary">2020/06/25</span>
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
            <span class="text-primary">2020/06/25</span>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-lg-4">
          <div class="list-item">
            <div class="list-pic mb-2">
              <img
                src="~@/assets/images/Group 215.png"
                alt="list1"
                class="w-100 h-100"
              >
            </div>
            <span class="text-primary">2020/06/25</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BgTitle from '../BgTitle';

export default {
  name: 'LatestNews',
  components: {
    BgTitle,
  },
  data() {
    return {
      title: '最新消息',
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.home-list-news {
  position: relative;
  padding-bottom: 65px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    right: 0;
    bottom: 0;
    background: $primary;
    opacity: 0.1;
    z-index: -1;
  }
  .list {
    margin: 175px 0 100px;

    @include media-down(sm) {
      margin: 0;
    }

    .col-xl-4 {
      padding: 15px ;

      &:not(:first-child) {
        @include media-down(sm) {
          display: none;
        }
      }
    }
    &-item {
      width: 100%;
    }
    &-pic {
      height: 320px;
    }
  }
}

.home-border-title {
  position: relative;
  color: $primary;
  border-bottom: 1px solid $primary;
  padding: 110px 0 30px;
  font-size: 54px;
  z-index: 100;
}
</style>
