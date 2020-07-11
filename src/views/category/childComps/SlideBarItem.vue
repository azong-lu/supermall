<template>
  <div class="slide-bar-item">
    <div >
      {{ slideItem.title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "SlideBarItem",
    props:{
      slideItem:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      slideItemClick(){
        this.$emit('slideItemClick')
      }
    }
  }
</script>

<style scoped>
  .slide-bar-item {
    font-size: 14px;
    line-height: 45px;
    width: 100px;
    height: 45px;
    user-select: none;
    text-align: center;
    color: #666666;
    border: 0;
    outline: none;
    background: none;
  }
</style>
