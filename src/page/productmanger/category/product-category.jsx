import React from 'react';
import {Link} from 'react-router-dom';
import HeadTitle from 'component/head-title/index.jsx';
import Category from 'service/category-service.jsx';
import { Table,Button,Dialog } from 'element-react';
import 'element-theme-default';
let _category = new Category();
class ProductCategory extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            dialogVisible: true,
            columns: [
                {
                    label: "品类Id",
                    prop: "id",
                    width: 180
                },
                {
                    label: "名称",
                    prop: "name",
                    width: 180
                },
                {
                    label: "操作",
                    prop: "address",
                    render:function(row,column,index){
                        return (
                            <span>
                             <Button plain={true} type="info" size="small">编辑</Button>
                             <Button type="danger" size="small">删除</Button>
                            </span>


                        )
                    }

                }
            ],
            data:[{"id":"123","name":"上衣"},{"id":"1234","name":"裤子"},{"id":"123","name":"鞋子"}]
        }
    }
    getCategoryList(){
        let requestParam = {
            "categoryId" : 0
        };
        _category.loadCategoryList(requestParam).then((res) => {
            this.setState({
                data: res.data
            })
        },(err) => {
            alert(err.msg);
        })
    }

    componentDidMount(){
       this.getCategoryList();
    }
    render() {
        return (
            <div id="page-wrapper">
                <HeadTitle title="品类管理">

                </HeadTitle>
                <div className="row">
                    <div className="col-md-12">
                        <Table
                            style={{width: '100%'}}
                            columns={this.state.columns}
                            data={this.state.data}
                            border={true}
                            maxHeight={250}
                        />
                    </div>
                </div>

                <div>
                    <Button type="text" onClick={ () => this.setState({ dialogVisible: true }) }>点击打开 Dialog</Button>
                    <Dialog
                        title="提示"
                        size="tiny"
                        visible={ this.state.dialogVisible }
                        onCancel={ () => this.setState({ dialogVisible: false }) }
                        lockScroll={ false }
                    >
                        <Dialog.Body>
                            <span>这是一段信息</span>
                        </Dialog.Body>
                        <Dialog.Footer className="dialog-footer">
                            <Button onClick={ () => this.setState({ dialogVisible: false }) }>取消</Button>
                            <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确定</Button>
                        </Dialog.Footer>
                    </Dialog>
                </div>
            </div>

        );
    }
}

export default ProductCategory;
