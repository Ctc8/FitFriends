import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
export const MadeWorkout = ({ name, muscle }) => {
  return (
    <div style={{backgroundColor:"whitesmoke",border:"1px solid black",borderRadius:"20px", minWidth:"450px",margin:"10px"}}>
    <Box sx={{ marginLeft: "20px" }}>
  <Grid container>
    <Grid item sx={{ marginRight: "50px", flexShrink: 0 }}>
      Name
    </Grid>
    <Grid item sx={{ overflowWrap: "break-word", maxWidth: "300px" }}>
      Description
    </Grid>
    </Grid>
    </Box>

    <Box sx={{marginTop:"10px"}}>
    <Grid container>
    <Grid item xs={6} sm={6}>
      <Box sx={{ textAlign: "left",marginLeft:"20px" }}>Body: {name}</Box>
      <Box sx={{ textAlign: "left",marginLeft:"20px" }}>Exercise:</Box>
      <Box sx={{ textAlign: "left",marginLeft:"20px" }}>Sets:</Box>
    </Grid>
    <Grid item xs={6} sm={6}>
      <Box sx={{ textAlign: "left",marginLeft:"20px" }}>Reps:</Box>
      <Box sx={{ textAlign: "left",marginLeft:"20px" }}>Weight:</Box>
    </Grid>
  </Grid>
</Box>
    </div>
    
  );
};
