import React from 'react';
import  ReactDOM from 'react-dom';
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';
import UserList from 'page/user/index.jsx';
import {  BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
class App extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route  path="/" render={ props => (
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route  path="/product" component={Home}/>
                                <Route  path="/product-category" component={Home}/>
                                <Route  path="/user/index" component={UserList}/>
                                <Redirect exact from="/user" to="/user/index" ></Redirect>
                                <Route  component={ErrorPage}/>
                            </Switch>
                        </Layout>
                    )}/>
                </Switch>

            </Router>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);