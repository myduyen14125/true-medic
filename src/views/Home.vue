<template>
  <div class="home">
    <div class="container">
      <div class="sort-container">
        <SortBar />
        <div class="sort-product">
          <h4 style="text-align:left">Mới phát hành</h4>
          <b-row>
            <b-col
              @click="
                $router.push({
                  path: '/product/overview',
                })
              "
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
              @click="
                $router.push({
                  path: '/product/tracking',
                })
              "
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
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://cf.shopee.vn/file/885c804d31a1f7889c5c2df79979def9"
              name="Vaccine Nanocovax"
            />
          </b-col>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://www.thuocdantoc.org/wp-content/uploads/2020/02/thuc-pham-chua-nang-chua-benh-tri-tan-tri-an.jpg"
              name="Vaccine Nanocovax"
            />
          </b-col>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://soyte.hungyen.gov.vn/portal/Photos/2021-09/7ad421b84be06efdTQ.jpg"
              name="Vaccine Nanocovax"
            />
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://vcdn-giadinh.vnecdn.net/2021/08/04/1-z-2-4497-1628046609.jpg"
              name="Power Sam Energy"
            />
          </b-col>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://vcdn-giadinh.vnecdn.net/2021/08/04/1-8-1628049853-1628049866-7623-1628066338.jpg"
              name="Oyster Man"
            />
          </b-col>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://toplist.vn/images/800px/turmeric-800-mg-225607.jpg"
              name="Turmeric"
            />
          </b-col>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://vanchuyensieutoc.com/Uploads/images/tin%20tuc/thuc-pham-chuc-nang-nhat-ban-2.jpg"
              name="Matcha Sala"
            />
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://file3.qdnd.vn/data/images/0/2021/08/28/vuongthuy/25082021vthuy32.jpg?dpi=150&quality=100&w=870"
              name="Vaccine Nanocovax"
            />
          </b-col>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://cf.shopee.vn/file/885c804d31a1f7889c5c2df79979def9"
              name="Vaccine Nanocovax"
            />
          </b-col>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://www.thuocdantoc.org/wp-content/uploads/2020/02/thuc-pham-chua-nang-chua-benh-tri-tan-tri-an.jpg"
              name="Vaccine Nanocovax"
            />
          </b-col>
          <b-col>
            <ProductCard
              id="nanocovax"
              imgLink="https://soyte.hungyen.gov.vn/portal/Photos/2021-09/7ad421b84be06efdTQ.jpg"
              name="Vaccine Nanocovax"
            />
          </b-col>
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
  methods: {
    productDirect: function() {
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
