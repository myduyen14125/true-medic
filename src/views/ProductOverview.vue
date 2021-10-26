<template>
  <div class="product-overview">
    <h4
        class="bread-crumb path"
        @click="$router.push({
          path: '/'
        })"
      >Trang chủ > Thực phẩm chức năng > Alipas</h4>
      <div class="container">
        <img src="../assets/360 View-Control.png" alt="asdasdasds" />
        <div class="info-box">
          <div class="title">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p><br>
            <h5 style="color: red;">Giá: {{ product.price }}</h5>
            <h5 style="color: red;">Còn hàng</h5>
          </div>
        </div>
        <div class="usage-box">
          <h3>CÁCH DÙNG</h3>
          <p v-html="product.usage"></p>
        </div>

        <div class="direction">
          <router-link to="/product/tracking"> SAU</router-link>
          <div class="fa fa-long-arrow-right"></div>
        </div>

        <nav>
          <router-link class="green" to="/">THÊM VÀO GIỎ HÀNG</router-link>
          <router-link class="red" to="/product/tracking">MUA NGAY</router-link>
          <router-link class="green" to="/product/detail">XEM CHI TIẾT</router-link>
        </nav>
      </div>
      
    </div>


</template>


<script>
export default {
  components: {
  },
  created() {
    console.log(this.$route.params.id);
    console.log(this.$route);
  },
  data() {
    return {
      product: {
        name: 'ALIPAS V30Q',
        description: 'Nam giới trên 18 tuổi. Người mong nâng cao sinh lực, cải thiện chức năng và phong độ nam giới, nâng cao sức khoẻ toàn thân',
        price: '750.000 VND',
        usage: '+ Uống 1 viên/ ngày <br>+ Có thể uống 1 viên x 2 lần/ ngày, trong trường hợp hỗ trợ điều trị các bệnh lý liên quan đến rối loạn chuyển hóa. <br> + Nên dùng thường xuyên',
      },
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
$deepBlue: #151875;
$fadeBlue: #3f509e;
$blurBlue: #6f88fd;
h3 {
  font-weight: 700;
}
a {
  font-weight: 700; 
  color: #2C3E50;
  margin: 10px 0;
  font-size: 1.1rem;
}
.product-overview {
  text-align: left;
  margin: 50px 0;
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
.container {
  text-align: center;
  position: relative;
  img {
    width: 65vw;
    margin: auto;
  }
  p {
    margin: 0;
  }
  .info-box {
    position: absolute;
    top: 0;
    right: 0;
    text-align: left;
    margin: 30px 0;
    width: 25%;
  } 
  .usage-box {
    position: absolute;
    top: 20%;
    left: 0; 
    text-align: left;
    width: 20%;
  }

  .direction {
    position: relative;
    position: absolute;
    width: fit-content;
    bottom: 10%;
    left: -70px;
    .fa {
      display: block;
      font-size: 39px;
      position: absolute;
      top: 16px;
    }
  }
  nav {
    a {
      display: inline-block;
      margin: 40px 20px;
      font-size: 1.1rem;
      font-weight: 700;
      transition: 0.3s;
      padding: 10px 15px;
      border-radius: 18px;
    }
    .green {
      color: #68B539;
      &:hover {
        color: white;
        background-color: #68B539;
      }
    }
    .red {
      color: red;
      &:hover {
        color: white;
        background-color: red;
      }
    }
  }
}
</style>
