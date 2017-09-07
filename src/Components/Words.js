import React, { Component } from 'react';
import WordItem from './WordItem';

class Words extends Component {
    deleteWord(id){
        this.props.onDelete(id);
    }

  render() {
    let words;
    if(this.props.words){
        words = this.props.words.map(word=> {
            return (
                <WordItem key={word.text} word={word} onDelete={this.deleteWord.bind(this)} />
            );
        })
    }
    return (
      <div className="Words">
          <h3>Latest Words</h3>
          {words}
      </div>
    );
  }
}

export default Words;
