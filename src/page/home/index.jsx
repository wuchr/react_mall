import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import HeadTitle from 'component/head-title/index.jsx';''
import HomeService from 'service/home-service.jsx';
import Util from 'util/util.jsx';
let hs = new HomeService();
let util = new Util();
class Home  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countUser:"-",
            countProduct: "-",
            countOrder: "-"
        }
    }
    componentDidMount() {
        hs.getStatistics().then((res) => {
                this.setState(res.data);
            },
            (err) => {
                util.errInfoTip(err);
            }
        )
    }
    render() {
        return (
            <div id="page-wrapper">
                <HeadTitle title="首页" />
                <div className="row">
                    <div className="col-md-4">
                        <Link className="page-item red" to="/user">
                            <p className="count">{this.state.countUser}</p>
                            <p className="desc">
                                <span className="glyphicon glyphicon-user"></span>
                                用户数量
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link className="page-item green" to="/product">
                            <p className="count">{this.state.countProduct}</p>
                            <p className="desc">
                                <span className="glyphicon glyphicon-list"></span>
                                商品数量
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link className="page-item blue" to="/order">
                            <p className="count">{this.state.countOrder}</p>
                            <p className="desc">
                                <span className="glyphicon glyphicon-yen"></span>
                                订单数量
                            </p>
                        </Link>
                    </div>

                </div>
            </div>

        )
    }
}
export default Home;

