
import React from 'react';

class HeadTitle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
          <div className="row" style={{marginBottom: '20px'}}>
              <div className="col-md-12">
                  <h1>
                      {this.props.title}
                  </h1>
              </div>
              {this.props.children}
          </div>
        );
    }
}

export default HeadTitle;