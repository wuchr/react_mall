import React from 'react';
import  ReactDOM from 'react-dom';
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';
import UserList from 'page/user/index.jsx';
import ProductRouteList from 'page/productmanger/router.jsx'
import Order from 'page/order/index.jsx'
import OrderDetail from 'page/order/detail.jsx';
import {  BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
class App extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route  path="/" render={ (props)=> (
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route  path="/order/index" component={Order}/>
                                <Redirect exact from="/order" to="/order/index" />
                                <Route  path="/order/detail/:orderNum" component={OrderDetail}/>
                                <Route  path="/product" component={ProductRouteList}/>
                                <Route  path="/product-category" component={ProductRouteList}/>
                                <Route  path="/user/index" component={UserList}/>
                                <Redirect exact from="/product" to="/product/index"/>
                                <Redirect exact from="/user" to="/user/index" />
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