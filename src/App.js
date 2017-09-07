import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Words from './Components/Words';
import AddWord from './Components/AddWord';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      words: [],
      todos: []
    }
  }

  getWords(){
    this.setState({
      words: [
        {
          id: uuid.v4(),
          text: 'Hello'
        },
        {
          id: uuid.v4(),
          text: 'World'
        }
      ]
    });
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos:data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentWillMount(){
    this.getWords();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddWord = function(newWord){
    let words = this.state.words;
    words.push(newWord);
    this.setState({words:words});
  }

  handleDelete(id){
    let words = this.state.words;
    let index = words.findIndex(x=>x.id === id);
    words.splice(index,1);
    this.setState({words:words});
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
        <AddWord addWord={this.handleAddWord.bind(this)}/>
        <Words words={this.state.words} onDelete={this.handleDelete.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
