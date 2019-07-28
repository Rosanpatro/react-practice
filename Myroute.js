import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';

class Myroute extends Component{

  constructor(){

  }

  render(){
    return(
      <BrowserRouter>
      <Menu />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/users" component={Users}/>
      <Route component={Error} />
      </Switch>
      </BrowserRouter>
    )
  }
}

const Contact = () => {
  return(
    <div>
    <h1>Contact Page</h1>
    </div>
  )
}

const About = () => {
  return(
    <div>
    <h1>About Page</h1>
    </div>
  )
}

const Home = () => {
  return(
    <div>
    <h1>Home Page</h1>
    </div>
  )
}

const Error = () => {
  return(
    <div>
    <h1>Page Not Found</h1>
    </div>
  )
}

export default Myroute;