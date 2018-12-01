import React from 'react';
import HeadTitle from 'component/head-title/index.jsx';
import userService from 'service/user-service.jsx';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';
const User = new userService();
class UserList  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
            pageNum:1
        }
    }
    getUserList() {
        User.loadUserList().then((res) => {
            console.log(res.data);
            this.setState(res.data);
        },(err)  => {
            alert(err);
        });
    }
    onPageNumChange(pageNum){
        this.state.pageNum = pageNum;
        this.getUserList();
    }
    componentDidMount() {
        this.getUserList();
    }

    render() {
        return (
            <div id="page-wrapper">
                <HeadTitle title="用户列表" />
                <div className="row">
                    <div className="clo-md-12">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>邮箱</th>
                                    <th>电话</th>
                                    <th>注册时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map((user,index) => {
                                           return (
                                               <tr key={index}>
                                                   <td>{user.ID}</td>
                                                   <td>{user.userName}</td>
                                                   <td>{user.email}</td>
                                                   <td>{user.telphone}</td>
                                                   <td>{user.regDate}</td>
                                               </tr>
                                           )
                                    })
                                }
                            </tbody>
                        </table>
                        <Pagination current={this.state.pageNum} total={this.state.totalCount} onChange={(pageNum) => {this.onPageNumChange(pageNum)}}/>
                    </div>
                </div>
            </div>

        )
    }
}
export default UserList;

