<template>
  <div id="app">
    <keep-alive exclude="Detail">
     <router-view></router-view>
   </keep-alive>
   <maintab id="tab-bar"></maintab>
  </div>
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
  #app{
    width: 100%;
    height: 100%;
  }
  #tab-bar{
    background: #f6f6f6;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;

  }
</style>
