<template>
  <section class="mt-100">
    <div class="text-center mt-5">
      <h1 class="title">
        收件人資料
      </h1>
    </div>
    <div class="container">
      <div class="my-5 row justify-content-center">
        <Form
          :form-data="formData"
          :rule-form="ruleForm"
          @back="$emit('back')"
          @next="$emit('next', formData)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Form from '../components/Form/index.vue';

export default {
  name: 'Information',
  components: {
    Form,
  },
  data() {
    return {
      ruleForm: Object.freeze([
        {
          type: 'TextInput',
          name: '收件人姓名',
          rules: 'required',
          prop: 'name',
          required: true,
        },
        {
          type: 'Email',
          name: 'Email',
          rules: 'required',
          prop: 'email',
          required: true,
        },
        {
          type: 'Tel',
          name: '電話',
          rules: 'required|digits:10',
          prop: 'tel',
          max: 10,
          required: true,
        },
        {
          type: 'TextInput',
          name: '地址',
          rules: 'required',
          prop: 'address',
          required: true,
        },
        {
          type: 'Select',
          name: '購買方式',
          rules: 'required',
          prop: 'payment',
          required: true,
        },
        {
          type: 'TextArea',
          name: '留言',
          prop: 'message',
        },
      ]),
      formData: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: null,
        message: '',
      },
    };
  },
};
</script>
