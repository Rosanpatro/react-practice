import React,{Component} from 'react';

class Cities extends Component{

  constructor(){
    this.state = {
      city_name : "",
      city_pop : "",
      city_pic : "",
      citylist : []
    }
  }

  addCity = ()=>{
    let newArr = this.state.citylist;
    newArr.push({
      name : this.state.city_name,
      population : this.state.city_pop,
      pic : this.state.city_pic
    })
    this.setState({
      citylist : newArr,
      city_name : "",
      city_pop : "",
      city_pic : ""
    })
  }

  delCity=(i)=>{
    alert("del")
    let cities = this.state.citylist;cities.splice(i,1);
    console.log(i,cities)
    this.setState({
      citylist : cities
    })
  }

  render(){
    return (
      <div>
      <p>
      City Name : <input onChange={(evt)=>this.setState({city_name : evt.target.value})} value={this.state.city_name} />
      </p>
      <p>
      City Population : <input onChange={(evt)=>this.setState({city_pop : evt.target.value})} value={this.state.city_pop} />
      </p>
      <p>
      City Image : <input onChange={(evt)=>this.setState({city_pic : evt.target.value})} value={this.state.city_pic} />
      </p>
      <p>
      <button onClick={this.addCity}>Add City</button>
      </p>
      <hr/>
      <table>
      <th>City Name</th><th>City Population</th>
      <th>Image</th><th>Action</th>
      {
        this.state.citylist.map((city,i)=>{
          return (
            <tr>
            <td>{city.name}</td>
            <td>{city.population}</td>
            <td>
            <img src={city.pic} width="200" height="100"/>
            </td>
            <td>
            <button onClick={()=>this.delCity(i)}>Delete</button>
            </td>
            </tr>
          )
        })
      }
      </table>
      </div>
    )
  }
}
export default Cities;