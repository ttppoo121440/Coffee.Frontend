<template>
  <validation-provider
    v-slot="{ errors, classes }"
    :rules="rules"
  >
    <label :for="title">{{ title }}</label>
    <input
      :id="title"
      v-model="bindingValue"
      type="tel"
      class="w-100"
      :class="classes"
      :maxlength="max"
      :disabled="disabled"
    >
    <span
      v-if="errors[0]"
      class="text-danger"
    >{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  name: 'Tel',
  props: {
    title: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    max: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bindingValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value);
      },
    },
  },
};
</script>
