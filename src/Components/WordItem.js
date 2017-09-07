import React, { Component } from 'react';

class WordItem extends Component {
  deleteWord = function(wordId){
    this.props.onDelete(wordId);
  }

  render() {
    return (
      <li className="WordItem">
          {this.props.word.text} <a href="#" onClick={this.deleteWord.bind(this, this.props.word.id)}>X</a>
      </li>
    );
  }
}

export default WordItem;
