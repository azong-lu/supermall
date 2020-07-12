<template>
  <div class="category">
    <nav-bar class="cate-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <slide-bar :slide-bar="categoryList" @slideClick="slideClick"/>
    <scroll class="scroll-height">
      <sub-category :subList="subCategory"/>
      <tab-contrl :titles="title" class="category-tab"  ref="subTab" @itemclick="subClick"/>
      <goods-list :goods="CategoryDetail"/>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import SlideBar from "./childComps/SlideBar";
  import SubCategory from "./childComps/SubCategory";

  import {getCategory,getSubcategory,getCategoryDetail} from "network/category";

  import Scroll from "components/common/scroll/Scroll";
  import TabContrl from "components/content/tabcontrl/TabContrl";
  import GoodsList from "components/content/goods/GoodsList";

  export default {
    name: "category",
    components:{
      NavBar,
      SlideBar,
      SubCategory,
      Scroll,
      TabContrl,
      GoodsList
    },
    data(){
      return{
        categoryList:[],
        subCategory: [],
        CategoryDetail:[],
        title:["流行", "新款", "精选"],
        currentIndex:0,
        currentType:null
      }
    },
    created() {
      this.getCategory()


    },
    methods:{
      slideClick({maitKey, index}){

        this.getSubcategory(maitKey)

        this.$refs.subTab.currentIndex = 0

        if(this.currentIndex===index)return{};
        this.currentIndex = index


        this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey,'pop')
      },
      subClick(index){
        switch (index) {
          case 0:this.currentType='pop'
            break
          case 1:this.currentType='new'
            break
          case 2:this.currentType='sell'
            break
        }
        this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey,this.currentType)
      },


      //数据请求
      getCategory(){
        getCategory().then((res) =>{
          // console.log(res);
          this.categoryList = res.data.category.list;
          // console.log(this.categoryList);
          this.$nextTick(() => {
            this.getSubcategory(this.categoryList[0].maitKey)
            this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey,'pop')
          })
        })
      },
      getSubcategory(key){
        getSubcategory(key).then((res) => {
          this.subCategory = res.data.list
          // console.log(this.subCategory);
        })
      },
      getCategoryDetail(key,type){
          getCategoryDetail(key,type).then((res) =>{
            this.CategoryDetail = res
            // console.log(this.categoryList);
          })
      }
    }
  }
</script>

<style scoped>
  .category{}
  .cate-nav{
    background: var(--color-tint);
    color: white;
  }
  .scroll-height {
    position: fixed;
    top: 44px;
    right: 0;
    bottom: 50px;
    left: 100px;
    overflow: hidden;
  }
  .category-tab{
    background: white;
    box-shadow: 0px 3px 10px rgba(100,100,100,0.1);
  }
</style>
