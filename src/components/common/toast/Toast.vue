<template>
  <div class="toast" v-show="isShowToast">
   <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return{
        message:'',
        isShowToast:false
      }
    },
    methods:{
      isShow(res,during=1500){
        this.isShowToast = true
        this.message = res
        setTimeout( () =>{
          this.isShowToast = false
          this.message = ''
        },during)
      }
    }
  }
</script>

<style scoped>
  .toast{
    background: rgba(0,0,0,0.6);
    padding: 12px 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 10;
    border-radius: 2px;
  }
</style>
