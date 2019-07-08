import React,{Component} from 'react';
import Product from './Product';

class Products extends Component{

  render(){
    return (
      <div>
      <Product name="note 7 pro" cost="14000" color="black" brand= "Xiomi" picture= {<img src="https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/19/source-img/20190319143429_19752.jpg" width= '200' height= '200'/>}/><br/>
      <Product name="galaxy M40" cost="20000" color="blue" brand= "Samsung" picture= {<img src="https://images.fonearena.com/blog/wp-content/uploads/2019/05/Samsung-Galaxy-M40.jpg" width= '200' height= '200'/>}/>
      </div>
    )
  }
}

export default Products;