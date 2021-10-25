<template>
    <div class="header">
        <div class="left-header" style="width: 55%">
            <Logo/>
        </div>
        <div class="right-header" style="width: 35%">
            <select id="s">
                <option id="vietnam" value="/">Tiếng Việt</option>
                <option id="english" value="/en/">English</option>
            </select>
            <router-link to="/login" class="wishlist">Danh sách ước <b-icon-heart-fill class="heart"></b-icon-heart-fill></router-link>
            <div class="login-block">
                <router-link to="/login">Đăng nhập</router-link> | 
                <router-link to="/signup">Đăng ký </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../uncommon/Logo.vue'
export default ({
    components: {
      Logo
    }
})
</script>

<style lang="scss" scoped > 
$deepBlue: #6389CB;
* {
    color: white;

    font-family: 'Josefin Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
}
a {
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    padding: 0 5px;
}
select {
    border: 0; 
    outline:none; 
    background:transparent; 
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
}
.left-header {
    display: flex;
    justify-content: flex-start;
}
</style>
