<template>
    <div class="default-layout">
        <Header/>
        <Navbar/>
        <slot/>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/common/Header.vue'
import Navbar from '../components/common/Navbar.vue'
import Footer from '../components/common/Footer.vue'

export default ({
    components: {
        Header,
        Navbar,
        Footer
    }
})
</script>

<style scoped>
.default-layout{
    margin: 0;
}
</style>