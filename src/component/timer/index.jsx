
import React from 'react';
import Util from 'util/util.jsx';
let util = new Util();

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.timer = null;
        this.state = {
           date: ''
        }
        this.updateTime = this.updateTime.bind(this);
    }
   updateTime(){
        this.setState({
            date: util.dateFormate(new Date())
        })
    }
    componentDidMount(){
       this.timer = setInterval(this.updateTime,1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return (
            <span className="timer">
                {this.state.date.toString()}
            </span>
        );
    }
}

export default Timer;