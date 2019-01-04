import React from 'react';
import HeadTitle from 'component/head-title/index.jsx';
import ProductService from 'service/product-service.jsx';
import TableList from 'component/table-list/index.jsx';
import 'rc-pagination/dist/rc-pagination.min.css';
import {Link} from 'react-router-dom';
import {Pagination} from 'element-react';
import 'element-theme-default';
import './product.scss';
let product = new ProductService();
class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            pageNum: 1,
            pageSize: 10,
            total: 0
        }
     }
    getProductList(){
        let requestInfo = {
            pageNum: this.state.pageNum,
            pageSize: this.state.pageSize
        };
        product.loadProductList(requestInfo).then((res) => {
            this.setState({
                list: res.data,
                total: res.total
            });
        },(err)  => {
            alert(err);
        });
    }

    onCurrentChange(currentPage){
       this.setState({
           pageNum: currentPage
       }, () => {
           this.getProductList();
       })
    }
    onSizeChange(size){
        this.setState({
            pageSize: size
        }, () => {
            this.getProductList();
        })
    }
    componentDidMount() {
        this.getProductList();
    }
    render() {
        let listBody =  this.state.list.map((user,index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.productName}</td>
                    <td>{user.productDescr}</td>
                    <td>{user.categoryFirst}</td>
                    <td>{user.categorySecond}</td>
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
                        <TableList headList={['ID','商品名称','商品描述','一级分类','二级分类']}>
                            { listBody }
                        </TableList>
                        <Pagination
                            layout="total, sizes, prev, pager, next, jumper"
                            total={this.state.total}
                            pageSizes={[10, 20, 50]}
                            pageSize={this.state.pageSize}
                            currentPage={this.state.pageNum}
                            onSizeChange = {size => this.onSizeChange(size)}
                            onCurrentChange =  {currentPage => this.onCurrentChange(currentPage)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;
