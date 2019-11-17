//use of Higher Order Component
import React,{Component} from 'react';

const CricktHOC = (WrappedComponent) => {
  class HOC extends Component {
    constructor() {
      super();
      this.state = {
        runs:0,
        players:10
      }
    }
    sixRuns = () => {
      this.setState((pre) => {
        return{
          runs : pre.runs+6,
          players : pre.players
        }
      })
    }
    // sixRuns = () => {
    //   this.setState(() => {
    //     return{
    //       ...this.state,
    //       runs : this.state.runs+6
    //     }
    //   })
    // }
    fourRuns = () => {
      this.setState((pre) => {
        return{
          runs: pre.runs+4,
          players : pre.players
        }
      })
    }
    oneRuns = () => {
      this.setState((pre) => {
        return{
          runs: pre.runs+1,
          players : pre.players
        }
      })
    }
    outPlayers = () => {
      this.setState((pre) => {
        return{
          players : pre.players-1,
          runs : pre.runs
        }
      })
    }

    render(){
      return(
        <WrappedComponent cruns = {this.state.runs} couts = {this.state.players} cfour ={this.fourRuns} csix = {this.sixRuns} cone = {this.oneRuns} cwkt = {this.outPlayers} />
      )
    }
  }
  return HOC;
}
export default CricktHOC;