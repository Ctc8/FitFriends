import React, { useState, useEffect } from "react";
import Workouts2 from "../components/Workouts2";
import CommunityPost from "../components/CommunityPost";
import "./CommunityPage.css";

import { db } from "../../firebase-config";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function CommunityPage({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const [comments, setComments] = useState([]);

  let navigate = useNavigate();

  const q = query(collection(db, "WorkoutPlan"), orderBy("timestamp", "desc"));

  const [selectedData, setSelectedData] = useState(null);

  const handleCardClick = async (data) => {
    console.log(data.uid);
    setSelectedData(data);

    const commentsQuery = query(
      collection(db, "Comments"),
      orderBy("timestamp", "desc"),
      where("postID", "==", data.uid)
    );

    const comment = await getDocs(commentsQuery);
    setComments(comment.docs.map((doc) => ({ ...doc.data() })));
    console.log(comments);
  };

  const fetchPost = async () => {
    const data = await getDocs(q);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), uid: doc.id })));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }

    postList.forEach((post) => {
      console.log(post.user);
    });
  }, [postList]);

  return (
    <>
      <div className="page-layout">
        <div className="community-container">
          <div className="workouts">
            <h1 className="community-header">Community Workouts</h1>
            {postList.map((post, index) => (
              <Workouts2
                key={index}
                name={post.name}
                user={post.user}
                description={post.description}
                onCardClick={() => handleCardClick(post)}
              />
            ))}
          </div>
        </div>
        <div className="posts">
          {selectedData && (
            <div className="community-post">
              <CommunityPost
                selectedData={selectedData}
                postComments={comments}
                id={selectedData.uid}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
