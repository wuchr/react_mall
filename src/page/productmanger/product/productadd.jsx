import React from 'react';
import HeadTitle from 'component/head-title/index.jsx';
import {Input,Button,Layout,Message,Upload,Dialog} from 'element-react';
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
            firstSelectedValue: '0',
            dialogImageUrl: '',
            dialogVisible: false,
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
    handleRemove(file, fileList) {
        console.log(file, fileList);
    }

    handlePreview(file) {
        console.log(file);
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
                type: 'error',
                duration: 0
            });
        })

    }

    render() {
        const fileList2 = [
            {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
        ]
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
                        <Layout.Col span="12">
                           <Layout.Col span="4">
                                <label htmlFor="" >商品图片</label>
                            </Layout.Col>
                            <Layout.Col span="20">
                                <Upload
                                    className="upload-demo"
                                    action="/nodeServer/multerUpload/upload"
                                    onPreview={file => this.handlePreview(file)}
                                    onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                                    fileList={fileList2}
                                    listType="picture"
                                    tip={<div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
                                >
                                    <Button size="small" type="primary">点击上传</Button>
                                </Upload>
                            </Layout.Col>
                        </Layout.Col>
                    </Layout.Row>
                    <Layout.Row>
                        <Layout.Col span="4"> <Button className="save-btn" type="primary" onClick={(e) => {this.saveProduct(e)}}>保存</Button></Layout.Col>
                    </Layout.Row>

                </div>

              
            </div>
        )
    }
}
export default ProductAdd;