//using of axios and componentDidMount in class Component
import React,{Component} from 'react';
import axios from 'axios';

class Post1 extends Component{
  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) =>{
      this.setState({
        todos:res.data
      })
    })
    .catch((err)=>{  
      console.log('The error is',err);
    })
  }

  render(){
    return(
      <div>
      <h2>List of Todos</h2>
      <table>
      <th>UserID</th><th>ID</th><th>Title</th>
      <tbody>
      {
        this.state.todos.map((todo,i)=>{
          return(
            <tr key={i}>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            </tr>
          )
        })
      }
      </tbody>
      </table>
      </div>
    )
  }
}
export default Post1;