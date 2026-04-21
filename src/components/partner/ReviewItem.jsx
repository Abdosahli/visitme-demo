import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div className="v-review-item-pro">
      <div className="v-review-header">
        <div className="v-user-box">
          <img src={review.userImage} alt={review.userName} />
          <div>
            <h4>{review.userName}</h4>
            <span className="v-stars">{"★".repeat(review.rating)}</span>
          </div>
        </div>
        <span className="v-review-date">{review.date}</span>
      </div>

      <p className="v-review-text">"{review.text}"</p>

      <div className="v-review-actions">
        <button className="v-reply-btn">Draft Response</button>
        <button className="v-flag-btn">Report</button>
      </div>
    </div>
  );
};

export default ReviewItem;