<template>
  <div class="product-detail">
    <div class="container">
      <p
        class="bread-crumb"
        @click="$router.push({
          path: '/'
        })"
      >Trang chủ > Vaccine > Pfizer</p>

      <div class="main-body--wrapper" style="display: flex">
        <div style="margin-top: 100px; margin-left:-50px">
          <p class="usecase--header">CÁCH DÙNG</p>
          <div class="usecase--body">
            <p>+ Uống 1 viên/ ngày</p>
            <p>+ Có thể uống 1 viên x 2 lần/ ngày, trong trường hợp hỗ trợ điều trị các bệnh lý liên quan đến rối loạn chuyển hóa.</p>
            <p>+ Nên dùng thường xuyên</p>
          </div>
        </div>

        <div class="product-image--wrapper">
          <img src="../assets/360 View-Control.png" alt="asdasdasds" />
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
    console.log(this.$route.params.id);
    console.log(this.$route);
  },
  data() {
    return {
      products: [
        //thumnail,...
      ],
    };
  },
  computed: {},
};
</script>

<style scoped>
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
}
.bread-crumb:hover {
  cursor: pointer;
}
.usecase--header {
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #131212;
}
.usecase--body {
  width: 340px;
  font-size: 15px;
  color: #131212;
}
.product-image--wrapper {
  background-image: url("../../public/allipas.svg");
}
.container {
  width: 55%;
  text-align: left;
  margin: 50px auto;
}
@media screen and (max-width: 992px) {
  .container {
    width: 75%;
    text-align: left;
    margin: 50px auto;
  }
}
</style>
