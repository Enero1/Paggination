import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
    
      <br />

      <span>
        <a href=""> &#8592; </a>
        <a href=""  class="active"> 1 </a>
        <a href=""> 2</a>
        <a href=""> 3 </a>
        <a href="">
          {' '}
          4{' '}
        </a>
        <a href=""> 5 </a>
        <a href="" class="active"> 6 </a>
        <a href=""> &#8594; </a>
      </span>
    </div>
    );
  }
}

render(<App />, document.getElementById('root'));
