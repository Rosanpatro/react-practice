//use of Higher Order Component
import React,{Component} from 'react';
import CricktHOC from './Crickt';

class Pakistan extends Component {
  render(){
    return(
      <div>
      <h3>Pakistan</h3>
      Total run is {this.props.cruns} and wicket remains {this.props.couts} <br/>
      <button onClick= {this.props.cfour}>4 Runs</button>
      <button onClick= {this.props.csix}>6 Runs</button>
      <button onClick= {this.props.cone}>1 Runs</button>
      <button onClick= {this.props.cwkt}>Wicket</button>
      </div>
    )
  }
}

export default CricktHOC(Pakistan);