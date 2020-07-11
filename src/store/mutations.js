export default {
  addCount(state,payload){
    payload.count++
  },
  pushProduct(state,payload){
    payload.count = 1
    payload.isChecked = true
    state.productList.push(payload)
  }
}
