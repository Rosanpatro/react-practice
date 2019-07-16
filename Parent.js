//use of Memoization in React
import React,{Component} from 'react';
import Child from './Child';

class Parent extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }

  componentDidMount(){
    setInterval(() =>{
      let item = Math.floor(Math.random(0,1)*9);
      console.log('The random is', item);
      this.setState({
        count:item
      })
    },2000);
  }

  render(){
    return(
      <div>
      <Child val={this.state.count} />
      </div>
    )
  }
}
export default Parent;