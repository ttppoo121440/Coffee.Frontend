<template>
  <section>
    <Banner />
    <div class="container">
      <div class="text-center my-100">
        <h1 class="title">
          關於我們
        </h1>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="row about m-0">
        <div class="col-lg-5 p-0">
          <div class="about-content">
            <p>
              喵喵咖啡館在於創辦人在澳洲時創立，我們的理念很簡單-提供優質的食物和咖啡，
              咖啡具有使人們停下來和彼此互動的能力。人與人之間的聯繫就是我們在這裡的原因，有時我們意識到這就像兩個拿鐵一樣簡單。
              享用咖啡，早餐或午餐，我們隨時為您服務！
            </p>
            <span>1999</span>
          </div>
        </div>
        <div class="col-lg-7 about-pic" />
      </div>
    </div>
    <div class="container-fluid px-0">
      <ul class="time-horizontal">
        <li>
          <b />
          <div class="year">
            <span>1998</span>
          </div>
        </li>
        <li>
          <b />
          <div class="year">
            <span>1999</span>
          </div>
        </li>
        <li>
          <b />
          <div class="year">
            <span>2000</span>
          </div>
        </li>
      </ul>
      <div class="time-content">
        <p>
          這一天創辦人在家寫Code，拿起一旁的咖啡喝了一口，越喝越有靈感，
          越寫越起勁，才發現原來咖啡這麼棒，最後放棄寫Code跑去開咖啡館了！
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from '@/components/PagesHeader/Banner.vue';

export default {
  name: 'About',
  components: {
    Banner,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
