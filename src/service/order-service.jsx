import Util from 'util/util.jsx';
let util = new Util();
class OrderService{
    loadOrderList(requestInfo){
        return util.doRequest({
            url:"/manager/order/list.do",
            type:'post',
            data:requestInfo
        })
    }
    /*
     获取订单详情
     */
    getDetailByOrderNo(orderNo){
        return util.doRequest({
            url:"/manager/order/detail.do",
            type:"post",
            data: orderNo
        })
    }
    /*
    订单发货
     */
    sendGoods(orderNo){
        return util.doRequest({
            url:"/manager/order/send_goods.do",
            type:"post",
            data: orderNo
        })
    }


}
export default OrderService;