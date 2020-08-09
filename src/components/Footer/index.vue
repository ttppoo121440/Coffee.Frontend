<template>
  <footer class="bg-primary text-white footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Menu :class-name="'footer-menu'" />
        </div>
        <div class="col-md-6">
          <div class="information">
            <Social />
            <p>04-12345678</p>
            <p>ttppoo12144@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p class="m-0">
        Copyright © Full Land Industrial Corp. All rights
      </p>
    </div>
  </footer>
</template>

<script>
import Menu from '@/components/Menu';
import Social from '@/components/Social';

export default {
  name: 'Footer',
  components: {
    Menu,
    Social,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  .information {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;

    @include media-down(sm) {
      width: 100%;
      margin-top: 20px;
      align-items: center;
    }
    .social {
      margin-bottom: 20px;
      margin-right: 0 !important;
      a {
        color: $white;
        padding: 10px;
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }

  .footer-menu {
    display: flex;
    padding: 0;
    margin: 0;

    @include media-down(lg) {
      flex-wrap: wrap;
      text-align: center;
    }
    &-item {
      display: flex;

      @include media-down(lg) {
        width: 50%;
      }
      @include media-down(md) {
        width: auto;
      }
      @include media-down(sm) {
        width: 50%;
      }
      a {
        display: block;
        color: $white;
        font-weight: 700;
        padding: 113px 35px;

        @include media-down(lg) {
          padding: 30px;
        }
        @include media-down(sm) {
          width: 100%;
          padding: 20px;
        }
      }
    }
  }

  .copyright {
    background: #000;
    text-align: center;
    padding: 27px;
  }
}
</style>
