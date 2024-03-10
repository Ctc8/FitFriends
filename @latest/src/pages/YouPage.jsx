import React from "react";
import { Grid, Box, Button, TextField } from "@mui/material";
import logo from "../assets/logo.png"; // Import your profile icon
import { MadeWorkout } from "../components/madeWorkout.jsx"; // Import the MadeWorkout component
import { Friend } from "../components/friend.jsx"; // Import the Friend component

const YouPage = () => {
  // Sample data for demonstration, replace this with your actual data source
  const workoutData = [
    { Name: "Hello", reghiu: "helli" },
    { Name: "Adam", reghiu: "vuerh" },
    { Name: "HELLO", reghiu: "rgiu" },
    { Name: "Adam", reghiu: "vuerh" },
    { Name: "Adam", reghiu: "vuerh" },
    { Name: "Adam", reghiu: "vuerh" },
  ];
  const friendsData = [
    { Name: "Hello"},
    { Name: "Adam" },
    { Name: "HELLO" },
    { Name: "HELLO" },
    { Name: "HELLO" },
    { Name: "HELLO" }
  ];

  return (
    <Box sx={{ padding: "10px", minWidth: "1100px" }}>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "center" , marginTop:"50px"}}>
          <img src={logo} alt="" />
          <h1>Adam Bowen</h1>
        </Grid>
        <Grid item sx={{ bgcolor:"lightgray",minWidth:"500px", minHeight: "700px",textAlign:"center",alignContent:"center", marginTop:"50px", marginLeft:"30px", borderRadius:"20px" }}>
        <h1 style={{ color: "black" }}>Your Workouts</h1>
          <Box sx={{ bgcolor: "whitesmoke", overflow: "auto", maxHeight: "450px", display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "center", marginTop: "20px", marginLeft:"-15px",  }}>
            {workoutData.map((workout, index) => (
              <MadeWorkout key={index} name={workout.Name} muscle="muscle" />
            ))}
          </Box>
          <Box>
            <img src={logo} alt="" />
          </Box>
          </Grid>
          <Grid item sx={{minHeight: "500px", border: "1px solid lightgray",borderRadius:"20px",textAlign:"center",alignContent:"center", marginTop:"50px", marginLeft:"30px" }}>
            <div style={{ marginTop: "20px" }}></div>
            <h1 style={{color:"darkblue"}}>FitFriends</h1>
            <Box sx={{ overflow: "auto", maxHeight: "500px", display: "flex", flexDirection: "column", alignItems: "center"}}>
              {friendsData.map((friend, index) => (
                <Friend key={index} name={friend.Name} muscle="muscle" />
              ))}
            </Box>
            <Box sx={{marginTop:"20px"}}>
              <TextField label="Add FitFriend" variant="outlined" />
              <Button variant="contained" sx={{height:"55px"}}>Add</Button>
            </Box>
          </Grid>
      </Grid>
    </Box>
  );
};

export default YouPage;
