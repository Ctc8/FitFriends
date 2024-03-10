import "firebase/firestore"

import { useState, useEffect } from "react"

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"

import "./Workouts2.css"
import { db } from "../../firebase-config"
import { collection, getDocs } from "firebase/firestore"

export default function Workouts2({ name, user, description, onCardClick }) {
	const [data, setData] = useState([])

	return (
		<Card
			className="card"
			sx={{ maxWidth: 500, bgcolor: "#f5f5f5" }}
			elevation={0}
			onClick={() => onCardClick({ name, user })}
		>
			<CardActionArea>
				<CardContent className="card-content">
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{ fontWeight: "bold" }}
					>
						{name}
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
								{item.name}
							</Typography>
						))}

					<FavoriteIcon className="favorite-icon" />
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
