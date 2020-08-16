<template>
  <div class="container">
    <ul class="step">
      <li
        v-for="(item, index) in 3"
        :key="item"
        class="step-item"
        :class="{ active: bindingStep === index }"
      >
        <div class="round">
          {{ item }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    step: {
      type: Number,
      required: true,
    },
  },
  computed: {
    bindingStep: {
      get() {
        return this.step;
      },
    },
  },
};
</script>
