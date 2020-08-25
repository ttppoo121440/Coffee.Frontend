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
      <NewsList :data="newsList" />
    </div>
  </section>
</template>

<script>

import newsPic1 from '@/assets/images/news1.jpg';
import newsPic2 from '@/assets/images/news2.jpg';
import newsPic3 from '@/assets/images/news3.jpg';
import NewsList from './components/NewsList.vue';
import BgTitle from '../components/BgTitle/index.vue';

export default {
  name: 'LatestNews',
  components: {
    BgTitle,
    NewsList,
  },
  data() {
    return {
      title: Object.freeze('最新消息'),
      newsList: Object.freeze([{
        pic: newsPic1,
        title: '每早一杯咖啡，上班更有精神',
        text: '早上經常喝一杯咖啡，對提高工作效率有好處',
        date: '2020/06/25',
      },
      {
        pic: newsPic2,
        title: '七夕情人節，咖啡買一送一',
        text: '情人節與情人一起喝咖啡，「精品咖啡」買 1 送 1。',
        date: '2020/07/26',
      },
      {
        pic: newsPic3,
        title: '午後下午餐時光，咖啡搭配蛋糕享八折優惠',
        text: '人生中沒有比花上幾個小時享用下午茶更幸福的了',
        date: '2020/08/23',
      },
      ]),
    };
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
