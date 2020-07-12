<template>
  <div class="sub-category">
    <div v-for="(item,index) in subList" class="sub-category-item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubCategory",
    props:{
      subList:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .sub-category {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }

  .sub-category-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 80px;
    height: 100px;
    margin-bottom: 10px;
  }

  .sub-category-item img {
    width: 65px;
    margin-bottom: 7px;
  }

</style>
