<template>
  <div class="product-tracking">
    <h4
      class="bread-crumb path"
      @click="
        $router.push({
          path: '/',
        })
      "
    >
      Trang chủ > Thực phẩm chức năng > Alipas
    </h4>
    <div class="container">
      <b-row>
        <b-col class="col left-col" md="5" sm="12">
          <ProductCard
            id="alipas"
            imgLink="https://ecogreen.com.vn/image/cache/catalog/sap-moi/sap-n-1-1280x1280.jpg"
            name="Alipas"
          />
          <div class="box">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
          <div class="box">
            <h3>CÁCH DÙNG</h3>
            <p v-html="product.usage"></p>
          </div>
        </b-col>
        <b-col class="col right-col" lg="7">
          <div class="box">
            <h3>THÔNG TIN ĐƠN HÀNG</h3>
            <div
              class="user-info"
              style="display: flex; justify-content: space-between"
            >
              <div class="left" style="width: 40%">
                <p>Đặt hàng bởi: {{ user.name }}</p>
                <p>Địa chỉ: {{ user.address }}</p>
                <p>SĐT: {{ user.phone }}</p>
              </div>
              <div class="right" style="width: 55%">
                <p>Đặt hàng ngày: {{ user.orderDay }}</p>
                <p>Xác nhận đơn hàng ngày: {{ user.confirmDay }}</p>
                <p>Mã đơn hàng: {{ user.code }}</p>
              </div>
            </div>
          </div>

          <div class="box">
            <h3>TÌNH TRẠNG ĐƠN HÀNG</h3>
            <br />
            <!-- <div class="product-info" style="display: flex; justify-content: space-between">
                  <div class="left timeline" style="width: 40%">
                    <p>Ngày: {{ product.tracking.time }}</p>
                    <p>Tình trạng: {{ product.tracking.status }}</p>
                  </div>
                  <div class="right" style="width: 55%">
                    <p>Địa điểm: {{ product.tracking.place }}</p>
                  </div>
                  
                </div> -->
            <!-- //Timeline ne -->
            
            <div
              class="container timeline border-dark"
              v-for="item in productTracking.trackingChain"
              v-bind:key="'item' + item.time"
            >

              <div class="timeline-box">
                <div class="time-marked">
                  {{ item.time }}
                </div>
                <div class="job-discription">
                  <h5>{{ item.to_name }}</h5>
                  <p>
                    {{ item.to_address }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="direction">
      <router-link to="/product/overview">TRƯỚC</router-link>
      <div class="fa fa-long-arrow-left"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductCard from "../components/uncommon/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  // async created() {
  //   try {
  //     const response = await axios.get(`http://35.185.179.119/api/v1/info/shipment/tracking/?shipment=0753b541-0f69-4f96-b1ce-06111817d05f`)
  //     console.log("response:", response)
  //   }
  //   catch(error) {
  //     console.log("error:", error)
  //   }
  // },
  async created() {
    const response = await axios.get(`http://35.185.179.119/api/v1/info/shipment/tracking/?shipment=0753b541-0f69-4f96-b1ce-06111817d05f`)
    this.users = response.data
    console.log(response.data)
  },
  data() {
    return {
      product: {
        name: "ALIPAS V30Q",
        description:
          "Nam giới trên 18 tuổi. Người mong nâng cao sinh lực, cải thiện chức năng và phong độ nam giới, nâng cao sức khoẻ toàn thân",
        usage:
          "+ Uống 1 viên/ ngày <br>+ Có thể uống 1 viên x 2 lần/ ngày, trong trường hợp hỗ trợ điều trị các bệnh lý liên quan đến rối loạn chuyển hóa. <br> + Nên dùng thường xuyên",
      },

      productTracking: {
        createdAt: "3-5-2016",
        trackingChain: [
          {
            time: "2021-10-28",
            from_name: "Công ty Dược phẩm và Thương mại Phương Đông",
            from_address: "Cụm Công nghiệp Hồng La, Hồng La, thành phố Hải Phòng",
            to_name: "Công ty cổ phần Traphaco",
            to_address:
              "Cụm Công nghiệp Hạp Lĩnh, phường Hạp Lĩnh, thành phố Bắc Ninh",
          },
          {
            time: "2016-09-30",
            to_name: "Nhà thuốc Hồng Mai",
            to_address:
              "Số 85, phố Hồng Mai, phường Quỳnh Lôi, quận Hai Bà Trưng, thành phố Hà Nội",
          },
          {
            time: "2016-07-30",
            to_name: "Nhà thuốc Minh Phúc",
            to_address:
              "Số 3 ngõ 23 đường Xuân La, phường Xuân La, quận Tây Hồ, thành phố Hà Nội",
          },
          {
            time: "2016-05-21",
            to_name: "Medicine Company",
            to_address: "34A West Old Street, Fresno, California, USA",
          },
          {
            time: "2016-02-21",
            to_name: "Headfill Company",
            to_address: "27B West Old Street, Fresno, Washington, USA",
          },
        ],
      },
      user: {
        name: "Lê Hồng Hải",
        address: "Đà Nẵng, Việt Nam",
        phone: "(+84) 37 449 xxxx",
        orderDay: "26/10/2021",
        confirmDay: "26/10/2021",
        code: "120AB1234652",
      },
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
a {
  font-weight: 700;
  color: #2c3e50;
  margin: 10px 0;
  font-size: 1.1rem;
  transition: 0.3s;
  &:hover {
    color: #3e4e5e;
  }
}
h3 {
  font-weight: 700;
}
.product-tracking {
  text-align: left;
  margin: 50px 0;
  .direction {
    position: -webkit-sticky;
    position: sticky;
    width: fit-content;
    bottom: 10%;
    left: 2%;
    .fa {
      display: block;
      font-size: 45px;
      position: absolute;
      top: 16px;
    }
  }
}

.bread-crumb {
  color: #6389cb;
  font-size: 1.2rem;
  border-bottom: 2px solid #6389cb;
  display: inline-block;
  padding-bottom: 10px;
  margin: 0 6vw;
  &:hover {
    cursor: pointer;
  }
}
.left-col {
  width: 35%;
}
.right-col {
  margin: 3vw 2vw;
  width: 60%;
  .user-info {
    margin: 20px 0;
  }
  .box {
    margin: 30px 0;
  }
  p {
    margin: 0;
  }
}
// Timeline custom
.timeline {
  border-left: 3px solid #2e344e;
  font-size: 1rem;
  margin: 0px 10px;
  text-align: left;
  padding-bottom: 25px;
}
.timeline-box {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.timeline-box::before {
  content: "";
  position: absolute;
  top: 5px;
  left: -33px;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #10121b;
  border: 3px solid #2e344e;
}
.timeline-box .time-marked {
  width: 25%;
}
.timeline-box .job-discription {
  position: relative;
  width: 76%;
}
.timeline-box .job-discription::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: #2e344e;
  top: 10px;
  left: -55px;
  border-radius: 1px;
}
.timeline-box .job-discription h5 {
  font-size: 1.2rem;
  color: #6389cb;
  font-weight: 600;
}
.timeline-box .job-discription a {
  color: white;
}
</style>
