<template>
  <ul class="list category my-5">
    <li class="list-item">
      <button
        type="button"
        class="btn"
        :class="{ 'btn-outline': active !== '全部' }"
        @click="categoryHandler('全部')"
      >
        全部
      </button>
    </li>
    <li
      v-for="category in categorys"
      :key="category"
      class="list-item"
    >
      <button
        type="button"
        class="btn"
        :class="{ 'btn-outline': active !== category }"
        @click="categoryHandler(category)"
      >
        {{ category }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Category',
  props: {
    categorys: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: '全部',
    };
  },
  methods: {
    categoryHandler(category) {
      this.active = category;
      this.$emit('categoryHandler', category);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.category {
  .list-item {
    padding: 15px;
    @include media-down(sm) {
      padding: 15px 10px;
    }
  }

  .btn {
    @include media-down(sm) {
      padding: 5px;
      font-size: 16px;
      font-weight: normal;
    }
  }
}
</style>
