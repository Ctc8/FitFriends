import React from 'react'
import { Grid, Box, Button } from "@mui/material";
export const MadeWorkout = ({name, muscle}) => {
  return (
    <Button sx={{minWidth: "400px",marginLeft:"20px",marginTop:"5px", marginBottom:"5px", bgcolor:"white", color:"black", borderWidth:"5px", border:"1px solid black" }}>
    <Grid container spacing={2} sx={{maxWidth:"300px"}}>
        <Grid item> 
          <h1>Leg Day</h1>
        </Grid>
        <Grid item sx={{ wordWrap: "break-word", maxWidth:"300px", marginTop: "-50px", textAlign:"left" }}>
          <p>This day I will eghurwghuirbrbrehjvj rejnwork </p>
        </Grid>
      </Grid>
    </Button>
  )
}
