<template>
  <div class="product-tracking">
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
.container {
  width: 55%;
  text-align: left;
  margin: 50px auto;
}
.product-detail {
  margin: 2rem 0;
}

.bread-crumb {
  color: #6389cb;
  font-size: 20px;
  border-bottom: 2px solid #6389cb;
  display: inline-block;
  padding-bottom: 10px;
  margin-left: -50px;
  &:hover {
    cursor: pointer;
    }
}

</style>
