import React from 'react';
import {Link} from 'react-router-dom';
import HeadTitle from 'component/head-title/index.jsx';''
class Error  extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="page-wrapper">
                <HeadTitle title=" 出错啦" />
                <div>
                    <span>找不路径</span>
                    <Link to="/">点我返回首页</Link>
                </div>
            </div>

        )
    }
}
export default Error;

