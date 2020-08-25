<template>
  <Pagination
    v-if="!$store.state.Loading.loading"
    :current="current"
    :total-pages="totalPages"
    @ChangeNav="ChangeNav"
  />
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';

export default {
  name: 'ProductsNav',
  components: {
    Pagination,
  },
  props: {
    current: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentIndex: {
      get() {
        return this.current;
      },
      set(val) {
        this.$emit('update:current', val);
      },
    },
    totalPages: {
      get() {
        return Math.ceil(this.categoryTotal / this.pageSize);
      },
    },
    categoryTotal() {
      return this.$store.state.Product.productList.filter((item) => (item.category === this.category
        || this.category === '全部')).length;
    },
  },
  methods: {
    ChangeNav(page) {
      this.currentIndex = page;
    },
  },
};
</script>
