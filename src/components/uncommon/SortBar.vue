<template>
    <div class="sort-header">
          <div class="title">
            <h4>Thuốc và thực phẩm chức năng</h4>
            <p>
              Khoảng <span>80</span> kết quả trong
              <span class="time"> 0.93 </span> s
            </p>
          </div>
          <div class="sort-bar">
            <div class="page-count">
              Số trang :
              <span>10</span>
            </div>
            <div class="sort-menu">
              Sắp xếp :
              <select id="sort">
                <option id="new">Mới nhất</option>
                <option id="low-price">Giá thấp nhất</option>
                <option id="high-price">Giá cao nhất</option>
                <option id="rate">Mức độ đánh giá</option>
              </select>
            </div>

            <div class="view">
              Cách xem:
              <b-icon icon="grid-fill" class="icon"></b-icon>
              <b-icon icon="menu-button-wide-fill" class="icon"></b-icon>
            </div>
          </div>
        </div>
</template>

<style lang ="scss" scoped>
$deepBlue: #151875;
$fadeBlue: #3f509e;
$blurBlue: #6f88fd;
.sort-header {
  display: flex;
  height: 40px;
  .title {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    h4 {
      margin: 0;

      font-weight: 600;
      line-height: 30px;
    }
    p {
      margin: 0;
      color: $fadeBlue;
    }
  }
  .sort-bar {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    .page-count {
      margin: 0 10px;
      span {
        border: 1px solid $deepBlue;
        border-radius: 8px;
        width: 80px;
        display: inline-block;
        padding: 2px;
      }
    }
    .sort-menu {
      margin: 0 10px;
      select {
        border: 1px solid $deepBlue;
        border-radius: 8px;
        outline: none;
        background: transparent;
        padding: 2px;
        color: $deepBlue;
      }
    }
    .view {
      margin: 0 10px;
      .icon {
        width: 25px;
        height: 25px;
        margin: 0 5px;
      }
    }
  }
}
</style>
