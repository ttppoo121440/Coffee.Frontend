<template>
  <section class="mt-200">
    <Step :step="step" />
    <Cart
      v-if="step === 0"
      @next="next"
    />
    <Information
      v-if="step === 1"
      :form-data="formData"
      :rule-form="ruleForm"
      @back="back"
      @next="next"
    />
    <Confirm
      v-if="step === 2"
      :form-data="formData"
      :rule-form="ruleForm"
      :disabled="true"
      :next-name="nextName"
      @back="back"
      @next="next"
    />
  </section>
</template>

<script>
import Step from '@/components/Step';
import Cart from './Cart';
import Information from './Information';
import Confirm from './Confirm';

let timer = null;
export default {
  name: 'ShoppingSteps',
  components: {
    Step,
    Cart,
    Information,
    Confirm,
  },
  data() {
    return {
      step: 0,
      ruleForm: [
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
      ],
      formData: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: null,
        message: '',
      },
      nextName: '完成訂單',
      cartList: [],
    };
  },
  computed: {
    getCart() {
      return this.$store.getters['Cart/getCart'];
    },
  },
  mounted() {
    this.cartList = this.getCart;
  },
  methods: {
    async next() {
      if (this.step === 2) {
        console.log('完成訂單');
        this.toTop();
        const tempCart = this.cartList.map((item) => ({
          product: item.product.id,
          quantity: item.quantity,
        }));
        await Promise.all(tempCart.map((cart) => this.$store.dispatch('Cart/createCart', cart)));
        this.$store.dispatch('Cart/createOrder', this.formData).then(() => this.$router.push('/success'));
      } else {
        this.step += 1;
        this.toTop();
      }
    },
    back() {
      this.step -= 1;
      this.toTop();
    },
    toTop() {
      timer = setInterval(() => {
        const osTop = document.documentElement.scrollTop || document.body.scrollTop;
        const ispeed = Math.floor(-osTop / 5);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = osTop + ispeed;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 25);
    },
  },
};
</script>
