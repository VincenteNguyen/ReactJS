import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Words from './Components/Words';

class App extends Component {
  constructor(){
    super();
    this.state = {
      words: []
    }
  }

  componentWillMount(){
    this.setState({
      words: [
        {
          text: 'Hello'
        },
        {
          text: 'World'
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Words words={this.state.words}/>
      </div>
    );
  }
}

export default App;
