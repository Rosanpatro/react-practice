import React,{Component} from 'react';

class College extends Component{
  constructor(){
    this.state = {
      physics : 0,
      chemistry : 0,
      math : 0,
      hindi : 0,
      english : 0,
      avg : 0,
      percent : 0
    }
  }
  addAverage = () => {
    this.setState({
      avg : (parseInt(this.state.physics)+parseInt(this.state.chemistry)+parseInt(this.state.math)+parseInt(this.state.hindi)+parseInt(this.state.english))/5
    })
  }

  addPercent = () => {
    this.setState({
      percent : ((parseInt(this.state.physics)+parseInt(this.state.chemistry)+parseInt(this.state.math)+parseInt(this.state.hindi)+parseInt(this.state.english))/500)*100
    })
  }

  render() { 
    return(
      <div>
        Physics:<input value={this.state.physics} onChange={
          (evt) =>this.setState({physics:evt.target.value})
        }/><br/>
        Chemistry:<input value={this.state.chemistry} onChange={
          (evt) =>this.setState({chemistry:evt.target.value})
        }/><br/>
        Math:<input value={this.state.math} onChange={
          (evt) =>this.setState({math:evt.target.value})
        }/><br/>
        Hindi:<input value={this.state.hindi} onChange={
          (evt) =>this.setState({hindi:evt.target.value})
        }/><br/>
        English:<input value={this.state.english} onChange={
          (evt) =>this.setState({english:evt.target.value})
        }/><br/>
        The Avg is : {this.state.avg}<br/>
        <button onClick={this.addAverage}>Average</button><br/><br/>
        The Percent is : {this.state.percent}% <br/>
        <button onClick={this.addPercent}>Percentage</button>
      </div>
    )
  }
}

export default College;