import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import TextField from "@mui/material/TextField";
import "./CommunityPost.css";
import { auth, db } from "../../firebase-config";
import Comment from "./Comment";

export default function CommunityPost({ selectedData, id }) {
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
        user: auth.currentUser.displayName,
        userPhoto: auth.currentUser.photoURL,
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
        user: auth.currentUser.displayName,
        userPhoto: auth.currentUser.photoURL,
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
    console.log(data.docs()[0].userPhoto);
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

      <div>
  {selectedData.workoutData.map((workout, index) => (
    <div key={index} style={{borderRadius:"20px", marginTop: "10px", backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px" }}>
      <Grid container spacing={2} alignItems="left" justifyContent="left">
        <Grid item>
          <Typography variant="body1" fontWeight="bold">
            BodyPart:
          </Typography>
        </Grid>
        <Grid item sx={{ marginLeft: "-10px", flexGrow: 1, marginTop:"3px"}}>
          {workout.bodyPart}
        </Grid>
        <Grid item>
          <Typography variant="body1" fontWeight="bold">
            Excercise:
          </Typography>
        </Grid>
        <Grid item  sx={{ marginLeft: "-10px", flexGrow: 1, marginTop:"3px" }}>
          {workout.exercise}
        </Grid>
      </Grid>
      <Box sx={{ paddingBottom: "15px" }}></Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={3}>
          <Typography variant="body1" fontWeight="bold">
            Sets:
          </Typography>
        </Grid>
        <Grid item md={3} sx={{ flexGrow: 1 }}>
          {workout.sets}
        </Grid>
        <Grid item md={3} sx={{marginLeft:"-25px"}}>
          <Typography variant="body1" fontWeight="bold">
            Reps:
          </Typography>
        </Grid>
        <Grid item md={3} sx={{marginLeft:"-10px", flexGrow: 1 }}>
          {workout.reps}
        </Grid>
        <Grid item md={3}>
          <Typography variant="body1" fontWeight="bold">
            Weight:
          </Typography>
        </Grid>
        <Grid item md={3} sx={{ flexGrow: 1 }}>
          {workout.weight}
        </Grid>
      </Grid>
      </div>
      ))}
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
                  src={comment.userPhoto}
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
