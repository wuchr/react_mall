import React from 'react';
import HeadTitle from 'component/head-title/index.jsx';
import ProductService from 'service/product-service.jsx';
import TableList from 'component/table-list/index.jsx';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';
import {Link} from 'react-router-dom';
import {Button } from 'element-react';
import 'element-theme-default';
import './product.scss';
let product = new ProductService();
class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
     }
    getProductList(){
        let requestInfo = {
            pageNum: this.state.pageNum
        };
        product.loadProductList(requestInfo).then((res) => {
            console.log(res.data);
            this.setState(res.data);
        },(err)  => {
            alert(err);
        });
    }
    onPageNumChange(pageNum){
        this.setState({ //异步执行的
            pageNum:pageNum
        },() => {
            this.getProductList();
        });

    }
    componentDidMount() {
        this.getProductList();
    }
    render() {
        let listBody =  this.state.list.map((user,index) => {
            return (
                <tr key={index}>
                    <td>{user.ID}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.telphone}</td>
                    <td>{user.regDate}</td>
                </tr>
            )
        });
        return (
            <div id="page-wrapper">
                <HeadTitle title="商品列表" >
                    <div className="page-header-right">
                        <i className="el-icon-plus">

                        </i>
                        <Link to="/product/add" className="add-product-link">添加商品</Link>
                    </div>
                </HeadTitle>

                <div className="row">
                    <div className="clo-md-12">
                        <TableList headList={['ID','用户名','电话','邮箱','注册时间']}>
                            { listBody }
                        </TableList>
                        <Pagination
                            current={this.state.pageNum}
                            total={this.state.totalCount}
                            onChange={(pageNum) => {this.onPageNumChange(pageNum)}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;
