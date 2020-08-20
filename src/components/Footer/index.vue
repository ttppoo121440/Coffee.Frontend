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

<style lang="scss" src="./style.scss"></style>
