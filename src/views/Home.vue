<template>
  <div class="home">
    <div class="container">
      <div class="sort-container">
        <SortBar/>
        <div class="sort-product">
          <h4 style="text-align:left">Mới phát hành</h4>
          <b-row>
            <b-col>
              <ProductCard/>
            </b-col>
            <b-col>2 of 3 hehe</b-col>
            <b-col>3 of 3</b-col>
            <b-col>3 of 3</b-col>
          </b-row>
        </div>
      </div>

      <div class="list-product">
        <h4 style="text-align:left">Phổ biến</h4>
          <b-row>
            <b-col>
              <ProductCard/>
            </b-col>
            <b-col>2 of 3</b-col>
            <b-col>3 of 3</b-col>
            <b-col>3 of 3</b-col>
          </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/uncommon/ProductCard.vue"
import SortBar from "../components/uncommon/SortBar.vue"
export default {
  name: "Home",
  components: { 
    ProductCard,
    SortBar,
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped>
$deepBlue: #151875;
$fadeBlue: #3f509e;
$blurBlue: #6f88fd;
.home {
  width: 100%;
}
.container {
  margin: 10vh auto;
  width: 90%;
  padding: 0;
  position: relative;
  color: $deepBlue;
}


.sort-product {
  margin: 50px 0;
  padding: 20px;
  background-color: $blurBlue;
  border-radius: 30px;
  color: white;
  font-weight: 700;
  h4 {
    padding: 20px;
    font-weight: 600;
    line-height: 30px;
  }
  .product-card {
    color: $deepBlue;
  }
}

@media screen and (max-width: 500px) {
  .home {
    font-size: 0.75rem;
  }
}
@media screen and (max-width: 420px) {
  .home {
    font-size: 0.7rem;
  }
}
</style>
