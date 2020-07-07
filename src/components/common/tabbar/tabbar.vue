<template>
  <div id="tab-bar">
   <slot></slot>
<!--    这个插槽插的是tab-bar-item的内容-->
  </div>
</template>

<script>

  export default {
    name: "tabbar",
    components:{

    }
  }
</script>

<style scoped>
  #tab-bar{
    flex: 1;
    height: 49px;
    text-align: center;
    box-shadow: 0px -3px 10px rgba(100,100,100,0.1);

  }

</style>
