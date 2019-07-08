import React,{Component} from 'react';

class Fragmnt extends Component {
  render(){   //instead of div tag we can use Fragment
    return(
      <React.Fragment> 
      <h3> List of Fruits </h3>
      </React.Fragment>
    )
  }
}
export default Fragmnt;