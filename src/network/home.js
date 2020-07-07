import {request} from './request'
export function getmultidata() {
  return request({
    url:'home/multidata'
  })
}
