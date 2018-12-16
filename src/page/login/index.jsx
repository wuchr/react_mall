import React from 'react';
import './index.scss';
import userServer from 'service/user-service.jsx';
let userService = new userServer();
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }
    inputChangeHandle(e){
        let inputName = e.target.name;
        let inputValue = e.target.value;
        this.setState({
            [inputName]:inputValue
        });
    }
    onSubmit(){
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        };

        let loginPromise = userService.userLogin(loginInfo);
        loginPromise.then((res) => {
               window.localStorage.setItem("userInfo",JSON.stringify(res.data));
                this.props.history.push('/');
            },
            (errorMsg) => {
                console.log(errorMsg);
                alert(res.msg);
        })
    }
    render(){
        return (
            <div className="row login-div">
                <div className="col-md-4 col-md-offset-4 login-wrapper">
                    <div className="panel panel-default">
                        <div className="panel-heading">React Login</div>
                        <div className="panel-body">
                            <div>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control"
                                           id="username"
                                           name="username"
                                           onChange={(event) => this.inputChangeHandle(event)}
                                           placeholder="请输入用户名" />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className="form-control"
                                           id="password"
                                           name="password"
                                           onChange={(event) => this.inputChangeHandle(event)}
                                           placeholder="请输入密码" />
                                </div>

                                <button className="btn btn-primary btn-lg btn-block"
                                        onClick={e => {this.onSubmit(e)}}
                                >登录</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      )

    }
}
export default Login;

