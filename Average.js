import React,{Component} from 'react';
import Button from './Button';

class Average extends Component{
  constructor(){
    super();
    this.state = {
      p : 0,
      c : 0,
      m : 0,
      avg : 0
    }
  }

  addAverage = () => {
    this.setState({
      avg : (parseInt(this.state.p)+parseInt(this.state.c)+parseInt(this.state.m))/3
    })
  }

  render(){
    return (
      <div>
      Physics:<input onChange={
          (evt) =>this.setState({p: evt.target.value})
        }/><br/>
        Chemistry:<input onChange={
          (evt) =>this.setState({c: evt.target.value})
        }/><br/>
        Math:<input onChange={
          (evt) =>this.setState({m: evt.target.value})
        }/><hr/>
        The Average is: {this.state.avg}<br/>
        <Button calculate={this.addAverage} />
      </div>
    )
  }
}
export default Average;