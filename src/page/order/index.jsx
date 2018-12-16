import React from 'react';
import HeadTitle from 'component/head-title/index.jsx';
import TableList from 'component/table-list/index.jsx';
import OrderService from 'service/order-service.jsx';
let orderS = new OrderService();
class Order extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pageNum:1,
            list: []
        }
    }
    getAllOrderList(){
        let requestInfo = {
            pageNum: this.state.pageNum,
            pageSize: 10
        };
        orderS.loadOrderList(requestInfo).then(res => {
            this.setState(res);
        },err =>{
            alert(err.msg);
        })
    }
    componentDidMount(){
        this.getAllOrderList()
    }
    render(){
        let bodyList = this.state.list.map((item, index) => {
            return(
                <tr key={index}>
                    <td>item.orderNo</td>
                    <td>item.orderNo</td>
                    <td>item.statusDesc</td>
                    <td>item.payment</td>
                    <td>item.createTime</td>
                    <td>item.orderNo</td>
                </tr>
            )
        });
        return(
            <div id="page-wrapper">
                <HeadTitle title="订单列表" />
                <div className="row">
                    <div className="col-md-12">
                        <TableList headList = {["订单号","付款人","订单状态","订单总价","创建时间","操作"]}>
                            {bodyList}
                        </TableList>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;