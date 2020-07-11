<template>
  <div class="check-box">
    <img :class="{check: isChecked}" src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckBoc",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
  .check-box img{
    border-radius: 50%;
    border: 2px solid #cccccc;
  }
  .check{
    border:2px solid var(--color-tint) !important;
    background: var(--color-high-text);
  }
</style>
