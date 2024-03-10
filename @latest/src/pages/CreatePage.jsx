import React, { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase-config.js";
import { useNavigate } from "react-router-dom";

import styles from "./CreatePage.module.css";
import logo from "../assets/logo.png";
import Workout from "../components/Workouts.jsx";

const CreatePage = () => {
  let navigate = useNavigate();

  const [workoutCount, setWorkoutCount] = useState(1);
  const [name, setName] = useState(""); // State to store the name
  const [description, setDescription] = useState(""); // State to store the description
  const [workoutData, setWorkoutData] = useState([]);
  const [checkboxState, setCheckboxState] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const addWorkout = () => {
    setWorkoutCount((prevCount) => prevCount + 1);
  };

  const postCollectionRef = collection(db, "WorkoutPlan");

  const handleSubmit = async () => {
    if (Object.values(checkboxState).some((value) => value)) {
      // workout plan json
      const date = new Date();

      const workoutPlan = {
        name: name,
        description: description,
        workoutData: [...workoutData],
        days: checkboxState,
        user: auth.currentUser.displayName,
        dayCreated: date.getDay(),
        monthCreated: date.getMonth() + 1,
        yearCreated: date.getFullYear(),
        timestamp: serverTimestamp(),
        userID: auth.currentUser.uid,
      };

      await addDoc(postCollectionRef, workoutPlan);

      navigate("/");
    } else {
      invalidSubmit();
    }
  };

  const invalidSubmit = () => {
    console.log("Invalid");
  };

  const handleInputChange = (index, key, value) => {
    setWorkoutData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [key]: value };
      return newData;
    });
  };

  const handleCheckboxChange = (day) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: 2,
          paddingLeft: 55,
          paddingRight: 15,
          marginTop: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="workout plan" className={styles.image} />
            <div>
              <h1>Create a Workout Plan</h1>
            </div>
          </div>
        </Box>
        <div
          className={styles.TextField}
          style={{
            marginTop: "20px",
          }}
        >
          <Stack spacing={4}>
            <Stack direction={"row"} spacing={4}>
              <TextField
                label="Name"
                variant="filled"
                required
                id="fullWidth"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Description"
                variant="filled"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Stack>
          </Stack>
        </div>
        <div style={{ marginBottom: "20px" }}></div>
        {[...Array(workoutCount)].map((_, index) => (
          <div key={index}>
            <Workout
              onChange={(key, value) => handleInputChange(index, key, value)}
            />
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              marginTop: 2,
              width: "50px",
              height: "50px",
            }}
            onClick={addWorkout}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              marginTop: 2,
              height: "50px",
              marginLeft: "10px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <div style={{ marginTop: 20 }}>
          <Box
            sx={{
              bgcolor: "grey",
              p: 2,
              border: "2px solid blue",
              borderRadius: 2,
              maxHeight: "55px",
              color: "white",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            <Grid container spacing={2}>
              <Grid item md={1.7}>
                <FormControlLabel
                  label="Monday"
                  control={
                    <Checkbox
                      sx={{ color: "whitesmoke" }}
                      checked={checkboxState.Monday}
                      onChange={() => handleCheckboxChange("Monday")}
                    />
                  }
                  labelPlacement="top"
                />
              </Grid>
              <Grid item md={1.7}>
                <FormControlLabel
                  label="Tuesday"
                  control={
                    <Checkbox
                      sx={{ color: "whitesmoke" }}
                      checked={checkboxState.Tuesday}
                      onChange={() => handleCheckboxChange("Tuesday")}
                    />
                  }
                  labelPlacement="top"
                />
              </Grid>
              <Grid item md={1.7}>
                <FormControlLabel
                  label="Wednesday"
                  control={
                    <Checkbox
                      sx={{ color: "whitesmoke" }}
                      checked={checkboxState.Wednesday}
                      onChange={() => handleCheckboxChange("Wednesday")}
                    />
                  }
                  labelPlacement="top"
                />
              </Grid>
              <Grid item md={1.7}>
                <FormControlLabel
                  label="Thursday"
                  control={
                    <Checkbox
                      sx={{ color: "whitesmoke" }}
                      checked={checkboxState.Thursday}
                      onChange={() => handleCheckboxChange("Thursday")}
                    />
                  }
                  labelPlacement="top"
                />
              </Grid>
              <Grid item md={1.7}>
                <FormControlLabel
                  label="Friday"
                  control={
                    <Checkbox
                      sx={{ color: "whitesmoke" }}
                      checked={checkboxState.Friday}
                      onChange={() => handleCheckboxChange("Friday")}
                    />
                  }
                  labelPlacement="top"
                />
              </Grid>
              <Grid item md={1.7}>
                <FormControlLabel
                  label="Friday"
                  control={
                    <Checkbox
                      sx={{ color: "whitesmoke" }}
                      checked={checkboxState.Saturday}
                      onChange={() => handleCheckboxChange("Saturday")}
                    />
                  }
                  labelPlacement="top"
                />
              </Grid>
              <Grid item md={1.7}>
                <FormControlLabel
                  label="Sunday"
                  control={
                    <Checkbox
                      sx={{ color: "whitesmoke" }}
                      checked={checkboxState.Sunday}
                      onChange={() => handleCheckboxChange("Sunday")}
                    />
                  }
                  labelPlacement="top"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default CreatePage;
