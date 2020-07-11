import {request} from "./request";

export function getCategory() {
  return request({
    url:'/category'
  })
}


// export function getSubcategory() {
//   return request({
//     url:'/subcategory'
//   })
// }
