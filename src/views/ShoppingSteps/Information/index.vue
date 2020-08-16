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
          @next="$emit('next')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Form from '../components/Form';

export default {
  name: 'Information',
  components: {
    Form,
  },
  props: {
    formData: {
      type: Object,
      required: true,
    },
    ruleForm: {
      type: Array,
      required: true,
    },
  },
};
</script>
