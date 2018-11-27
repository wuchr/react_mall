/*
* @Author: Rosen
* @Date:   2018-01-23 20:00:02
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:43:14
*/
import React from 'react';

class NavSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <a className="active-menu">
                                <i className="fa fa-dashboard"></i>
                                <span>首页</span>
                            </a>
                        </li>
                        <li className="active">
                            <a>
                                <i className="fa fa-list"></i>
                                <span>商品</span>
                                <span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <a className="">商品管理</a>
                                </li>
                                <li>
                                    <a className="">品类管理</a>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>

            </div>
        );
    }
}

export default NavSide;