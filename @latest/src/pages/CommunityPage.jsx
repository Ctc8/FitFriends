import React, { useState } from "react"
import Workouts2 from "../components/Workouts2"
import CommunityPost from "../components/CommunityPost"
import "./CommunityPage.css"

export default function CommunityPage() {
	const [selectedData, setSelectedData] = useState(null)

	const handleCardClick = data => {
		setSelectedData(data)
	}

	return (
		<div className="container">
			<div className="workouts">
				<h1>Community Workouts</h1>
				<Workouts2
					title="Chest"
					user="John Doe"
					onCardClick={handleCardClick}
				/>
				<Workouts2
					title="Back"
					user="Bob Ross"
					onCardClick={handleCardClick}
				/>
				<Workouts2
					title="Legs"
					user="LeBron James"
					onCardClick={handleCardClick}
				/>
			</div>
			{selectedData && (
				<div className="community-post">
					<CommunityPost selectedData={selectedData} />
				</div>
			)}
		</div>
	)
}
