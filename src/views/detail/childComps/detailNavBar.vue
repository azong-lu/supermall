<template>
  <div class="detail-nav-bar">
     <nav-bar>
       <div slot="left">
         <img src="~assets/img/common/back.svg" alt="" class="back" @click="back">
       </div>
       <div slot="center" class="center">
         <div
           v-for="(item,index) in titles" class="center-item"
           :class="{active:index===currentIndex}"
           @click="itemClick(index)"
         >
           {{item}}
         </div>
       </div>
     </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "detailNavBar",
    data(){
      return{
        titles: ['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
      },
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .center{
    display: flex;
    font-size: 13px;
  }
  .center-item{
    flex: 1
  }
  .active{
    color: var(--color-high-text);
  }
  .back{
    width: 18px;
    height: 18px;
    margin-top: 12px;
  }
</style>
