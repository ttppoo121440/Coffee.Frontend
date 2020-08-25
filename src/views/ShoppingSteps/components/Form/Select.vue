<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
  >
    <label
      :for="title"
    >{{ title }} <span
      v-if="required"
      class="text-danger"
    >*</span></label>
    <select
      :id="title"
      v-model="bindingValue"
      class="w-100"
      :disabled="disabled"
    >
      <option
        :value="null"
        disabled
      >
        請選擇付款方式
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.value }}
      </option>
    </select>
    <span
      v-if="errors[0]"
      class="text-danger"
    >{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  name: 'Select',
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
  data() {
    return {
      options: [
        { value: 'WebATM' },
        { value: 'ATM' },
        { value: 'CVS' },
        { value: 'barcode' },
        { value: 'Credit' },
        { value: 'ApplePay' },
        { value: 'GooglePay' },
      ],
    };
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
