import React from "react";
import { Grid, Box} from "@mui/material";
import logo from "../assets/logo.png"; // Import your profile icon

const YourComponent = () => {
  const [name, setName] = useState("Your Name");
};
  // Function to handle name change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
const YouPage = () => {
  return (
    <Box sx={{padding: "10px", minWidth:"1100px",}}>
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img src={logo} alt="" />
        <h1>Adam Bowen</h1>
      </Grid>
      <Grid item>
        <Box>
          <h1>TEST</h1>
        </Box>
      </Grid>
      <Grid item>
        <p>Hello</p>
      </Grid>
    </Grid>
  </Box>  
  );
};

export default YouPage;
