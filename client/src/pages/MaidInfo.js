import React from 'react'
import Maid2 from "../assets/card/maid2.jpg"
import "./MaidInfo.css";

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MAID } from '../utils/queries';

import ReviewForm from '../components/ReviewForm';
import ReivewList from '../components/ReviewList';

function MaidInfo(props) {

  const { maid_username: userParam } = useParams();

  const { data } = useQuery(QUERY_MAID, {
    variables: { maidUsername: userParam },
  });

  const maid = data?.maid || {};

  console.log(maid)
  return (
    <div className='columns'>
      {/* coloum 1 that holds card */}
      <div className='column'>
        <div className='maid-into-container has-content is-centered'>
          <section className=" section more-about-me">
            <div className="card">
              <header className="card-header ">
                <p className="card-header-title">
                  About Me
                </p>
              </header>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={Maid2} alt="cleaning supplies" />
                </figure>
              </div>
              <div className="card-content ">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={Maid2} alt="cleaning supplies" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{maid.name}</p>
                    <p className="">@{maid.maid_username}</p>
                  </div>
                </div>
                <div className="content">
                  I'm <strong>{maid.name}</strong> and I treat every home as if it were my own. My belief is "Cleaning and organizing is a practice, not a project."
                </div>
              </div>
            </div>
          </section>
          {/* Review Form */}
          {/* Review Form */}
          <div className='review-box notification is-primary is-light'><ReviewForm maidUsername={maid.maid_username}/>
          </div>
          {/* Review Form */}
          {/* Review Form */}

        </div>
      </div>
      {/* coloum 2 that holds reviews */}
      <div className='column right-side'>
        <h2 className='title'>Client Feedback:</h2>
        <div className="overflow-y-content">
          <ReivewList
            reviews={maid.reviews}
          />
        </div>
      </div>
    </div>
  )
}

export default MaidInfo