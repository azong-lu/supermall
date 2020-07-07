<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="icorn" src="~assets/img/tabbar/home.png" alt="">
        <img slot="icon-active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="title">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="icorn" src="~assets/img/tabbar/category.png" alt="">
        <img slot="icon-active" src="~assets/img/tabbar/category_active.png" alt="">
        <div slot="title">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="icorn" src="~assets/img/tabbar/cart.png" alt="">
        <img slot="icon-active" src="~assets/img/tabbar/cart_active.png" alt="">
        <div slot="title">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="icorn" src="~assets/img/tabbar/profile.png" alt="">
        <img slot="icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
        <div slot="title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import tabBarItem from 'components/common/tabbar/tab-bar-item'
  import tabBar from 'components/common/tabbar/tabbar'
  export default {
    name: "maintab",
    components:{
      tabBarItem,
      tabBar
    }
  }
</script>

<style scoped>

</style>
