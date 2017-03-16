<template>
  <div id="app">
  	 <h1>Shopping Cart </h1>
  	 <shoplist></shoplist>
  	 <cartlist></cartlist>
  	 <info></info>
  </div>
</template>

<script>
import shoplist from './components/shopList'
import cartlist from './components/cartList'
import info from './components/Info'
export default {
  name: 'app',
  components:{
  	shoplist,
  	cartlist,
  	info
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
