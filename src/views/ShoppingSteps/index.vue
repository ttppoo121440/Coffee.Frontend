<template>
  <section class="mt-200">
    <Step :step="step" />
    <Cart
      v-if="step === 0"
      @next="next"
    />
    <Information
      v-if="step === 1"
      @back="back"
      @next="next"
    />
    <Confirm
      v-if="step === 2"
      :form-data="formData"
      :disabled="true"
      :next-name="nextName"
      @back="back"
      @next="next"
    />
  </section>
</template>

<script>
import Step from '@/components/Step/index.vue';
import scrollTo from '@/components/ScrollTo/index.vue';
import Cart from './Cart/index.vue';
import Information from './Information/index.vue';
import Confirm from './Confirm/index.vue';

export default {
  name: 'ShoppingSteps',
  components: {
    Step,
    Cart,
    Information,
    Confirm,
  },
  mixins: [scrollTo],
  data() {
    return {
      step: 0,
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
    async next(data) {
      this.setData(data);
      if (this.step === 2) {
        this.scrollTo();
        await Promise.all(this.tempCart().map((cart) => this.$store.dispatch('Cart/createCart', cart)));
        this.$store.dispatch('Cart/createOrder', this.formData).then(() => this.$router.push('/success'));
      } else {
        this.step += 1;
        this.scrollTo();
      }
    },
    back() {
      this.step -= 1;
      this.scrollTo();
    },
    setData(data) {
      if (this.step === 1) {
        this.formData = data;
      }
    },
    tempCart() {
      return this.cartList.map((item) => ({
        product: item.product.id,
        quantity: item.quantity,
      }));
    },
  },
};
</script>
