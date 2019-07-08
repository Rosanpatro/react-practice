import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Cities from './Cities';
import Movie from './Movie';
import Pakistan from './Pakistan';
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

render(<Movie />, document.getElementById('root'));
// what is the meanng of react from scratch
// <div><Indian /><hr /><Pakistan /></div>