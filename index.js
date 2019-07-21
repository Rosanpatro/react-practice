import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Players1 from './Players1';
import cricketReducer from './store/cricket.reducer';
import playersReducer from './store/players.reducer';
import runsReducer from './store/runs.reducer';

//let store = createStore(cricketReducer);
let rootReducer = combineReducers({
  playerRed : playersReducer,
  runsRed : runsReducer
});


let store = createStore(rootReducer);

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