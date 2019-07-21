import React from 'react';
import {connect} from 'react-redux';
//connect() is a higher order component
class Players1 extends React.Component{


render(){
  return (
    <div>
The count is {this.props.cRuns}<br/>
Number of players are {this.props.cPlayer}<br/><hr/>
<button onClick={this.props.cONE}>One</button> | 
<button onClick={this.props.cFOUR}>Four</button> |
<button onClick={this.props.cSIX}>Six</button> | 
<button onClick={this.props.OUT}>Out</button>
    </div>
  )
}

}


let mapStateToProps =state=>{
  console.log('The run is ',state.count)
return {
  cRuns : state.runsRed.count,  //using multiple reducer
  cPlayer : state.playerRed.player  //using multiple reducer
}
}


let mapDispatchToProps = (dispatch)=>{
return {
  cONE : ()=>dispatch({type : 'ONE'}),
  cFOUR : ()=>dispatch({type : 'FOUR'}),
  cSIX : ()=>dispatch({type : 'SIX'}),
  OUT : ()=>dispatch({type : "OUT",val : 1})
}
}

//I want to map the store state to the props of current component

export default connect(mapStateToProps,mapDispatchToProps)(Players1);