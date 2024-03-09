import React, { useState } from "react"

export default function CommunityPost({ selectedData }) {
	const { title, user } = selectedData
	const [comments, setComments] = useState([])
	const [newComment, setNewComment] = useState("")

	const handleCommentChange = event => {
		setNewComment(event.target.value)
	}

	const handleCommentSubmit = event => {
		event.preventDefault()
		setComments([...comments, newComment])
		setNewComment("")
	}

	return (
		<div>
			<h2>{title}</h2>
			<p>{user}</p>
			<h2>Description</h2>
			<p>

				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam
				fuga dolores eum laborum, non itaque provident minima tenetur esse rem
				ea. Ipsum voluptatibus quos fugit cumque suscipit unde reprehenderit.
			</p>

			<h3>Comments</h3>
			{comments.map((comment, index) => (
				<p key={index}>{comment}</p>
			))}

			<form onSubmit={handleCommentSubmit}>
				<input
					type="text"
					value={newComment}
					onChange={handleCommentChange}
					placeholder="What are your thoughts?"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
