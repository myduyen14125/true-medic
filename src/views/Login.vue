<template>
  <div class="login-container">
    <h1 style="font-wieght: 700;">ĐĂNG NHẬP</h1>
    <p>Chào mững bạn đã quay lại với True Medic !</p>
    <form
      action=""
      v-on:submit.prevent="
        $router.push({
          path: '/',
        })
      "
    >
      <input type="text" placeholder="Tên đăng nhập" required />
      <input type="password" placeholder="Mật khẩu" required />
      <div class="more">
        <div class="remember-me">
          <input type="checkbox" />
          <span>Lưu tài khoản</span>
        </div>
        <a href="#">Quên mật khẩu?</a>
      </div>
      <button class="login-google" @click="login()">
        <img src="../assets/Google_Logo.svg.png" alt="" />
        <span>Đăng nhập với Google</span>
      </button>
      <button @click.prevent="signIn">ĐĂNG NHẬP</button>
    </form>
    <div class="need-account">
      <p>Bạn chưa có tài khoản?</p>
      <router-link to="/signup">Đăng ký tại đây</router-link>
    </div>
  </div>
</template>

<script>
// import firebase from "firebase/app";
// import "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      error: null,
      errorMessage: '',
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    async login() {
      const googleUser = await this.$gAuth.signIn();
      this.$store.state.currentUser.name = googleUser.getBasicProfile().Re;
      console.log("googleUser: ", googleUser.getBasicProfile().Re);
      console.log("googleUser: ", googleUser.getBasicProfile());
      this.$store.state.isLogin = this.$gAuth.isAuthorized;
      if (this.isLogin) {
        this.$router.push({
          path: "/",
        });
      }
    },
    //use firebase here
    // signIn() {
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.email, this.password)
    //     .then(() => {
    //       this.$router.push({ path: "/" });
    //       this.error = false;
    //       this.errorMessage = "";
    //       console.log(firebase.auth().currentUser.uid);
    //     })
    //     .catch((err) => {
    //       this.error = true;
    //       this.errorMessage = err.message;
    //     });
    // }
  },
};
</script>
<style lang="scss" scoped>
a {
  color: #151875;
  border-bottom: 1px solid white;
  transition: 0.4s;
  padding-bottom: 0px;
}
a:active {
  color: #6389cb;
}
a:hover {
  border-bottom: 1px solid #151875;
}

.login-container {
  width: 450px;
  padding: 1rem;
  text-align: center;
  box-shadow: 5px 5px 13px -4px rgba(0, 0, 0, 0.71);
  border-radius: 25px;
  background: white;
  color: #151875;
}
input {
  display: block;
  padding: 20px;
  border-radius: 15px;
  background-color: #f3f3f3;
  color: #151875;
  width: 100%;
  margin: 20px auto;
  border: none;
  box-sizing: border-box;
  transition: 0.4s;
  border: 1px solid white;
  outline: none;
}
input:hover {
  border: 1px solid #6389cb;
}
button {
  width: 100%;
  padding: 15px;
  font-size: 1.15rem;
  border-radius: 15px;
  border: 1px solid #6389cb;
  color: #151875;
  margin: 8px auto;
  transition: 0.4s;
  cursor: pointer;
}
button:hover {
  background-color: #6389cb;
  color: white;
}
.more {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}
.more .remember-me {
  display: flex;
  width: 50%;
  align-items: center;
}
input[type="checkbox"] {
  width: fit-content;
  margin: 10px;
}
.need-account {
  display: flex;
  justify-content: space-between;
}
.login-google {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 18px;
    height: 20px;
    margin: 0 10px;
  }
}
</style>
