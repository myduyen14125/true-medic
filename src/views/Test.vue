<template>
<div class="mt-5">
  <vue-timeline-update
    :date="new Date('2017-02-26')"
    title="v2.2.0 - Initial D"
    description="Cụm Công nghiệp Hạp Lĩnh, phường Hạp Lĩnh, thành phố Bắc Ninh"
    category="Công ty Dược phẩm và Thương mại Phương Đông"
    icon="code"
    color="red"
  />

  <!-- Another update -->
  <vue-timeline-update
    :date="new Date('2016-11-22')"
    title="v2.1.0 - Hunter X Hunter"
    description="Ngõ 15, Đường Ngọc Hồi, P.Hoàng Liệt, Q.Hoàng Mai, Hà Nội"
    category="Công ty cổ phần Traphaco"
    icon="code"
    color="turquoise"
  />

  <!-- Yet another update -->
  <vue-timeline-update
    :date="new Date('2016-09-30')"
    title="v2.0.0 - Ghost in the Shell"
    description="Số 85, phố Hồng Mai, phường Quỳnh Lôi, quận Hai Bà Trưng, thành phố Hà Nội"
    category="Nhà thuốc Hồng Mai"
    icon="code"
    color="orange"
    is-last
  />

  <vue-timeline-update
    :date="new Date('2016-09-30')"
    title="v2.0.0 - Ghost in the Shell"
    description="Số 3 ngõ 23 đường Xuân La, phường Xuân La, quận Tây Hồ, thành phố Hà Nội"
    category="Nhà thuốc Minh Phúc"
    icon="code"
    color="green"
    is-last
  />
</div>
    
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '1960',
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ],
    }),
  }
</script>

<style>

</style>