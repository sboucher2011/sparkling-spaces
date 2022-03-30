import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REACTION } from '../../utils/mutations';

const ReactionForm = ({ reviewId }) => {
  const [reactionBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addReaction, { error }] = useMutation(ADD_REACTION);

  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add reaction to review in database
      await addReaction({
        variables: { reactionBody, reviewId }
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='review-box'>
      <div className='field'>
        <form className="" onSubmit={handleFormSubmit}>
          <div className='label'>
            Comment
          </div>
          <textarea
            placeholder=""
            value={reactionBody}
            className="input"
            onChange={handleChange}
          ></textarea>
          {<p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
            Character Count: {characterCount}/280
            {error && <span className="ml-7">Something went wrong...</span>}
          </p>}
          <button className="button is-primary is-right" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>

  );
};

export default ReactionForm;