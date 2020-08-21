<template>
  <div class="list-btns">
    <button
      class="btn btn-outline btn-sm mr-2"
      @click="$emit('goProductPage')"
    >
      觀看更多
    </button>
    <button
      class="btn btn-sm btn-sm"
      @click="$emit('addCartHandler')"
    >
      加到購物車
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
};
</script>
