<template>
  <div class="cart-list">
    <scroll ref="scroll" class="cart-content">
      <cart-list-item v-for="(item,index) in product"
                      :key="index"
        :products="item"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  import CartListItem from "./CartListItem";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cartlist",
    components:{
      Scroll,
      CartListItem
    },
    computed:{
      ...mapGetters(['product'])
    },
    activated() {
      this.$refs.scroll.scrollRefresh()
    }
  }
</script>

<style scoped>
  .cart-list{
    position: relative;
    height: calc(100vh - 44px - 49px - 40px);
  }
   .cart-content{
    height: 100%;
     overflow: hidden;
   }
</style>
