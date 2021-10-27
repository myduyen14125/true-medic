<template>
    <div class="unauth-layout">
        <Logo/>
        <slot/>
    </div>
</template>

<script>
import Logo from '../components/uncommon/Logo.vue'
export default ({
    components: {
      Logo
    }
})
</script>

<style scoped>
.unauth-layout{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #e2eefa 0%, rgba(196, 196, 196, 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo{
  position: absolute;
  top: 15px;
  left: 0px;
  color: #6389CB;
  padding: 10px;
}
</style>