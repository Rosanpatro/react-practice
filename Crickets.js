//using of Higher Order Component
import React,{Component} from 'react';

const CricketsHOC = (WrappedComponent) => {
  class HOC extends Component {
    constructor() {
      super();
      this.state = {
        runs:0
      }
    }
    sixRuns = () => {
      this.setState((pre) => {
        return{
          runs : pre.runs+6
        }
      })
    }
    fourRuns = () => {
      this.setState((pre) => {
        return{
          runs: pre.runs+4
        }
      })
    }

    render(){
      return(
        <WrappedComponent cruns = {this.state.runs} cfour ={this.fourRuns} csix = {this.sixRuns} />
      )
    }
  }
  return HOC;
}
export default CricketsHOC;