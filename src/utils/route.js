import Taro from '@tarojs/taro'
import {gotoPage} from "./commonFnc";

/*跳转到商品详情*/
function routeToGoodDetail(params={}, options={}) {
  gotoPage('/pages/goods/detail/index',params, options)
}
/*跳转到购物车页面*/
function routeToCart() {
  Taro.switchTab({
    url: '/pages/cart/index'
  })
}
/*跳转到购物车页面*/
function routeToUser() {
  Taro.switchTab({
    url: '/pages/user/index'
  })
}
/*跳转到地址列表页面*/
function routeToAddress(params={}, options={}) {
  gotoPage('/pages/address/index',params, options)
}
/*跳转到新增地址页面*/
function routeToPlusAddress(params={}, options={}) {
  gotoPage('/pages/address/edit/index',params, options)
}
/*跳转到地址搜索页面*/
function routeToAddrSearch(params={}, options={}) {
  gotoPage('/pages/address/search/index',params, options)
}
/*跳转到订单列表页面*/
function routeToOrderList(params={}, options={}) {
  gotoPage('/pages/order/list/index',params, options)
}
/*跳转到订单详情页面*/
function routeToOrderDetail(params={}, options={}) {
  gotoPage('/pages/order/detail/index',params, options)
}
/*跳转到订单评论页面*/
function routeToOrderComment(params={}, options={}) {
  gotoPage('/pages/comment/add/index',params, options)
}
/*跳转到申请退款页面*/
function routeToOrderRefund(params={}, options={}) {
  gotoPage('/pages/order/refund/index',params, options)
}
/*跳转到评论列表页面*/
function routeToCommentList(params={}, options={}) {
  gotoPage('/pages/comment/list/index',params, options)
}

/*跳转到我的评论页面*/
function routeToMyCommentList(params={}, options={}) {
  gotoPage('/pages/user/comment/index',params, options)
}

export {
  routeToGoodDetail,
  routeToCart,
  routeToUser,
  routeToAddress,
  routeToPlusAddress,
  routeToAddrSearch,
  routeToOrderList,
  routeToOrderDetail,
  routeToOrderComment,
  routeToOrderRefund,
  routeToCommentList,
  routeToMyCommentList
}

