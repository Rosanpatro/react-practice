import React,{Component} from 'react';
import CricketsHOC from './Crickets';

class India extends Component {
  render(){
    return(
      <div>
      <h3>India</h3>
      Total runs is {this.props.cruns} <br/>
      <button onClick= {this.props.cfour}>4 Runs</button>
      <button onClick= {this.props.csix}>6 Runs</button>
      </div>
    )
  }
}

export default CricketsHOC(India);