<template>
  <div id="tab-bar-item" @click="btnclick">
   <div v-if="!isActive"><slot name="icorn"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="activeStyle"><slot name="title"></slot></div>
<!--    这两个插槽插入图片和文字-->
  </div>
</template>

<script>
  export default {
    name: "tab-bar-item",
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      //  等于-1说明二者不相等
      },
      activeStyle(){
        return this.isActive?{color:this.activecolor}:{}
      }
    },
    methods:{
      btnclick(){
        this.$router.push(this.path)
      }
    },
    props:{
      path:String,
      activecolor:{
        type:String,
        default:'red'
      }
    }
  }
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    box-shadow: 0px -3px 10px rgba(100,100,100,0.1);

  }
  #tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align:middle;
    margin-bottom: 2px;
  }

</style>
