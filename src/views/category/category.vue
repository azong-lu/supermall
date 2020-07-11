<template>
  <div class="category">
    <nav-bar class="cate-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <slide-bar :slide-bar="categoryList"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import SlideBar from "./childComps/SlideBar";

  import {getCategory,getSubcategory} from "network/category";

  export default {
    name: "category",
    components:{
      NavBar,
      SlideBar
    },
    data(){
      return{
        categoryList:[]
      }
    },
    created() {
      getCategory().then((res) =>{
        console.log(res);
        this.categoryList = res.data.category.list;
        console.log(this.categoryList);
      })

      // getSubcategory().then((res) => {
      //   console.log(res);
      // })
    }
  }
</script>

<style scoped>
  .category{}
  .cate-nav{
    background: var(--color-tint);
    color: white;
  }
</style>
