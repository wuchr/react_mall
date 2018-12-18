import React from 'react';
import {NavLink} from 'react-router-dom';
import HeadTitle from 'component/head-title/index.jsx';
import TableList from 'component/table-list/index.jsx';
import OrderService from 'service/order-service.jsx';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';
let orderS = new OrderService();
class Order extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pageNum:1,
            list: [],
            total:0
        }
    }
    getAllOrderList(){
        let requestInfo = {
            pageNum: this.state.pageNum,
            pageSize: 10
        };
        orderS.loadOrderList(requestInfo).then(res => {
            this.setState(res.data);
        },err =>{
            alert(err.msg);
        })
    }
    componentDidMount(){
        this.getAllOrderList()
    }
    onPageNumChange(pageNum){
        this.setState({
            pageNum: pageNum
        },() => {
            this.getAllOrderList()
        })

    }
    render(){
        let bodyList = this.state.list.map((item, index) => {
            return(
                <tr key={index}>
                    <td>{item.orderNo}</td>
                    <td>{item.receiverName}</td>
                    <td>{item.statusDesc}</td>
                    <td>{item.payment}</td>
                    <td>{item.createTime}</td>
                    <td>
                        <NavLink to={ `/order/detail/${item.orderNo}` } activeClassName="active-menu">查看</NavLink>
                    </td>
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
                    <Pagination
                        current={this.state.pageNum} total={this.state.total}
                        onChange={(pageNum) => {this.onPageNumChange(pageNum)}}
                        showQuickJumper = {true}
                    />

                </div>
            </div>
        )
    }
}

export default Order;