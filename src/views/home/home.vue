<template>
  <div id="home">
<!--    <scroll class="wrapper">-->
      <nav-bar class="home-nav">
        <div slot="center">
          购物街
        </div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-contrl :titles="['流行', '新款', '精选']" class="home-tab" @itemclick="itemclick"/>
      <goods-list :goods="getCurrentIndex"/>
<!--    </scroll>-->
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>

  import HomeSwiper from "./childrenComp/HomeSwiper";
  import RecommendView from "./childrenComp/RecommendView";
  import FeatureView from "./childrenComp/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabContrl from "components/content/tabcontrl/TabContrl";
  import GoodsList from "components/content/goods/GoodsList";


  import {getmultidata,getData} from "network/home";

  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "home",
    components:{

      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabContrl,
      GoodsList,
      Scroll
    },
    data(){
      return{
        banners : [],
        recommends: [],
        goods:{
          'pop': {page: 0,list:[]},
          'new': {page: 0,list:[]},
          'sell': {page: 0,list:[]}
        },
        currentType:'pop'
      }
    },
    created() {
     this.getmultidata()
      this.getData('pop')
      this.getData('new')
      this.getData('sell')
    },
    computed:{
      getCurrentIndex(){
         return this.goods[this.currentType].list
      }
    },
    methods:{
      //实现方法
      itemclick(index){
        switch (index) {
          case 0:this.currentType='pop'
            break
          case 1:this.currentType='new'
            break
          case 2:this.currentType='sell'
            break
        }
      },

      //数据请求
      getmultidata(){
        getmultidata().then((res) => {
          console.log(res);
          this.banners = res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },
      getData(type,){
        const page=this.goods[type].page+1;
        getData(type,page).then((res) => {
          const page=this.goods[type].page+1;
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
        })
      }
    },

  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background: var( --color-tint);
    color: white;
    box-shadow: 0px 0px 1px rgba(100,100,100,0.1);
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 9;
  }
  .home-tab{
    position: sticky;
    top: 44px;
  }
  .wrapper{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

</style>
