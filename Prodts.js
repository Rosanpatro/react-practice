import React,{Component} from 'react';
import Prodt from './Prodt';

class Prodts extends Component{
  constructor(){
    super();
    this.state = {
      products:[
        {
          name:'Apple',
          cost:200,
          pic: 'https://images-na.ssl-images-amazon.com/images/I/41GdEqg69UL._SX425_.jpg'
        },
        {
          name:'Chery',
          cost:500,
          pic: 'https://rukminim1.flixcart.com/image/832/832/plant-seed/e/u/3/national-gardens-10-sweet-cherry-fruit-original-imaej3ekfx7ndca7.jpeg?q=70'
        },
        {
          name:'Cashew',
          cost:1200,
          pic: 'https://www.puremart.in/images/products/8-cashew-nut-kernel-1535465655.jpeg'
        }
      ]
    }
  }

  render(){ //instead of div tag we can use Fragment
    return(
      <React.Fragment> 
<h3>List of Fruits</h3>
{
  this.state.products.map((prod) =>{
    return(
      <Prodt pname={prod.name} pcost={prod.cost} ppic={prod.pic}  />
    )
  })
}
      </React.Fragment>
    )
  }
}
export default Prodts;