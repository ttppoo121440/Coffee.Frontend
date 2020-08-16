<template>
  <div class="container mt-200">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="success">
          <div class="success-box text-primary">
            <h2>
              訂單完成
            </h2>
            <p class="px-3">
              12個小時內，我們將會有專人與您聯絡。謝謝!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mb-100">
      <div class="col-md-6">
        <div class="success mt-5">
          <button
            type="button"
            class="btn btn-outline  w-100 mb-5"
            @click="$router.push('/')"
          >
            回首頁
          </button>
          <button
            type="button"
            class="btn  w-100"
            @click="$router.push('/products')"
          >
            繼續購物
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success',
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";

.success {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    width: 100%;
    height: 193px;
    border: 1px solid $primary;
    h2 {
      font-weight: bold;
      margin-bottom: 30px;
      font-size: 36px;
    }
  }
}
</style>
