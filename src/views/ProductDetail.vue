<template>
  <div class="product-tracking">
      <h4
        class="bread-crumb path"
        @click="$router.push({
          path: '/'
        })"
      >Trang chủ > Thực phẩm chức năng > Alipas</h4>
      <div class="container">
        <b-row>
          <b-col class="col first-col" md="4" sm="12">
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
          <b-col class="col second-col" md="4">
            <div class="box">
              <h3>THÔNG TIN CHI TIẾT</h3>
              <p v-html="product.infoDetail"></p>
            </div>
            <nav>
              <router-link class="green" to="/">THÊM VÀO GIỎ HÀNG</router-link>
              <router-link class="red" to="/product/tracking">MUA NGAY</router-link>
            </nav>
          </b-col>

          <b-col class="col second-col" md="4">
            <div class="box">
              <h3>ĐÁNH GIÁ & NHẬN XÉT</h3>
              <img src="../assets/feedback.png" alt="">
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
import ProductCard from "../components/uncommon/ProductCard.vue"
export default {
  components: {
    ProductCard,
  },
  created() {
  },
  data() {
    return {
      product: {
        name: 'ALIPAS V30Q',
        description: 'Nam giới trên 18 tuổi. Người mong nâng cao sinh lực, cải thiện chức năng và phong độ nam giới, nâng cao sức khoẻ toàn thân',
        usage: '+ Uống 1 viên/ ngày <br>+ Có thể uống 1 viên x 2 lần/ ngày, trong trường hợp hỗ trợ điều trị các bệnh lý liên quan đến rối loạn chuyển hóa. <br> + Nên dùng thường xuyên',
        infoDetail: 'Đóng gói: Chai 30 viên<br><br>Bảo quản: Nơi khô ráo, thoáng mát, nhiệt độ dưới 30 độ C, tránh ẩm và ánh nắng mặt trời, để xa tầm tay trẻ em.<br><br>Thông tin về công dụng sản phẩm công bố theo giấy phép SĐK: 8545/2020/ĐKSP.<br><br>Nhà sản xuất: St. Paul Brands - 11842 Monarch Street, Garden Grove, CA 92841, U.S.A.<br><br>Nhập khẩu và phân phối: Công ty cổ phần Dược phẩm ECO<br><br>Địa chỉ: 148 Hoàng Hoa Thám, P.12, Q. Tân Bình, TP. Hồ Chí Minh.<br><br>Trụ sở chính: Số 180 Trường Chinh, phường Khương Thượng, quận Đống Đa, TP. Hà Nội'
      },
      user: {
        name: 'Lê Hồng Hải',
        address: 'Đà Nẵng, Việt Nam',
        phone: '(+84) 37 449 xxxx',
        orderDay: '26/10/2021',
        confirmDay: '26/10/2021',
        code: '120AB1234652',
      }
    }
    
  },
  computed: {
  }
  
};
</script>

<style lang="scss" scoped>
a {
  font-weight: 700; 
  color: #2C3E50;
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
  position: relative;
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
.first-col {
  width: 30%;
}
.second-col {
  margin: 2vw;
  width: 30%;
  .user-info {
    margin: 20px 0;
  } 
  .box {
  margin: 30px 0;
  } 
  p {
    margin: 0;
  }
  img {
    margin: 0;
    width: 95%;
    cursor: pointer;
  }
}
nav {
  text-align: center;
  display: block;
  margin: 40px auto;
  a {
    display: block;
    width: 60%;
    font-size: 1.1rem;
    font-weight: 700;
    transition: 0.3s;
    padding: 10px 15px;
    border-radius: 18px;
  }
  .green {
    color: white;
    background-color: #68B539;
    &:hover {
      transform: scale(1.02);
    }
  }
  .red {
    color: white;
    background-color: red;
    &:hover {
      transform: scale(1.02);
    }
  }
}


</style>
