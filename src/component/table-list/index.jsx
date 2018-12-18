import React from 'react';
import userService from 'service/user-service.jsx';
import 'rc-pagination/dist/rc-pagination.min.css';
class TableList  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isfirstLoad:true
        }
    }
    componentWillReceiveProps(){
        this.setState({
            isfirstLoad:true
        })
    }

    render() {
        //表头信息
        let headList = this.props.headList.map((headItem,index) =>{
                if(typeof headItem === "string"){
                   return <th key={index}>{headItem}</th>;
                }else if(typeof headItem === "object"){
                    return <th key={index} width={headItem.width}>{headItem.name}</th>;
                }
        })

            //表格数据
        let bodyInfo = this.props.children;

        //提示
        let errorBody = (
            <tr>
                <td colSpan={headList.length} className="text-center">
                    {this.state.isfirstLoad ? "正在加载数据..." : "无数据"}
                </td>
            </tr>
        );

        let bodyList = bodyInfo.length > 0 ? bodyInfo : errorBody;
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {headList}
                    </tr>
                </thead>
                <tbody>
                    {bodyList}
                </tbody>
            </table>

        )
    }
}
export default TableList;

