<template>
  <div class="page-banner" />
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss">

.page-banner {
  object-fit: cover;
  position: relative;
  z-index: -1;
  height: 600px;
  background: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/kw9l7oO4JAwUN7l7lOMOzYfiOoYj1jq8mv6261gILVGdyNDq7Rpci9WtGg6zDLgAKyIDjJmkwMbs4hxLLMC5rJGD1a25bI4Ey1aGqNapKw9RbA6qJOrCwVYRpoCfhiM1.jpg") no-repeat center center;
  background-position-y: 80%;
  background-size: cover;
}
</style>
