import React, { useState } from 'react';
import './WordCounter.css';

const WordCounter = () => {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const countWords = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter">
      <h1>Responsive Paragraph WordCounter</h1>
      <textarea
        placeholder="Type or paste your text here..."
        value={text}
        onChange={countWords}
      />
      <p className="word-count">Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
