import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Users extends Component{
  constructor(props){
    super(props);
    this.state={
      userlist:[]
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      console.log('The final res is',res.data);
      this.setState({
        userlist: res.data
      })
    })
    .catch((err)=>{
      console.log("The error is =",err);
    })
  }

  render(){
    return(
      <div>
      <h2>List of Users</h2>
      <ul>
      {
        this.state.userlist.map((user,i) => {
          return(
            <li key={i}>
            <Link to={"/userinfo/"+user.id}>{user.name}</Link>
            </li>
          )
        })
      }
      </ul>
      </div>
    )
  }
}
export default Users;