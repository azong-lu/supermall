<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <scroll class="wrapper" ref="scroll"
            :probe-type="3" :pull-up-loade="true"
             @pullingUp="lodeMore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-contrl :titles="['流行', '新款', '精选']"
                  class="home-tab" @itemclick="itemclick"/>
      <goods-list :goods="getCurrentType" />
    </scroll>
<!--    <click-back @click.native="backClick" v-show="isShowBtn"/>-->

  </div>
</template>

<script>

  import HomeSwiper from "./childrenComp/HomeSwiper";
  import RecommendView from "./childrenComp/RecommendView";
  import FeatureView from "./childrenComp/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabContrl from "components/content/tabcontrl/TabContrl";
  import GoodsList from "components/content/goods/GoodsList";
  // import ClickBack from "components/content/clickback/ClickBack";
  import Scroll from "components/common/scroll/Scroll";

  import {getmultidata,getData} from "network/home";
  import {itemClickListener,clickBackLister} from 'common/mixin'

  import {debounce} from "common/Utils";




  export default {
    name: "home",
    components:{

      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabContrl,
      GoodsList,
      // ClickBack,
      Scroll
    },
    //重复代码的混入
    mixins:[itemClickListener,clickBackLister],
    data(){
      return{
        banners : [],
        recommends: [],
        goods:{
          'pop': {page: 0,list:[]},
          'new': {page: 0,list:[]},
          'sell': {page: 0,list:[]}
        },
        currentType:'pop',
        tabContorlShow:false,
        saveY:0,
        // imageLoad:null
      }
    },
    created() {
      this.getmultidata()
      this.getData('pop')
      this.getData('new')
      this.getData('sell')


    },
    mounted() {
      // const loadRefresh = debounce(this.$refs.scroll.scrollRefresh,50)
      // this.imageLoad = () => {
      //   loadRefresh()
      // }
      // this.$bus.$on('itemImageLoad',this.imageLoad)
     //   执行debound的返回函数)
     // 写在created中，可能无法找到scroll这个元素
    },
    activated() {
      // console.log('activated');
      this.$refs.scroll.ScrollTo(0,this.saveY,0)
      // console.log(this.saveY);

      this.$refs.scroll.scrollRefresh()
    },
    deactivated() {
      // console.log('deactivated');
      this.saveY = this.$refs.scroll.getScrollY()
      // console.log(this.saveY);
      this.$bus.$off('itemImageLoad',this.imageLoads)
    },
    computed:{
      getCurrentType(){
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
      // btnShow(position){
      //   // console.log(position);
      //   this.isShowBtn = (-position.y)>1000
      // },
      lodeMore(){
        this.getData(this.currentType)

      },





      //数据请求
      getmultidata(){
        getmultidata().then((res) => {
          // console.log(res);
          this.banners = res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },

      getData(type){
        const page=this.goods[type].page+1;
        getData(type,page).then((res) => {
          const page=this.goods[type].page+1;
          // console.log(res);
          // console.log(res.data.list);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++

          this.$refs.scroll.scrollFinish()

        })
      },

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
    box-shadow: 0 0 1px rgba(100,100,100,0.1);
    z-index: 9;
  }
  .home-tab{
    position: sticky;
    top: 44px;
  }
  .wrapper{
    position: absolute;
    top: 43px;
    right: 0;
    bottom: 49px;
    left: 0;
    overflow: hidden;
  }

</style>
