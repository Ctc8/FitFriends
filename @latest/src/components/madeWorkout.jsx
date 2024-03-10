import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
export const MadeWorkout = ({
  name,
  description,
  muscle,
  exercise,
  sets,
  reps,
  weight,
}) => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        border: "1px solid black",
        borderRadius: "20px",
        minWidth: "450px",
        margin: "10px",
      }}
    >
      <Box sx={{ marginLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
        <Grid container>
          <Grid
            item
            sx={{ marginRight: "50px", flexShrink: 0, fontWeight: "bold" }}
          >
            {name}
          </Grid>
          <Grid
            item
            sx={{
              overflowWrap: "break-word",
              maxWidth: "300px",
              fontWeight: "bold",
            }}
          >
            {description}
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: "10px" }}>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <Box sx={{ textAlign: "left", marginLeft: "20px" }}>
              Body part: {muscle}
            </Box>
            <Box sx={{ textAlign: "left", marginLeft: "20px" }}>
              Exercise: {exercise}
            </Box>
            <Box
              sx={{
                textAlign: "left",
                marginLeft: "20px",
                marginBottom: "10px",
              }}
            >
              Sets: {sets}
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box sx={{ textAlign: "left", marginLeft: "20px" }}>
              Reps: {reps}
            </Box>
            <Box sx={{ textAlign: "left", marginLeft: "20px" }}>
              Weight: {weight}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
