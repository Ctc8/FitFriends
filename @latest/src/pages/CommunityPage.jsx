import React, { useState, useEffect } from "react"
import Workouts2 from "../components/Workouts2"
import CommunityPost from "../components/CommunityPost"
import "./CommunityPage.css"

import { db } from "../../firebase-config"
import { collection, query, getDocs, orderBy } from "firebase/firestore"

export default function CommunityPage() {
	const [postList, setPostList] = useState([])

	const q = query(collection(db, "WorkoutPlan"), orderBy("timestamp", "desc"))

	const [selectedData, setSelectedData] = useState(null)

	const handleCardClick = data => {
		setSelectedData(data)
	}

	const fetchPost = async () => {
		const data = await getDocs(q)
		setPostList(data.docs.map(doc => ({ ...doc.data() })))
	}

	useEffect(() => {
		fetchPost()
	}, [])

	useEffect(() => {
		postList.forEach(post => {
			console.log(post.user)
		})
	}, [postList])

	return (
		<>
			<div className="page-layout">
				<div className="container">
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
							<CommunityPost selectedData={selectedData} />
						</div>
					)}
				</div>
			</div>
		</>
	)
}
