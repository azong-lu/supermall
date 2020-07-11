<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @navClick="navClick" ref="detailnav"/>
    <scroll class="content" ref="scroll"  :probe-type="3" @scroll="contentScroll">
       <detail-swiper :top-image="topImage"/>
       <detail-base-info :goods="goods"/>
       <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoaded="imageLoaded"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comments" :comment-info="commentInfo"/>
      <goods-list ref="recommends" :goods="recommendInfo"/>
     </scroll>
    <click-back @click.native="backClick" v-show="isShowBtn"/>
    <detail-bottom-bar @addCart="addCart"/>

  </div>
</template>

<script>
  import detailNavBar from "./childComps/detailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";


  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail";
  import {itemClickListener,clickBackLister} from 'common/mixin'
  import {debounce} from "../../common/Utils";



  export default {
    name: "Detail",
    data(){
      return{
        id:null,
        topImage:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendInfo:[],
        topScrollY:[],
        imageScrollY:null,
        currentIndexs:0,

      }
    },
    mixins:[itemClickListener,clickBackLister],
    components:{
      detailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    created() {
      this.id = this.$route.params.iid

      //请求详情数据
      getDetail(this.id).then((res) => {
        console.log(res);
        const data = res.result
        this.topImage = data.itemInfo.topImages
        // console.log(this.topImage);
        this.goods = new Goods (data.itemInfo,data.columns,data.shopInfo.services)

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo;

        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //获取评论数据
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }

      })

    //  请求推荐数据
      getRecommend().then((res) => {
        this.recommendInfo = res.data.list
      })

    // 获取组件顶部距离
      this.imageScrollY = debounce(() => {
        this.topScrollY = []
        this.topScrollY.push(0)
        this.topScrollY.push(this.$refs.params.$el.offsetTop)
        this.topScrollY.push(this.$refs.comments.$el.offsetTop)
        this.topScrollY.push(this.$refs.recommends.$el.offsetTop)

        this.topScrollY.push(Number.MAX_VALUE)
        console.log(this.topScrollY);
      },200)
    },
    methods:{
      imageLoaded(){
        // console.log('-------');
        this.$refs.scroll.scrollRefresh()

        this.imageScrollY()

      },
      navClick(index){
        // console.log(this.topScrollY);
        this.$refs.scroll.ScrollTo(0,-this.topScrollY[index],500)
      },
      contentScroll(position){
        // console.log('-----');
        const positionY = - position.y
        // console.log(positionY);
        const length =this.topScrollY.length
        for (let i=0;i< length-1;i++){
            if(this.currentIndexs !== i &&
              (i<length-1 && positionY>=this.topScrollY[i] && positionY <= this.topScrollY [i+1])){
              this.currentIndexs = i
              console.log(this.currentIndexs);
              this.$refs.detailnav.currentIndex= this.currentIndexs
            }
        }
        this.isShowBtn = (-position.y)>1000
      },
      //添加购物车
      addCart(){
        const product = {}
        product.image = this.topImage[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.id;
        product.newPrice = this.newPrice;

        this.$store.dispatch('addToCart',product).then((res) =>{
          this.$toast.isShow(res)
        })
      }
    },
    destroyed() {
      this.$bus.$off('itemClickListener',this.imageLoads)
    }
  }
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background: #ffffff;
  }
  .content{
    /*height: calc(100% - 44px- 49px);*/
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
