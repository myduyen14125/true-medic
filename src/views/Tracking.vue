<template>
  <div class="product-tracking">
      <h1>Hello</h1>
    <div class="container">
      <p
        class="bread-crumb"
        @click="$router.push({
          path: '/'
        })"
      >Trang chủ > Vaccine > Pfizer</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  created() {
  },
  data() {
    return {
    }
    
  },
  computed: {
  }
  
};
</script>

<style lang="scss" scoped>

</style>
