import React,{Component} from 'react';

class Button extends Component{

  render(){
    return (
      <div >
      <button onClick={this.props.calculate}>Find Average</button> 
      </div>
    )
  }
}

export default Button;