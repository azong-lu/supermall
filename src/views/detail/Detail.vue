<template>
  <div>
     <detail-nav-bar />
    <detail-swiper :top-image="topImage"/>
  </div>
</template>

<script>
  import detailNavBar from "./childComps/detailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";


  import {getDetail} from "network/detail";


  export default {
    name: "Detail",
    data(){
      return{
        id:null,
        topImage:[]
      }
    },
    components:{
      detailNavBar,
      DetailSwiper
    },
    created() {
      this.id = this.$route.params.iid
      getDetail(this.id).then((res) => {
        // console.log(res);
        this.topImage = res.result.itemInfo.topImages
        // console.log(this.topImage);
      })
    }
  }
</script>

<style scoped>

</style>
