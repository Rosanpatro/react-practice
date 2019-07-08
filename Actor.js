import React,{Component} from 'react';

class Actor extends Component{

  constructor(){
    this.state = {
      actor_name: 'Shahrokh Khan',
      actor_age: 53,
      actor_height: '1.8 meter',
      actor_weight: 70,
      actor_film: [
        {name : 'Kal ho na ho', release: 2004, pic: 'khnh.jpg'},
        {name : 'Devdas', release: 2000, pic: 'Dev.jpg'},
        {name : 'My name is khan', release: 2010, pic: 'khan.jpg'}
      ]
    }    
  }

  render(){
    return(
      <div>
      Actor Name: {this.state.actor_name}<br/>
      Actor Age: {this.state.actor_age}<br/>
      Actor Height: {this.state.actor_height}<br/>
      Actor Weight: {this.state.actor_weight}
      <hr/>
      <table>
      <th>Name</th><th>Release</th><th>Picture</th>
      {
        this.state.actor_film.map((film) => {
          return(
            <tr>
            <td>{film.name}</td>
            <td>{film.release}</td>
            <td>{film.pic}</td>
            </tr>
          )
        })
      }
      </table>
      </div>
    )
  }
}
export default Actor;