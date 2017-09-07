import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WordItem extends Component {
  deleteWord = function(wordId){
    this.props.onDelete(wordId);
  }

  render() {
    return (
      <li className="WordItem">
          {this.props.word.text} <a role="button" tabIndex="0" onClick={this.deleteWord.bind(this, this.props.word.id)}>X</a>
      </li>
    );
  }
}

WordItem.propTypes = {
  word: PropTypes.object,
  onDelete: PropTypes.func
}

export default WordItem;
