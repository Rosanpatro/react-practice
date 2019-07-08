import React,{Component} from 'react';

class Student extends Component{
  constructor(){
    this.state = {
      physics : 65,
      chemistry : 60,
      math : 85,
      hindi : 79,
      english : 81,
      avg : 0
    }
  }
  addAverage = () => {
    this.setState({
      avg : (this.state.physics+this.state.chemistry+this.state.math+this.state.hindi+this.state.english)/5
    })
  }


  render() { 
    return(
      <div>
        Physics:{this.state.physics}<br/>
        Chemistry:{this.state.chemistry}<br/>
        Math:{this.state.math}<br/>
        Hindi:{this.state.hindi}<br/>
        English:{this.state.english}<br/>
        The Avg is : {this.state.avg}<br/>
        <button onClick={this.addAverage}>Average</button>
      </div>
    )
  }
}

export default Student;