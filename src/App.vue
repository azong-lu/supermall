<template>
  <div>
    <keep-alive exclude="Detail">
     <router-view></router-view>
   </keep-alive>
   <maintab id="tab-bar"></maintab></div>
</template>

<script>
import maintab from "components/content/MainTabBar/maintab";

export default {
  name: 'App',
  components: {
    maintab
  }
}
</script>

<style>
  @import "assets/css/base.css";
  #tab-bar{
    background: #f6f6f6;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;

  }
</style>
