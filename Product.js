import React,{Component} from 'react';
import './Child.css'

class Product extends Component{

render(){
  return (
    <div className="prod">
    <h2>Mobile</h2>
Product name : {this.props.name} <br/>
Product cost : {this.props.cost} <br/>
Product color : {this.props.color} <br/>
Product brand : {this.props.brand}<br/>
Product picture : {this.props.picture} 
    </div>
  )
}

}

export default Product;