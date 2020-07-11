<template>
  <div class="list-item">
    <div class="item-selector" >
      <check-box :is-checked="products.isChecked" @click.native="checkedChange"/>
    </div>
    <div class="item-img">
      <img :src="products.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{products.title}}</div>
      <div class="item-desc">{{products.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{products.price}}</div>
        <div class="item-count">x{{products.count}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  import CheckBox from "components/content/checkbox/CheckBox";
  export default {
    name: "CartListItem",
    props:{
      products:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      CheckBox,
    },
    methods:{
      checkedChange(){
         this.products.isChecked = ! this.products.isChecked
      }
    }
  }
</script>

<style scoped>
  .list-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 6px solid #eee;
    border-radius: 10px;
  }
  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .item-title {
    font-size: 18px;
    margin-bottom: 4px;
  }
  .item-img {
    padding: 5px;
  }
  .item-img img {
    width: 80px;
    height: 120px;
    display: block;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .item-info {
    font-size: 17px;
    color:#333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info, .item-desc {
    color: #666;
    font-size: 14px;
  }
  .item-desc {
    margin-top:15px;
  }
  .info-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  .item-price {
    color: #ffb805;
    font-size: 20px;
  }
  .item-count {
    font-size: 20px;
  }
</style>
