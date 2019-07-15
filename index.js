import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Employes from './Employes';
import Players from './Players';
import Mystate from './Mystate';
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

render(<Employes />, document.getElementById('root'));
// what is the meanng of react from scratch
// <div><Indian /><hr /><Pakistan /></div>