<template>
  <div class="header">
    <div class="left-header" style="width: 55%">
      <Logo />
    </div>
    <div class="right-header" style="width: 35%">
      <select id="s">
        <option id="vietnam" value="/">Tiếng Việt</option>
        <option id="english" value="/en/">English</option>
      </select>
      <router-link to="/login" class="wishlist" style="margin-top:5px">
        Danh sách ước
        <b-icon-heart-fill class="heart"></b-icon-heart-fill>
      </router-link>
      <div v-if="!isLogin" class="login-block">
        <router-link to="/login">Đăng nhập</router-link>|
        <router-link to="/signup">Đăng ký</router-link>
      </div>
      <div v-else class="login-block">
        <span>{{ username }}</span>
        <span @click="logOut()" class="logout">Đăng xuất</span>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../uncommon/Logo.vue";
export default {
  components: {
    Logo,
  },
  data() {
    return {
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    username() {
      return this.$store.state.currentUser.name;
    }
  },
  methods: {
  },
  
};
</script>

<style lang="scss" scoped>
$deepBlue: #6389cb;
* {
  color: white;

  font-family: "Josefin Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
}
a {
  color: white;
  font-family: "Josefin Sans", sans-serif;
  padding: 0 5px;
  transition: 0.3s;
  border-bottom: 1px solid transparent;
  padding-bottom: 3px;
  &:hover {
    border-bottom: 1px solid white;
    color: white;
  }
}
select {
  border: 0;
  outline: none;
  background: transparent;
  width: 100px;
  position: relative;
  top: 2px;

  /*for firefox*/
  -moz-appearance: none;
  /*for chrome*/
  // -webkit-appearance:none;
  // appearance: none;
}
.header {
  width: 100%;
  height: 46px;
  background-color: $deepBlue;
  display: flex;
  align-items: center;
  margin: 0;
  .heart {
    position: relative;
    top: 2px;
    left: 0;
  }
}
.right-header {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.login-block {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 6px;
  span {
    border-bottom: 1px solid transparent;
    padding-bottom: 3px;
    margin: 0 5px;
    &:hover {
      border-bottom: 1px solid white;
      color: white;
    }
  }
  .logout {
    cursor: pointer;
  }
}
.left-header {
  display: flex;
  justify-content: flex-start;
}
</style>
