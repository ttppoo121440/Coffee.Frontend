<template>
  <nav>
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: current === 1 }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="ChangeNav(current - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="(nav, index) in totalPages"
        :key="index"
        class="page-item"
      >
        <a
          class="page-link"
          href="#"
          :class="{ active: current === nav }"
          @click.prevent="ChangeNav(nav)"
        >{{ nav }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: current === totalPages }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="ChangeNav(current + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import ScrollTo from '@/components/ScrollTo';

export default {
  name: 'Pagination',
  mixins: [ScrollTo],
  props: {
    current: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    window.addEventListener('scroll', this.backTop);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.backTop);
  },
  methods: {
    ChangeNav(index) {
      this.ScrollTo();
      this.$emit('ChangeNav', index);
    },
  },
};
</script>
