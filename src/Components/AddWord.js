import React, { Component } from 'react';
import uuid from 'uuid';

class AddWord extends Component {
  constructor(){
    super();
    this.state = {
      newWord:{}
    }
  }
  

  handleSubmit(e){
    e.preventDefault();
    if(this.refs.text.value === ''){
      alert('Value is required');
    }
    else{
      this.setState({
        newWord:{
          id: uuid.v4(),
          text: this.refs.text.value
        }
      }, function(){
        this.props.addWord(this.state.newWord);
      })
    }
  }

  render() {
    return (
      <div>
          <h3>Add Word</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Text</label> <br/>
            <input type="text" ref="text"/>
            <input type="submit" value="submit" />
            <br/>
          </form>
      </div>
    );
  }
}

export default AddWord;
