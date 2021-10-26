<template>
  <div class="home">
    <div class="container">
      <div class="sort-container">
        <SortBar />
        <div class="sort-product">
          <h4 style="text-align:left">Mới phát hành</h4>
          <b-row>
            <b-col
              @click="$router.push({
                  path: '/product/pfizer'
                })"
            >
              <ProductCard
                id="alipas"
                imgLink="https://ecogreen.com.vn/image/cache/catalog/sap-moi/sap-n-1-1280x1280.jpg"
                name="Alipas"
              />
            </b-col>
            <b-col>
              <ProductCard
                id="astra"
                imgLink="https://vnvc.vn/wp-content/uploads/2021/01/vac-xin-astrazeneca.jpg"
                name="Vaccine Astrazeneca"
                @click="productDirect()"
              />
            </b-col>
            <b-col>
              <ProductCard
                id="sino"
                imgLink="https://soyte.hungyen.gov.vn/portal/Photos/2021-09/7ad421b84be06efdTQ.jpg"
                name="Vaccine Sinopharm"
                @click="productDirect()"
              />
            </b-col>
            <b-col
              @click="$router.push({
                  path: '/product/tracking'
                })"
            >
              <ProductCard
                id="nanocovax"
                imgLink="https://file3.qdnd.vn/data/images/0/2021/08/28/vuongthuy/25082021vthuy32.jpg?dpi=150&quality=100&w=870"
                name="Vaccine Nanocovax"
              />
            </b-col>
          </b-row>
        </div>
      </div>

      <div class="list-product">
        <h4 style="text-align:left">Phổ biến</h4>
        <b-row>
          <b-col>
            <ProductCard
                id="nanocovax"
                imgLink="https://file3.qdnd.vn/data/images/0/2021/08/28/vuongthuy/25082021vthuy32.jpg?dpi=150&quality=100&w=870"
                name="Vaccine Nanocovax"
              />
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
import ProductCard from "../components/uncommon/ProductCard.vue";
import SortBar from "../components/uncommon/SortBar.vue";
export default {
  name: "Home",
  components: {
    ProductCard,
    SortBar,
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    productDirect: function () {
      alert("asdas");
    },
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
