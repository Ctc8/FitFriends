import React from "react"
import { Grid, TextField, Box, Button } from "@mui/material"
import {useEffect} from "react"

import DeleteIcon from "@mui/icons-material/Delete"

const Workout = ({ onChange, onRemove }) => {
	const handleChange = key => event => {
		onChange(key, event.target.value)
	}

	return (
		<>
			<div style={{ marginTop: "5px" }}>
				<Box
					component="section"
					sx={{
						bgcolor: "grey",
						p: 2,
						border: "2px solid blue",
						borderRadius: 2,
					}}
				>
					<Grid container spacing={2}>
						<Grid item md={2.2}>
							<TextField
								label="Body Part"
								variant="filled"
								onChange={handleChange("bodyPart")}
								sx={{ bgcolor: "white", borderRadius: 2 }}
							/>
						</Grid>
						<Grid item md={2.2}>
							<TextField
								label="Exercise"
								variant="filled"
								onChange={handleChange("exercise")}
								sx={{ bgcolor: "white", borderRadius: 2 }}
							/>
						</Grid>
						<Grid item md={2.2}>
							<TextField
								label="Sets"
								variant="filled"
								type="number"
								onChange={handleChange("sets")}
								sx={{ bgcolor: "white", borderRadius: 2 }}
							/>
						</Grid>
						<Grid item md={2.2}>
							<TextField
								label="Reps"
								variant="filled"
								type="number"
								onChange={handleChange("reps")}
								sx={{ bgcolor: "white", borderRadius: 2 }}
							/>
						</Grid>
						<Grid item md={2.2}>
							<TextField
								fullWidth
								label="Weight"
								variant="filled"
								type="number"
								onChange={handleChange("weight")}
								sx={{ bgcolor: "white", borderRadius: 2 }}
							/>
						</Grid>

						<Grid item md={1}>
							<Button
								variant="outlined"
								sx={{
									bgcolor: "whitesmoke",
									borderRadius: 2,
									width: "50px",
									height: "55px",
								}}
								onClick={onRemove}
							>
								<DeleteIcon />
							</Button>
						</Grid>
					</Grid>
				</Box>
			</div>
		</>
	)
}

export default Workout
