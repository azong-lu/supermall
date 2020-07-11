<template>
  <div class="slide-bar">
    <scroll class="slide-bar-height">
      <div v-for="(item, index) in slideBar">
      <div
        :class="{active: currentIndex===index }"
        :key="index"
        @click="slideBarClick(item,index)"
        class="slide-bar-item"
      >
        {{ item.title }}
      </div>
    </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import SlideBarItem from "./SlideBarItem";
  export default {
    name: "SlideBar",
    components:{
      Scroll,
      SlideBarItem
    },
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      slideBar:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      slideBarClick(item,index){
        this.currentIndex = index
        this.$emit('slideClick',item)
      }
    }
  }
</script>

<style scoped>
  .slide-bar {
    width: 100%;
  }

  .slide-bar-height {
    position: fixed;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0;
    overflow: hidden;
    width: 100px;
    background-color: #f6f6f6;
  }
  .active {
    color: var(--color-high-text);
    border-left: 3px solid var(--color-tint);
    background-color: #ffffff;
  }
  .slide-bar-item {
    font-size: 14px;
    line-height: 45px;
    width: 100px;
    height: 45px;
    text-align: center;
   }
</style>
