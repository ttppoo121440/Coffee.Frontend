<template>
  <div class="carousel-side">
    <div class="carousel-side-text">
      <span class="mb-4 d-inline-block">
        歡迎來到
      </span>
      <span>
        澳洲人咖啡館
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselSide',
};
</script>

<style lang="scss">
.carousel-side {
  width: 170px;
  height: 613px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &-text {
    width: 20px;
    display: inline-block;
    word-wrap: break-word;
  }
}
</style>
