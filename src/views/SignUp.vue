<template>
  <div class="signup-container">
    <h1>ĐĂNG KÝ</h1>
    <p>Đăng ký để trải nghiệm cùng True Medic !</p>
    <form action=""  v-on:submit.prevent="$router.push({
      path: '/dashboard'
    })">
      <input type="text" placeholder="Username" required>
      <input type="password" placeholder="Password" required>
      <div class="more">
        <div class="remember-me">
          <input type="checkbox">
          <span>Lưu tài khoản</span>
        </div>
        <a href="#">Cần sự giúp đỡ?</a>
      </div>
    <button class="login-google">
      <img src="../assets/Google_Logo.svg.png" alt="">
      <span>Đăng nhập với Google</span>
    </button>
    <button>Đăng ký</button>
    </form>
    <div class="need-account">
      <p>Bạn đã có tài khoản? </p>
      <router-link to="/login">Đăng nhập tại đây</router-link>
    </div>
    
  </div>

</template>

<style lang="scss" scoped>
a{
  color: #151875;
  border-bottom: 1px solid white;
  transition: 0.4s;
  padding-bottom: 0px;
}
a:active{
  color: #6389CB;
}
a:hover{
    border-bottom: 1px solid #151875;
}

.signup-container{
  width: 450px;
  padding: 1rem;
  text-align: center;
  box-shadow: 5px 5px 13px -4px rgba(0,0,0,0.71);
  border-radius: 25px;
  background: white;
  color: #151875;
}
input{
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
input:hover{
  border: 1px solid #6389CB;
}
button{
  width: 100%;
  padding: 15px;
  font-size: 1.15rem;
  border-radius: 15px;
  border: 1px solid #6389CB;
  color: #151875;
  margin: 8px auto;
  transition: 0.4s;
  cursor: pointer;
}
button:hover{
  background-color: #6389CB;
  color: white;
}
.more{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}
.more .remember-me{
  display: flex;
  width: 50%;
  align-items: center;
}
input[type="checkbox"]{
  width: fit-content;
  margin: 10px;
}
.need-account{
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