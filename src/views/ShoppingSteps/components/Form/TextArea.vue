<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
  >
    <label :for="title">{{ title }}</label>
    <textarea
      :id="title"
      v-model="bindingValue"
      class="w-100"
      cols="30"
      rows="3"
      :disabled="disabled"
    />
    <span
      v-if="errors[0]"
      class="text-danger"
    >{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  name: 'TextArea',
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
