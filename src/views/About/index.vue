<template>
  <section>
    <Banner
      :src="
        'https://cdn.stocksnap.io/img-thumbs/960w/menu-chalkboard_AO8NDC5UDL.jpg'
      "
    />
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
              喵喵咖啡在於創辦人在澳洲時創立，本咖啡館的所有咖啡都串辦人
              Jethro
              將自家的貓咪餵食咖啡豆後所排泄烘乾製成的。每一杯咖啡都有貓咪本身的味道，
              讓你不用吸貓就可以吸食到貓咪的原汁原味，味道絕對不輸伊索比亞麝香貓咖啡。
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
            <span>1998</span>
          </div>
        </li>
      </ul>
      <div class="time-content">
        <p>
          這一天創辦人在家寫code，拿起一 旁的咖啡喝了一口，越喝越賭爛，
          才發現自家的貓在咖啡中拉屎了。 但從沒寫到這貓屎咖啡竟然有提神 的功效!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from '@/components/PagesHeader/Banner';

export default {
  name: 'About',
  components: {
    Banner,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
