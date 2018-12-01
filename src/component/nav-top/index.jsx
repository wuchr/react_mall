
import React from 'react';
import userServer from 'service/user-service.jsx';
let userService = new userServer();
class NavTop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: JSON.parse(window.localStorage.getItem("userInfo")).username || ''
        }

    }
    onLogout(e){
        //清除userInfo 信息
        userService.logout().then((res) => {
           localStorage.removeItem("userInfo");
            window.location.href = "/login"
        }, (errorMsg) => {
           console.log(errorMsg)
         })

    }
    render(){
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <a className="navbar-brand" >开心</a>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.username
                                    ? <span>欢迎，{this.state.username}</span>
                                    : <span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={(e) => this.onLogout(e)}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTop;