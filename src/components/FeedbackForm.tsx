import { useState } from 'react';

const MAX_CHARACTERS = 150;

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const charCount = MAX_CHARACTERS - text.length;

  return (
    <form className="form">
      <textarea
        className="feedback-textarea"
        onChange={(event) => setText(event.target.value)}
        value={text}
        placeholder="Type here"
        spellCheck={false}
        maxLength={150}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
