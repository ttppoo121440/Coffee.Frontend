<template>
  <transition-group
    v-if="!$store.state.Loading.loading"
    name="page"
    appear
    tag="div"
    class="row"
  >
    <Pic
      :key="$route.name"
      :pic="data.imageUrl"
    />
    <div
      :key="$options.name"
      class="col-md-6"
    >
      <div class="product-details-content">
        <span class="py-3 text-primary"><router-link
          class="text-primary"
          to="/products"
        >
          產品專區</router-link>/{{ data.category }}</span>
        <div class="text-left my-5">
          <h1>
            {{ data.title }}
          </h1>
        </div>
        <p>{{ data.description }}</p>
      </div>
      <div class="product-details-function mb-5">
        <DetailPic
          :data="data"
          :quantity.sync="bindingValue"
        />
        <AddCart
          :quantity="bindingValue"
          @addCart="$emit('addCart', data,bindingValue)"
        />
      </div>
    </div>
  </transition-group>
</template>

<script>
import Pic from './Pic';
import AddCart from './AddCart';
import DetailPic from './DetailPic';

export default {
  name: 'ProductDetails',
  components: {
    Pic,
    AddCart,
    DetailPic,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  computed: {
    bindingValue: {
      get() {
        return this.quantity;
      },
      set(value) {
        this.$emit('update:quantity', value);
      },
    },
  },
};
</script>
