<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
  >
    <label
      :for="title"
    >{{ title }}<span
      v-if="required"
      class="text-danger"
    >*</span></label>
    <input
      :id="title"
      v-model="bindingValue"
      type="text"
      class="w-100"
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
  name: 'TextInput',
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
    required: {
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
