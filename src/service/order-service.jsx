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
}
export default OrderService;