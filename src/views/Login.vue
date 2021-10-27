<template>
  <div class="login-container">
    <h1 style="font-wieght: 700;">ĐĂNG NHẬP</h1>
    <p>Chào mững bạn đã quay lại với True Medic !</p>
    <form action=""  v-on:submit.prevent="$router.push({
      path: '/dashboard'
    })">
    <input type="text" placeholder="Tên đăng nhập" required>
    <input type="password" placeholder="Mật khẩu" required>
    <div class="more">
      <div class="remember-me">
        <input type="checkbox">
        <span>Lưu tài khoản</span>
      </div>
      <a href="#">Quên mật khẩu?</a>
    </div>
    <button>Đăng nhập</button>
  </form>
  <div class="need-account">
    <p>Bạn chưa có tài khoản? </p>
    <router-link to="/signup">Đăng ký tại đây</router-link>
  </div>
    
  </div>
    
</template>

<style scoped>
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

.login-container{
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
  border-radius: 10px;
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
  border-radius: 10px;
  border: 1px solid #6389CB;
  color: #151875;
  margin: 20px auto;
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

</style>