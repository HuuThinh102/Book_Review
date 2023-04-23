<template>
    <Header></Header>
    <h1 class="font-adelaide text-center my-4" id="title">BOOK IS LIFE</h1>
    <RouterView></RouterView>

    <Footer></Footer>

</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    components: { Header, Footer }
}
</script>

<style scoped>
.logo {
  width: 40px;
}

a {
  color: #fff;
  text-decoration: none;
}

i {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin: 0 8px 0 0;
}
</style>