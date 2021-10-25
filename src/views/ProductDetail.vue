<template>
  <div class="product-detail">
    <!-- <h1>{{$route.params.id}}</h1> -->
    <div v-for="product in products" :key="'product'+product.id" >
      <div v-if="product.id === $route.params.id">
        <img :src="product.thumbnail" alt="">
        <div class="container">
        </div>
      </div>
      
    </div>
    
    
  </div>
</template>

<script>
export default {
  components: {
  },
  created() {
    console.log(this.$route.params.id)
    console.log(this.$route);
  },
  data() {
    return {
      products: [
        //thumnail,... 
      ]
    }
    
  },
  computed: {
  }
  
};
</script>

<style scoped>
.product-detail{
  margin: 2rem 0;
}
.product-detail img{
  width: 97.8%; 
  height: 65vh;
  object-fit: cover;
}
.container{
  width: 55%;
  text-align: left;
  margin: 50px auto;
}
@media screen and (max-width: 992px) {
  .container{
    width: 75%;
    text-align: left;
    margin: 50px auto;
  }
}
</style>
