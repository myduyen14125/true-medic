<template>
  <div class="product-card" >
    <div class="image">
      <img :src="imgLink" />
      <div class="list-icon">
        <div class="icon"><b-icon icon="cart3"></b-icon></div>
        <div class="icon"><b-icon icon="search"></b-icon></div>
        <div class="icon"><b-icon icon="heart"></b-icon></div>
      </div>
    </div>

    <div class="info">
      <h4>
        <router-link class="link" to="`product/`+this.post.productID">{{name}}</router-link>
      </h4>
      <img src="../../assets/3dots.png" alt class="dots" />
      <div class="price">
        <span class="current-price">$25.00</span>
        <span class="origin-price" style="color:red; text-decoration:line-through">$35.00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgLink: String,
    name: String,
  },
  methods: {
    created() {},
  },
};
</script>

<style lang="scss" scoped>
$deepBlue: #151875;
$fadeBlue: #3f509e;
$blurBlue: #6f88fd;
.product-card {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  min-height: 400px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease all;
  overflow: hidden;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.1),
      0 2px 8px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0 6px 10px -1px rgba(0, 0, 0, 0.1),
      0 2px 8px -1px rgba(0, 0, 0, 0.06);
  }
  &:hover img {
    transform: scale(1.08);
    object-fit: cover;
  }
  &:hover .list-icon {
    top: 38%;
    z-index: 2;
  }
  .link:hover {
    color: $deepBlue;
  }

  .image {
    overflow: hidden;
    min-height: 280px;
  }
  img {
    position: relative;
    display: block;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: 0.3s;
    
  }
  
  .list-icon {
    position: absolute;
    z-index: -1;
    top: 60%;
    left: 10px;
    width: 35px; 
    transition: 0.4s;     
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: white;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      margin: 5px 0;
      transition: 0.3s;
      &:hover {
        background-color: $deepBlue;
        color: white;
      }
    }

  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    color: #252525;
    h4 {
      font-size: 20px;
      margin: 0;
      .link {
        font-weight: 700;
        font-family: "Josefin Sans", sans-serif;
        color: $deepBlue;
      }
    }
    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }
    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      padding-bottom: 4px;
      transition: 0.3s;
    }
    img.dots {
      width: 45px;
      margin: 0 auto;
    }
    .price {
      margin: 10px;
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>
