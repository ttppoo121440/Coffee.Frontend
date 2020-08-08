<template>
  <ul class="list social mr-5">
    <li
      v-for="social in socials"
      :key="social.icon"
      class="list-item"
    >
      <a
        href="#"
        class="text-witht"
      ><v-icon
        :name="social.icon"
        scale="2"
      /></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Social',
  data() {
    return {
      socials: [
        { icon: 'brands/facebook-square' },
        { icon: 'brands/instagram' },
        { icon: 'brands/twitter-square' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
.social .fa-icon {
  color: $white;
}
</style>
