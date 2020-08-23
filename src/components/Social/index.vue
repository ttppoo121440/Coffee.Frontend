<template>
  <ul class="list social mr-5">
    <li
      v-for="social in socials"
      :key="social.icon"
      class="list-item"
    >
      <a
        :href="social.href"
        class="text-witht"
        target="_blank"
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
      socials: Object.freeze([
        { icon: 'brands/facebook-square', href: 'https://www.facebook.com/profile.php?id=100003361697042' },
        { icon: 'brands/instagram', href: 'https://www.instagram.com/' },
        { icon: 'brands/github-square', href: 'https://github.com/ttppoo121440/Coffee.Frontend' },
      ]),
    };
  },
};
</script>

<style lang="scss">

.social .fa-icon {
  color: $white;
}
</style>
