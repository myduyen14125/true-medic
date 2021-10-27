<template>
    <div
      class="logo"
      @click="$router.push({
          path: '/',
        })">
      <div class="black">Tr</div>
      ueMedic
    </div>
</template>

<style scoped>
.logo {
  font-size: 20px;
  margin: 0 20px;
  cursor: pointer;
  position: relative;
  top: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.black {
  background-color: white;
  color: #6389CB;
  position: relative;
  top: -15.5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 40px;
  height: 30px;
  margin: 0px;
}
</style>