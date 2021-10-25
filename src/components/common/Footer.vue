<template>
  <div class="footer">
    <div class="content">
        <div class="contact">
            <h2>True Medic</h2>
            <input
                type="email"
                name=""
                id=""
                placeholder="Nhập Email"
            />
            <button class="btn-subcribe">Đăng ký</button>
            <div class="icons">
                <a href="#"><div class="fa fa-twitter"></div></a>
                <a href="#"><div class="fa fa-instagram"></div></a>
                <a href=""><div class="fa fa-linkedin-square"></div></a>
            </div>
        </div>
      <div class="col">
        <h3 class="title">Loại sản phẩm</h3>
        <div class="list-tags">
          <a href="" class="tag" v-for="(tag, index) in tags" :key="index">{{
            tag
          }}</a>
        </div>
      </div>
      <div class="col">
        <h3 class="title">Chăm sóc khách hàng</h3>
        <div class="list-tags">
          <a href="" class="tag" v-for="(tag, index) in tags" :key="index">{{
            tag
          }}</a>
        </div>
      </div>
      <div class="col">
        <h3 class="title">Loại sản phẩm</h3>
        <div class="list-tags">
          <a href="" class="tag" v-for="(tag, index) in tags" :key="index">{{
            tag
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  components: {},
  data() {
    return {
      tags: [
        "Thuốc tim mạch",
        "Thuốc hỗ trợ hô hấp",
        "Thuốc dành cho người cao tuổi",
        "Thuốc dành cho trẻ em",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #8a8fb9;
}
.footer {
  width: 100%;
  height: 40vh;
  position: relative;
  bottom: 0;
  left: 0;
  background-color: #eeeffb;
  color: #8a8fb9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}
.content {
  display: flex;
  justify-content: space-around;
  .title {
    color: #2c3e50;
    font-size: "Josefin Sans";
    text-align: left;
    color: #2c3e50;
  }
  .col {
    width: 18%;
    max-height: 40vh;
  }
}
.list-tags {
  display: flex;
  flex-wrap: wrap;

  .tag {
    color: #8a8fb9;
    text-decoration: none;
    text-align: left2;
    font-size: 14px;
    padding: 2px 7px;
    margin: 0 10px 10px 0;
    transition: 0.2s all linear;

    &:hover {
      background-color: #8a8fb9;
      color: white;
    }
  }
}
.contact {
    text-align: left;
    margin: 0 70px;
    input {
        padding: 7px 10px;
        margin: 0 auto;
        border-radius: 3px;
        transition: all .5s ease-in-out;
        border: 1px solid transparent;
        margin-bottom: 24px;
        background-color: #fff;
        color: #8a8fb9;

        &:focus {
          border: 1px solid #8a8fb9;
          outline: 0;
        }
      }

      .btn-subcribe {
        cursor: pointer;
        background: #FB2E86;
        border-radius: 3px;
        padding: 10px 25px;
        color: #fff;
        font-size: 12px;
        line-height: 1.5;
        text-align: center;
        border: 0;
        outline: 0;
        font-weight: 400;
        letter-spacing: 1px;
      }
}
.fa {
  font-size: 1.7rem;
  margin: 15px;
  transition: 0.3s;
}
.fa:hover {
  color: gray;
}
/* Responsive */
@media screen and (max-width: 992px) {
  .content {
    width: 60%;
  }
  h1 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1rem;
  }
}
@media screen and (max-width: 768px) {
  .content {
    width: 70%;
  }
  p {
    font-size: 0.95rem;
  }
  .fa {
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 500px) {
  .content {
    width: 75%;
  }
  h1 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.85rem;
  }
}
@media screen and (max-width: 420px) {
  .content {
    width: 85%;
  }
}
</style>
