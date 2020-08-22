<template>
  <div
    class="col-md-6 my-auto"
  >
    <div class="product-details-pic">
      <img
        :src="pic"
        class="img-fluid"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pic',
  props: {
    pic: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
