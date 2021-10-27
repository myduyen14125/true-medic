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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo{
  position: absolute;
  top: 30px;
  left: 10px;
}
</style>