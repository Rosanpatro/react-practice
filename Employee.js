import React, { Component} from 'react';

class Employee extends Component{

  constructor(){
    super();
    this.state ={ //JSON object
      first_name : 'Bill',
      last_name : 'Gates',
      email : 'bill@gmail.com',
      contact : '5151659456',
      image : 'image.jpg'
    }
  }
  render(){
    return(
      <div>
      First name: {this.state.first_name}<br/>
      Last name: {this.state.last_name}<br/>
      Email: {this.state.email}<br/>
      Contact: {this.state.contact}<br/>
      Image: {this.state.image}
      </div>
    )
  }
}
export default Employee;