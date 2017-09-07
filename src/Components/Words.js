import React, { Component } from 'react';
import WordItem from './WordItem';

class Words extends Component {
  render() {
    let words;
    if(this.props.words){
        words = this.props.words.map(word=> {
            return (
                <WordItem key={word.text} word={word} />
            );
        })
    }
    return (
      <div className="Words">
          {words}
      </div>
    );
  }
}

export default Words;
