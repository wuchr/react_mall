import React from 'react';
import Product from 'page/productmanger/product/product.jsx';
import ProductCategory from 'page/productmanger/category/product-category.jsx';
import ProductAdd from 'page/productmanger/product/productadd.jsx';
import {  BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
class ProductRouteList extends React.Component{
    render() {
        return (
            <Switch>
                <Route  path="/product/index" component={Product}/>
                <Route  path="/product/add" component={ProductAdd}/>
                <Route  path="/product-category" component={ProductCategory}/>
            </Switch>
        );
    }
}

export default ProductRouteList;
