<template>
  <section class="home-list-news">
    <BgTitle
      :class-name="'left'"
      :title="title"
    />
    <div class="container">
      <div class="p-3">
        <h2 class="border-title">
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
import BgTitle from '../components/BgTitle';

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

<style lang="scss" src="./style.scss"></style>
