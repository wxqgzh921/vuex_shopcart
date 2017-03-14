<template>
  <div id="app">
  	 <h1>Shopping Cart </h1>
  	 <shoplist></shoplist>
  </div>
</template>

<script>
import shoplist from './components/shopList'
export default {
  name: 'app',
  components:{
  	shoplist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
