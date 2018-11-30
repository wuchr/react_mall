import React from 'react';

import HeadTitle from 'component/head-title/index.jsx';
class Home  extends React.Component {
    render() {
        return (
            <div id="page-wrapper">
                <HeadTitle>

                </HeadTitle>
                <div className="row">
                    <div className="col-md-4">
                        用户数量
                    </div>
                    <div className="col-md-4">
                        商品统计
                    </div>
                    <div className="col-md-4">
                        订单统计
                    </div>

                </div>
            </div>

        )
    }
}
export default Home;

