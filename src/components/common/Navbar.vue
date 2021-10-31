<template>
  <div class="nav">
    <div class="top-nav">
      <div class="menu">
        <router-link to="/">SẢN PHẨM MỚI</router-link>
        <router-link to="/about">NGƯỜI CAO TUỔI</router-link>
        <router-link to="/women">PHỤ NỮ</router-link>
        <router-link to="/children">TRẺ EM</router-link>
      </div>
      <div class="Product-icons">
        <b-icon icon="person-circle" class="icon"></b-icon>
        <b-icon icon="menu-button-wide" class="icon" @click="toCreateTransaction"></b-icon>
        <b-icon icon="gear" class="icon"></b-icon>
      </div>
    </div>
    <div class="bellow-nav">
      <div class="search-bar">
        <form action="">
          <input
            type="text"
            placeholder="Find the product's name you want..."
          />
          <div class="blue">
            <span>Tìm kiếm</span>
            <div class="fa fa-search"></div>
          </div>
        </form>
      </div>

      <button class="cart">
        <span>Giỏ hàng</span>
        <b-icon-cart3 class="icon"></b-icon-cart3>
      </button>
      <button class="order-tracking cart">
        <span>Theo dõi đơn hàng</span>
        <b-icon-basket3 class="icon"></b-icon-basket3>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  methods: {
    toCreateTransaction() {
      window.location.href = "/createTransaction"
    },
  }
};
</script>

<style lang="scss" scoped>
a {
  margin: 0 20px;
  color: #2c3e50;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 5px solid transparent;
  &:hover {
    border-bottom: 5px solid #2c3e50;
    color: #2c3e50;
  }
}

.nav {
  // position: -webkit-sticky;
  // position: sticky;
  top: 0;
  z-index: 100;
  height: 17vh;
  /* box-shadow: 0 4px 6px -2px gray; */
  background: linear-gradient(180deg, #EAF3FC 0%, rgba(196, 196, 196, 0) 100%);
  margin: 0;
  padding: 3px;
  background-color: white;
  justify-content: space-between;
  font-size: 1.2rem;
}

.top-nav {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  .icon {
    font-size: 28px;
    margin: 0 20px;
  }
}

.bellow-nav {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  button {
    width: fit-content;
    height: 43.2px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    outline: none;
    font-size: 1rem;
    border: 1px solid #454545;
    background: transparent;
    margin-left: 10px;
    padding: 10px;
    transition: 0.3s;
    &:hover {
      color: white;
      background-color: #6389cb;
      border: 1px solid transparent;
    }
    span {
      display: block;
    }
    .icon {
      display: block;
      margin: 0 0 0 10px;
      font-size: 1.2rem;
    }
  }
}
/* Search-bar */
.search-bar {
  position: relative;
  width: 40%;
  margin: 0 10%;
  padding: 0;
  display: inline-block;
  input {
    padding: 10px 10px 10px 50px;
    border-radius: 25px;
    color: #454545;
    width: 100%;
    outline: none;
    margin: auto;
    box-sizing: border-box;
    transition: 0.4s;
    border: 1px solid gray;
    font-size: 0.9rem;
    &:hover {
      border: 1px solid #454545;
    }
  }
  .blue {
    position: absolute;
    top: 0;
    left: -100px;
    background-color: #6389cb;
    border-radius: 25px;
    height: 43.2px;
    width: 140px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    .fa {
      margin: 0 10px;
    }
  }
}

/* Responsive */
@media screen and (max-width: 992px) {
  .nav {
    font-size: 1.1rem;
  }
  .search-bar .blue {
    width: 60px;
    top: 0;
    left: -15px;
  }
  .search-bar .blue span {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  a {
    margin: 0 10px;
  }
}
@media screen and (max-width: 420px) {
  .nav {
    font-size: 1rem;
  }
  .fa-search {
    display: none;
  }
  a {
    margin: 0 5px;
  }
}
</style>
