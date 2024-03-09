import "firebase/database"

import { query } from "firebase/firestore"

import { useState, useEffect } from "react"

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"

import "./Workouts2.css"

export default function Workouts2({ title, user, onCardClick }) {
	const [data, setData] = useState(null)

	return (
		<Card
			className="card"
			sx={{ maxWidth: 500, bgcolor: "#f5f5f5" }}
			elevation={0}
			onClick={() => onCardClick({ title, user })}
		>
			<CardActionArea>
				<CardContent className="card-content">
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{ fontWeight: "bold" }}
					>
						{title}
					</Typography>
					<Typography gutterBottom variant="h7" component="div">
						{user}
					</Typography>
					{data &&
						data.map(item => (
							<Typography
								key={item.id}
								gutterBottom
								variant="h5"
								component="div"
							>
								{item.title}
							</Typography>
						))}
					<FavoriteIcon className="favorite-icon" />
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
