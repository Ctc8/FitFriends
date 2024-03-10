import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./CommunityPost.css";
import { auth, db } from "../../firebase-config";
import Comment from "./Comment";

export default function CommunityPost({ selectedData, postComments, id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    if (event.key == "Enter" && newComment != "") {
      // get the comments with the same id
      const commentsRef = collection(db, "Comments");

      await addDoc(commentsRef, {
        comment: newComment,
        postID: selectedData.uid,
        timestamp: serverTimestamp(),
      });

      setNewComment("");
      getComments();
    }
  };

  const handleClick = async () => {
    // get the comments with the same id
    if (newComment != "") {
      const commentsRef = collection(db, "Comments");

      await addDoc(commentsRef, {
        comment: newComment,
        postID: selectedData.uid,
        timestamp: serverTimestamp(),
        username: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
      });

      setNewComment("");
      getComments();
    }
  };

  const getComments = async () => {
    const commentsQuery = query(
      collection(db, "Comments"),
      orderBy("timestamp", "desc"),
      where("postID", "==", selectedData.uid)
    );

    const data = await getDocs(commentsQuery);
    setComments(data.docs.map((doc) => ({ ...doc.data() })));
  };

  useEffect(() => {
    getComments();
  }, [id]);

  return (
    <div className="communty-post-container">
      <div className="header-container">
        <div className="post-title">{selectedData.name}</div>
        <div>{selectedData.description}</div>
      </div>

      <h3 className="comments-heading">Comment</h3>

      <div className="comment-input-container">
        <TextField
          className="comment-input"
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          onKeyDownCapture={handleCommentSubmit}
          placeholder="What are your thoughts?"
          variant="outlined"
          multiline
          rows={4}
        />
        <button className="submit-button" onClick={handleClick}>
          Submit
        </button>
      </div>

      <div className="comments-container">
        {comments.map((comment, index) => (
          <div className="individual-comment-container">
            <div className="comment-userInfo-message-container">
              <div className="comment-username-photo-container">
                <img
                  src={comment.photo}
                  alt="userPhoto"
                  className="comment-user-photo"
                />
                <div className="comment-author">{comment.user}</div>
              </div>
              <div className="comment-text">{comment.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
