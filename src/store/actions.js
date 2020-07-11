export default {
  addToCart(context,payload){
    return new Promise((resolve, reject) => {
      let  oldProduct = null
      for (let item of context.state.productList){
        if (item.iid === payload.iid){
          oldProduct = item
        }
      }
      if (oldProduct){
        context.commit('addCount',oldProduct)
        resolve('商品数量+1')
      }else {
        context.commit('pushProduct',payload)
        resolve('成功加入购物车')

      }
    })
  }
}
