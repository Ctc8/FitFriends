import React from "react";

import "./Comment.css";

const Comment = ({ user, photo, comment }) => {
  return (
    <div className="individual-comment-container">
      <div className="comment-userInfo-message-container">
        <div className="comment-username-photo-container">
          <img src={photo} alt="userPhoto" className="comment-user-photo" />
          <div className="comment-author">{user}</div>
        </div>
        <div className="comment-text">{comment}</div>
      </div>
    </div>
  );
};

export default Comment;
