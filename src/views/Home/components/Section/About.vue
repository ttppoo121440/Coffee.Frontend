<template>
  <section class="bg-primary">
    <div class="row m-0">
      <div class="col-xl-6">
        <div class="about">
          <h2>澳洲人咖啡館</h2>
          <h3>關於澳洲人咖啡館</h3>
          <p>
            澳洲人咖啡於創辦人在澳洲時創立，
            本咖啡館的所有咖啡都串辦人Jethro將自家的貓咪餵食咖啡豆後所排泄烘乾製成的。
            每一杯咖啡都有貓咪本身的味道，讓你不用吸貓就可以吸食到貓咪的原汁原味，
            味道絕對不輸伊索比亞麝香貓咖啡。
          </p>
        </div>
      </div>
      <div class="col-xl-6 pr-5 pb-5">
        <img
          class="img-fluid"
          src="~@/assets/images/homeabout.png"
          alt="homeabout"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
.about{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  color: $white;
  h2{
    font-size: 72px;
    margin-right: auto;
    position: relative;
    display: block;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid $white;
  }
  h3{
    margin: 20px 0;
    font-size: 48px;
    margin-right: auto;
  }
  p{
    margin-top: 30px;
    font-size: 24px;
    line-height: 2;
    letter-spacing: 1.5px;
  }
}

</style>
