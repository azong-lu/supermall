<template>
  <div class="cart-bottom">
    <div class="selector" >
      <check-box class="selec-box" :class="{check:isSelectAll}" @click.native="selectClick"/>
      <span>全选</span>
    </div>

    <div class="total-price">
      <span>合计：¥</span>
      {{totalPrice}}
    </div>
    <div class="total-count" @click="countClick">
      <span>去结算</span>
      ({{totalCount}})
    </div>
  </div>
</template>

<script>
  import CheckBox from "components/content/checkbox/CheckBox";

  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components:{
      CheckBox,

    },

    computed:{
      ...mapGetters(['productLength','product']),
      totalPrice(){
         return  this.product.
        filter(item => item.isChecked).
        reduce((prev,item) => prev  +item.count *item.price,0).toFixed(2)
      },
      totalCount(){
        return this.product.filter(item => item.isChecked).length
      },
      isSelectAll(){
        if(this.productLength === 0) return false
        return !(this.product.filter(item => !item.isChecked ).length)
      }
    },
    methods:{
      selectClick(){
        // console.log('-----');
        if(this.isSelectAll){
          this.product.forEach(item => item.isChecked = false)
        }
        else{
          this.product.forEach(item => item.isChecked = true)
        }
      },
      countClick(){
          this.$toast.isShow('404 not found')
        }

    }
  }
</script>

<style scoped>
  .cart-bottom{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 49px;
    background: #ffffff;
    display: flex;
    line-height: 40px;
    text-align: center;
    border-top: 1px solid #dddddd;
  }
  .selector{
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
 }
  .selec-box{
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
  }
  .total-price{
    width: 40%;
    flex: 1;
  }
  .total-count{
    background: orangered;
    width: 35%;
   }
</style>
