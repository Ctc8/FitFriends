import React, { useState } from "react";
import "./CommunityPost.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CommunityPost({ selectedData }) {
  const { title, user, description } = selectedData;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{user}</p>
      <h2 className="description-heading">Description</h2>
      <p>{description}</p>

      <h3 className="comments-heading">Comments</h3>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}

      <form onSubmit={handleCommentSubmit}>
        <TextField
          className="comment"
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="What are your thoughts?"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" className="submit-button">
          Submit
        </Button>
      </form>

      <div className="comments-section"></div>
    </div>
  );
}
