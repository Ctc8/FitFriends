import React from 'react'
import { Grid, Box } from "@mui/material";
import logo from "../assets/logo.png"; // Import your profile icon
export const Friend = ({Name}) => {
  return (
    <Box sx={{bgcolor: "lightgray", borderRadius: "5px", marginTop:"5px", marginBottom:"5px"  }}>
        <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="" style={{ width: "80px", height: "80px",borderRadius: "50%",marginLeft:"10px" }} />
            <div style={{ marginLeft: "10px", marginRight:"10px" }}>Adam Bowen</div>
        </div>
    </Box>
  )
}
