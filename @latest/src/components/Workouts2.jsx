import firebase from "firebase/app"
import "firebase/database"

import { query } from "firebase/firestore"

import { useState, useEffect } from "react"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"

import "./Workouts2.css"

export default function Workouts2({ title, user }) {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore()
			const data = await db.collection("collection").get()
			setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		}

		fetchData()
	}, [])

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
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
			<CardActions></CardActions>
		</Card>
	)
}
