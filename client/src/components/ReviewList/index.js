import React from 'react';
import { Link } from 'react-router-dom';

import "./ReviewList.css"

const ReivewList = ({ reviews, title }) => {
  if (!reviews || !reviews?.length) {
    return <h3>No Reviews Yet</h3>;
  }

  console.log({reviews})
  return (
    <div className='reviews-list-container'>
      <h3>{title}</h3>
      {reviews &&
        reviews.map(review => (
          <div key={review._id} className="message is-warning">
            <p className="message-header">
              <Link
                to={`/profile/${review.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {review.username}
              </Link>{' '}
              review on {review.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/review/${review._id}`}>
                <p>{review.reviewText}</p>
                <p className="mb-0">
                  Reactions: {review.reactionCount} || Click to{' '}
                  {review.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        )).reverse()}
    </div>
  );
};

export default ReivewList;
