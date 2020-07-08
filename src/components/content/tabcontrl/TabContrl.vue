<template>
  <div class="tab-contrl">
    <div class="tab-contrl-item" v-for="(item,index) in titles"
         :class="{active:index===currentIndex}"
    @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabContrl",
    props:{
      titles:{
        type:Array
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      tabClick(index){
        this.currentIndex=index
        this.$emit('itemclick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-contrl{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #ffffff;
    z-index: 9;
  }
  .tab-contrl-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);

  }
  .active span{
    border-bottom:2px solid var(--color-tint);
    padding: 5px;
  }
</style>
