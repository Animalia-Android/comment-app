import { useState } from 'react';
import { MAX_CHARACTERS } from '../library/constants';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };

  return (
    <form className="form">
      <textarea
        className="feedback-textarea"
        onChange={handleChange}
        value={text}
        placeholder="Type here"
        spellCheck={false}
        // maxLength={MAX_CHARACTERS}
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
