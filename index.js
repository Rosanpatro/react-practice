import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Players1 from './Players1';
let iniState = {
  count : 0,
  player : 11
}

let rootreducer = (state=iniState,action)=>{
if(action.type == "ONE"){
return {
  ...state,
  count : state.count+1
}
}
if(action.type == "FOUR"){
  return {
    ...state,
    count : state.count+4
}
}
if(action.type == "SIX"){
  return {
    ...state,
    count : state.count+6
}
}
if(action.type == "OUT"){
  return {
    ...state,
    player : state.player-action.val
}
}
return state;
}

let store = createStore(rootreducer);


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Provider store = {store}><Players1 /></Provider>, document.getElementById('root'));


//Index using before Hooks
/*
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Employes from './Employes';
import Players from './Players';
import Post1 from './Post1';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Post1 />, document.getElementById('root'));
*/

// what is the meanng of react from scratch
// <div><Indian /><hr /><Pakistan /></div>