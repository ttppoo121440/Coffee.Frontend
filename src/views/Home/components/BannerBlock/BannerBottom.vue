<template>
  <div class="banner-bottom">
    <div class="banner-bottom-box">
      <span class="w-100">喵喵咖啡館</span>
    </div>
    <div class="ml-auto mr-5">
      <span class="banner-bottom-line">喵喵咖啡館</span>
    </div>
    <div
      class="banner-bottom-more"
      @click.prevent="gotoAbout"
    >
      <div class="pl-xl-5 pl-lg-0 banner-bottom-more-click">
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
import scrollTo from '@/components/ScrollTo';

export default {
  name: 'BannerBottom',
  mixins: [scrollTo],
  methods: {
    gotoAbout() {
      const anchor = document.querySelector('#more');
      this.scrollTo(anchor.offsetHeight);
    },
  },
};
</script>
