<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probeType: {
        type:Number,
        default:0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true
      })
      //监听滚动位置
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
        // console.log('------');
      })
      //下拉加载更多
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    },
    methods:{
      ScrollTo(x,y,time=500){
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      scrollFinish(){
        this.scroll &&this.scroll.finishPullUp()
      },
      scrollRefresh(){
        this.scroll && this.scroll.refresh()
        // console.log('-------');
      },
    //  保证调用方法时scroll已经挂载完成
      getScrollY(){
        return this.scroll? this.scroll.y:0
        // return this.scroll? Math.abs(Math.round(this.scroll.y)):0


        // console.log('-----');
      }
    }
  }
</script>

<style scoped>

</style>
