
import React from 'react';

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
          <div className="row">
              <div className="col-md-12">
                  <h1>
                      首页
                  </h1>
              </div>
              {this.props.children}
          </div>
        );
    }
}

export default HeadTitle;