<template>
  <section class="mt-100">
    <Loading :active.sync="$store.state.Loading.loading" />
    <div class="text-center mt-5">
      <h1 class="title">
        確認資料
      </h1>
    </div>
    <div class="container">
      <div class="my-5 row justify-content-center">
        <Form
          :form-data="formData"
          :rule-form="ruleForm"
          :disabled="disabled"
          :next-name="nextName"
          @back="$emit('back')"
          @next="$emit('next')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Form from '../components/Form';

export default {
  name: 'Confirm',
  components: {
    Form,
  },
  props: {
    formData: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    nextName: {
      type: String,
      default: '下一步',
    },
  },
  data() {
    return {
      ruleForm: Object.freeze([
        {
          type: 'TextInput',
          name: '收件人姓名',
          rules: 'required',
          prop: 'name',
        },
        {
          type: 'Email', name: 'Email', rules: 'required', prop: 'email',
        },
        {
          type: 'Tel',
          name: '電話',
          rules: 'required|digits:10',
          prop: 'tel',
          max: 10,
        },
        {
          type: 'TextInput',
          name: '地址',
          rules: 'required',
          prop: 'address',
        },
        {
          type: 'Select',
          name: '購買方式',
          rules: 'required',
          prop: 'payment',
        },
        {
          type: 'TextArea',
          name: '留言',
          prop: 'message',
        },
      ]),
    };
  },
};
</script>
