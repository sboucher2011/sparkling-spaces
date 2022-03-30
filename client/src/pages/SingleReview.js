import React from 'react';
import { useParams } from 'react-router-dom';
import "./SingleReview.css"

//image
import ReactionImage from "../assets/reaction/reaction.jpg"

import ReactionList from '../components/ReactionList';

import { useQuery } from '@apollo/client';
import { QUERY_REVIEW } from '../utils/queries';
import Auth from '../utils/auth';
import ReactionForm from '../components/ReactionForm';
import { Container } from '@material-ui/core';

const SingleReview = (props) => {
  const { id: reviewId } = useParams();

  const { loading, data } = useQuery(QUERY_REVIEW, {
    variables: { id: reviewId },
  });

  const review = data?.review || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="full-size-container">
      <div className='columns margin-top-s'>
      <div className='column has-text-centered'>
        <img src={ReactionImage} alt="reactions"></img>
      </div>
      <div className='column'>
        {/* init post */}
        <div className="message is-warning init-post">
          <p className="message-header">
            <span style={{ fontWeight: 700 }} className="text-light">
              {review.username}
            </span>{' '}
            review on {review.createdAt}
          </p>
          <div className="card-body">
            <p>{review.reviewText}</p>
          </div>
        </div>
        {/* init post end*/}
        {/* reaction form */}
        <div className='box'>
          {Auth.loggedIn() && <ReactionForm reviewId={review._id} />}
        </div>
        {/* form end */}
        <div className='column'>
          {/* reaction posts */}
          <div className='column'>
            {review.reactionCount > 0 && (
              <ReactionList reactions={review.reactions} />
            )}
          </div>
          {/* reaction post end */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SingleReview;
