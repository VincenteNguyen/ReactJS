import React, { Component } from 'react';

class WordItem extends Component {
  render() {
    return (
      <li className="WordItem">
          {this.props.word.text}
      </li>
    );
  }
}

export default WordItem;
