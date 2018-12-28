import React from 'react';
import {Select} from 'element-react';
import 'element-theme-default';
class CategorySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            firstOptions: [{
                value: '0',
                label: '鞋类'
            }, {
                value: '1',
                label: '上衣'
            }, {
                value: '2',
                label: '裤装'
            }],
            secondOptions: [{
                value: '0',
                label: '雪地靴'
            }, {
                value: '1',
                label: '马丁靴'
            }, {
                value: '2',
                label: '休闲鞋'
            },{
                value: '3',
                label: '运动鞋'
            }],
            firstValue: '0',
            secondValue: '0'
        }
    }
    onLoadSecondCategory(){
        let secondItem = [];
        if(this.state.firstValue === "0"){
           secondItem = [{
               value: '0',
               label: '雪地靴'
           }, {
               value: '1',
               label: '马丁靴'
           }, {
               value: '2',
               label: '休闲鞋'
           },{
               value: '3',
               label: '运动鞋'
           }];
        }else if(this.state.firstValue === "1"){
            secondItem = [{
                value: '0',
                label: '羽绒服'
            }, {
                value: '1',
                label: '毛衣'
            }, {
                value: '2',
                label: '卫衣'
            }];
        }else if(this.state.firstValue === "2"){
            secondItem = [{
                value: '0',
                label: '牛仔裤'
            }, {
                value: '1',
                label: '休闲裤'
            }, {
                value: '2',
                label: '阔腿裤'
            }];
        }
        this.setState({
            secondOptions: secondItem
        })
    }

    firstSelectChange(value){
        this.setState({
            firstValue: value,
            secondValue: "0"
        }, () =>{
            this.onLoadSecondCategory();
            this.onPropsCategoryChange();
        })
    }
    secondSelectChange(value){
        this.setState({
            secondValue: value
        }, () =>{
            this.onPropsCategoryChange();
        })
    }

    onPropsCategoryChange(){
        this.props.onCategoryChange(this.state.secondValue, this.state.firstValue)
    }
    render() {
        return(
            <div className="">
                <Select value={this.state.firstValue} placeholder="请选择一级分类" className="first-select"
                        onChange={(value) => this.firstSelectChange(value)}>
                    {
                        this.state.firstOptions.map(el => {
                            return <Select.Option key={el.value} label={el.label} value={el.value} />
                        })
                    }
                </Select>
                <Select
                    value={this.state.secondValue}
                    placeholder="请选择二级分类"
                    onChange={(value) => this.secondSelectChange(value)}
                >
                    {
                        this.state.secondOptions.map(el => {
                            return <Select.Option key={el.value} label={el.label} value={el.value} />
                        })
                    }
                </Select>
            </div>


        )
    }
}
export default CategorySelect;