<template>
  <div class="cart">
  <nav-bar class="cart-nav">
    <div slot="center">购物车({{productLength}})</div>
  </nav-bar>
    <cart-list/>
    <cart-bottom-bar class="cart-bottom-bar"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";


  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      ...mapGetters(['productLength','product'])
    }
  }
</script>

<style scoped>
  .cart-nav{
    background-color: var(--color-tint);
    color: white;
  }

</style>
