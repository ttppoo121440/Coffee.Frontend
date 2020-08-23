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
import BgTitle from '../components/BgTitle';
import NewsList from './components/NewsList';

import newsPic1 from '../../../assets/images/news1.png';
import newsPic2 from '../../../assets/images/news2.png';
import newsPic3 from '../../../assets/images/news3.png';

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
        text: '每早一杯咖啡，上班更有精神',
        date: '2020/06/25',
      },
      {
        pic: newsPic2,
        text: '七夕情人節，咖啡買一送一',
        date: '2020/07/26',
      },
      {
        pic: newsPic3,
        text: '午後下午餐時光，咖啡搭配蛋糕享八折優惠',
        date: '2020/08/23',
      },
      ]),
    };
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
