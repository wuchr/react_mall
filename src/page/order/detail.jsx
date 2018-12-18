import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import HeadTitle from 'component/head-title/index.jsx';
import TableList from 'component/table-list/index.jsx';
import OrderService from 'service/order-service.jsx';
import './detail.scss'
let orderS = new OrderService();
class OrderDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }
    getDetailByOrderNo(){
        let requestInfo = {
            orderNo: this.props.match.params.orderNum
        };
        orderS.getDetailByOrderNo(requestInfo).then((res) => {
            this.setState({
                data: res.data
            })
        }, (err) =>{
                alert(err.msg);
        });
    }
    sendGood(){
        let requestInfo = {
            orderNo: this.props.match.params.orderNum
        };
        orderS.sendGoods(requestInfo).then((res) =>{
            if(res.status == "0"){
                alert(res.data);
                getDetailByOrderNo();
            }
        },(err) =>{
            console.log(err.msg)
        })
    }
    componentDidMount(){
        this.getDetailByOrderNo();
    }
    render(){
        let headInfo = [
            {"name":"商品图片","width":"15%"},
            {"name":"商品信息","width":"10"},
            {"name":"单价","width":"45%"},
            {"name":"数量","width":"15%"},
            {"name":"合计","width":"15%"}
            ];
        console.log(this.state.data);
        let orderDetailList = this.state.data.orderItemVoList || [];

        let bodyList = orderDetailList.map((item, index) => {
            return(
                <tr key={index}>
                    <td>
                        <img src={`${this.state.data.imageHost}${item.productImage}`} alt=""/>
                    </td>
                    <td>{item.productId}</td>
                    <td>{item.currentUnitPrice}</td>
                    <td>{item.quantity}</td>
                    <td>{item.totalPrice}</td>
                </tr>
            )
        });
        return(
            <div id="page-wrapper">
                <HeadTitle title="订单详情" />
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">订单号</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{this.state.data.orderNo}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">创建时间</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{this.state.data.createTime}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">收件人</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{this.state.data.receiverName}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">订单状态</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">
                                {this.state.data.statusDesc}
                                {
                                    this.state.data.status == "20"
                                        ? <button onClick={(e) => this.sendGood(e)}>立即发货</button>
                                        : ""
                                }
                            </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">支付方式</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{this.state.data.paymentTypeDesc}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">订单金额</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">￥{this.state.data.payment}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <TableList headList = {headInfo}>
                            {bodyList}
                        </TableList>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDetail;