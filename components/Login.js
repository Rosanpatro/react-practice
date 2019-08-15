import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      stt : false,
      email: "",
      password: ""
    }
  }

  checkLogin = () => {
    if(this.state.email== "rosan@gmail.com" && this.state.password == "123"){
      this.setState({
        stt : true
      })
    }
    else{
      this.setState({
        stt : false
      })
    }
  }

  render(){
    return(
      <div>
      {
        (this.state.stt)?<Redirect to="/home"/>:<Redirect to="/" />
      }
      <p>WELCOME</p>
      <p>
      Email: <input onChange={(evt)=> this.setState({email:evt.target.value})} />
      </p>
      <p>
      Password: <input type="password" onChange={(evt)=> this.setState({password:evt.target.value})} />
      </p>
      <p>
      <button onClick={this.checkLogin}>Login</button>
      </p>
      </div>
    )
  }
}
export default Login;