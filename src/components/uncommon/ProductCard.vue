<template>
  <div class="product-card">
    <div class="image">
      <img :src="imgLink" />
    </div>

    <div class="info">
      <h4>
        <router-link class="link" to="`product/`+this.post.productID">{{name}}</router-link>
      </h4>
      <img src="../../assets/3dots.png" alt class="dots" />
      <div class="price"></div>
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

  &:hover {
    box-shadow: 0 6px 10px -1px rgba(0, 0, 0, 0.1),
      0 2px 8px -1px rgba(0, 0, 0, 0.06);
  }
  &:hover img {
    transform: scale(1.08);
    object-fit: cover;
  }
  .link:hover {
    color: $deepBlue;
  }

  .image {
    overflow: hidden;
    min-height: 280px;
  }
  img {
    display: block;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: 0.3s;
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
  }
}
</style>
