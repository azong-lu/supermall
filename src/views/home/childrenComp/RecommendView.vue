<template>
  <div class="recommend">
    <a v-for="item in recommends" :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>

</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    margin-top: 15px;

  }
  .recommend a{
    flex: 1;
    border-bottom: #eee 12px solid;
    padding-bottom: 15px;
  }
  .recommend img{
    margin-bottom: 5px;
    width: 65px;
    height: 65px;
  }
</style>
