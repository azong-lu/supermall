<template>
  <div class="list-item">
    <img :src="data.show.img" alt="">
    <div class="list-info">
      <p>{{data.title}}</p>
      <span class="price">{{data.price}}</span>
      <span class="collect">{{data.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props:{
      data:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .list-item{
    position: relative;
    width: 45%;
    padding-bottom: 40px;
  }
  .list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .list-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .list-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .list-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .list-info .collect {
    position: relative;
  }
  .list-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
