import React from 'react';
import  ReactDOM from 'react-dom';
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
import {  BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
class App extends React.Component{
    render() {
        return (
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Redirect from ="*" to="/"/>
                    </Switch>
                </Router>
            </Layout>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);