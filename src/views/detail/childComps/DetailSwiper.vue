<template>
   <div>
     <swiper class="detail">
       <swiper-item v-for="item in topImage">
         <img :src="item" alt="">
       </swiper-item>
     </swiper>
   </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImage:{
        type:Array,
        default(){
          return []
        }
      }
    },
    mounted() {
      // console.log(this.topImage);
    }
  }
</script>

<style scoped>
   .detail{
     height: 200px;

   }
</style>
