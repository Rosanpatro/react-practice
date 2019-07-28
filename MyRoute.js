import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

class MyRoute extends Component{

  render(){
    return(
      <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home}/>
      </BrowserRouter>
    )
  }
}
export default MyRoute;