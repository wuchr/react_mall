import React from 'react';
import HeadTitle from 'component/head-title/index.jsx';
import {Input,Button,Layout,Message} from 'element-react';
import CategorySelect from 'page/productmanger/product/catrgory-select.jsx';
import 'element-theme-default';
import ProductService from "service/product-service.jsx";
let _product = new ProductService();
class ProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            productName: "",
            productDescr: "",
            productPrice: "",
            productCount:"",
            secondSelectedValue: '0',
            firstSelectedValue: '0'

        }
    }
    onCategoryChange(secondValue, firstValue){
        this.setState({
            secondSelectedValue: secondValue,
            firstSelectedValue: firstValue
        });

    }
    onInputChange(value,name){
       let productkey = name;
       this.setState({
           [productkey]: value
       })
    }
    saveProduct(){
        let saveData = {
            productName: this.state.productName,
            productDescr: this.state.productDescr,
            productPrice: this.state.productPrice,
            productCount: this.state.productCount,
            categoryFirst: this.state.firstSelectedValue,
            categorySecond: this.state.secondSelectedValue
        }
        _product.saveProduct(saveData).then((res) =>{
            Message({
                showClose: true,
                message: '商品信息保存成功',
                type: 'success'
            });
        },(err) => {
            Message({
                showClose: true,
                message: '保存失败!!!',
                type: 'error'
            });
        })

    }
    render() {
        return(
            <div id="page-wrapper">
                <HeadTitle title="添加商品"/>
                <div className="add-container">
                    <Layout.Row>
                        <Layout.Col span="12">
                            <Layout.Col span="4">
                                <label htmlFor="" >商品名称</label>
                            </Layout.Col>
                            <Layout.Col span="18">
                                <Input  placeholder="请输入商品名称"
                                        onChange={(value,name) => this.onInputChange(value,'productName')}
                                />
                            </Layout.Col>
                        </Layout.Col>
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col span="12">
                            <Layout.Col span="4">
                                <label htmlFor="" >商品描述</label>
                            </Layout.Col>
                            <Layout.Col span="18">
                                <Input  placeholder="请输入商品描述"
                                    onChange={(value,name) => this.onInputChange(value,'productDescr')}
                                />
                            </Layout.Col>
                        </Layout.Col>
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col span="12">
                            <Layout.Col span="4">
                                <label htmlFor="" >所属分类</label>
                            </Layout.Col>
                            <Layout.Col span="18">
                                <CategorySelect
                                    onCategoryChange = {(secondValue, firstValue) => this.onCategoryChange(secondValue,firstValue)}>
                                </CategorySelect>
                            </Layout.Col>
                        </Layout.Col>
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col span="12">
                            <Layout.Col span="4">
                                <label htmlFor="" >商品价格</label>
                            </Layout.Col>
                            <Layout.Col span="9">
                                <Input placeholder="价格" append="元" type="number"
                                       onChange={(value,name) => this.onInputChange(value,'productPrice')}
                                />

                            </Layout.Col>
                        </Layout.Col>
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col span="12">
                            <Layout.Col span="4">
                                <label htmlFor="" >商品库存</label>
                            </Layout.Col>
                            <Layout.Col span="9">
                                <Input placeholder="库存" append="件" type="number"
                                       onChange={(value,name) => this.onInputChange(value,'productCount')}

                                />
                            </Layout.Col>
                        </Layout.Col>
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col span="4">
                            <Button type="primary" onClick={(e) => {this.saveProduct(e)}}>保存</Button>
                        </Layout.Col>
                    </Layout.Row>

                </div>

              
            </div>
        )
    }
}
export default ProductAdd;