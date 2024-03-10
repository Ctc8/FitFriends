import React from "react";
import { Grid, Box, Button } from "@mui/material";
export const MadeWorkout = ({ name, muscle }) => {
  return (
    <Button
      sx={{
        minWidth: "400px",
        marginTop: "5px",
        marginBottom: "5px",
        bgcolor: "white",
        color: "black",
        borderWidth: "5px",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "300px" }}>
        <Grid item>
          <h1 style={{ color: "darkblue" }}>{name}</h1>
        </Grid>
        <Grid
          item
          sx={{
            wordWrap: "break-word",
            maxWidth: "300px",
            marginTop: "-50px",
            textAlign: "left",
          }}
        >
          <p>muscle</p>
        </Grid>
      </Grid>
    </Button>
  );
};