<template>
  <div>
  <router-view></router-view>
 <div id="tab-bar">
 <maintab></maintab>
 </div>
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
  #tab-bar{
    background: #f6f6f6;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;

  }
</style>
