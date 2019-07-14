import React,{Component} from 'react';

class Prods extends Component{

constructor(){
  super();
  this.state = {
    products : [
      {
        name : "A",
        cost : 400,
        brand : "X1"
      },
      {
        name : "B",
        cost : 300,
        brand : "X2"
      },
      {
        name : "C",
        cost : 250,
        brand : "X3"
      }
    ]
  }
}

render(){

  return (
    <div >
{
  this.state.products.map((product)=>{
    return (
      <div>
<p>
Product Name : {product.name}
</p>
<p>
Product Cost : {product.cost}
</p>
<p>
Brand : {product.brand}
</p>
<hr/>
      </div>
    )
  })
}

    </div>

  )

}

}

export default Prods;