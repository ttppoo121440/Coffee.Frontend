<template>
  <div class="cart-delete">
    <button
      class="btn btn-outline p-2"
      type="button"
      @click="$emit('cartDelete')"
    >
      <v-icon
        name="trash-alt"
        scale="2"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartDelete',
};
</script>
