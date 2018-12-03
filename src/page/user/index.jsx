import React from 'react';
import HeadTitle from 'component/head-title/index.jsx';
import userService from 'service/user-service.jsx';
import TableList from 'component/table-list/index.jsx';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';
const User = new userService();
class UserList  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
            pageNum:1,
            isfirstLoad:true
        }
    }
    getUserList() {
        User.loadUserList().then((res) => {
            console.log(res.data);
            this.setState(res.data,() =>{
                isfirstLoad: false
            });
        },(err)  => {
            alert(err);
        });
    }
    onPageNumChange(pageNum){
        this.setState({ //异步执行的
            pageNum:pageNum
        },() => {
            this.getUserList();
        });

    }
    componentDidMount() {
        this.getUserList();
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
                <HeadTitle title="用户列表" />
                <div className="row">
                    <div className="clo-md-12">
                        <TableList headList={['ID','用户名','电话','邮箱','注册时间']}>
                            { listBody }
                        </TableList>
                        <Pagination current={this.state.pageNum} total={this.state.totalCount} onChange={(pageNum) => {this.onPageNumChange(pageNum)}}/>
                    </div>
                </div>
            </div>

        )
    }
}
export default UserList;

