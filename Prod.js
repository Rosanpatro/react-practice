import React, { Component} from 'react';

class Prod extends Component{

  constructor(){
    this.state ={
      product_name : 'Apple',
      product_cost : '235'
    }
  }
  render(){
    return(
      <div>
      Product name: {this.state.product_name}<br/>
      Product cost: {this.state.product_cost}
      </div>
    )
  }
}
export default Prod;