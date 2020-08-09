<template>
  <div class="container">
    <ul class="step">
      <li
        v-for="(step, index) in 3"
        :key="step"
        class="step-item"
        :class="{ active: active === index }"
      >
        <div class="round">
          {{ step }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    active: {
      type: Number,
      required: true,
    },
  },
};
</script>
