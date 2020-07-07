<template>
  <div id="home">
     <nav-bar class="home-nav">
       <div slot="center">
         购物街
       </div>
     </nav-bar>
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childrenComp/HomeSwiper";
  import RecommendView from "./childrenComp/RecommendView";
  import {getmultidata} from "network/home";

  export default {
    name: "home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return{
        banners : [],
        recommends: []
      }
    },
    created() {
      getmultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var( --color-tint);
    color: white;
    box-shadow: 0px 0px 1px rgba(100,100,100,0.1);
  }

</style>
