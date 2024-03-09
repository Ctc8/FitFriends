import React, { useState } from "react";
import { Stack, TextField, Button, Box, Grid, Checkbox } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config.js";

import styles from "./CreatePage.module.css";
import logo from "../assets/logo.png";
<<<<<<< HEAD
import { Stack, TextField, Button, Box, Grid, Checkbox, Typography } from "@mui/material";
=======
>>>>>>> 4861f34e340acd6717077c6fd80ef30f6d53a8b6
import Workout from "../components/Workouts.jsx";

const CreatePage = () => {
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
      const workoutPlan = {
        name: name,
        description: description,
        workoutData: [...workoutData],
        days: checkboxState,
      };

      await addDoc(postCollectionRef, workoutPlan);

      console.log(workoutPlan);
      // console.log("Name:", name);
      // console.log("Description:", description);
      // console.log("Workout Data:", workoutData);
      console.log("Checkbox State:", checkboxState);
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
    <Box sx={{ borderRadius: 2, paddingLeft:35, paddingRight:25}}>
        <Box sx={{display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "100%",}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="workout plan" className={styles.image} />
                <div>
                    <h1>Create a Workout Plan</h1>
                    <p>Some description or additional content can go here...</p>
                </div>
            </div>
        </Box>
      <div className={styles.TextField}>
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
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Button
          variant="outlined"
          sx={{ borderRadius: 2, marginTop: 2, width: "50px", height: "50px" }}
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
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={1.7}>
                <p className={styles.customParagraph}>Monday</p>
              <Checkbox
                sx={{ color: "whitesmoke"}}
                checked={checkboxState.Monday}
                onChange={() => handleCheckboxChange("Monday")}
              ></Checkbox>
            </Grid>
            <Grid item md={1.7}>
                <p className={styles.customParagraph}>Tuesday</p>
              <Checkbox
                sx={{ color: "whitesmoke" }}
                checked={checkboxState.Tuesday}
                onChange={() => handleCheckboxChange("Tuesday")}
              ></Checkbox>
            </Grid>
            <Grid item md={1.7}>
              <p className={styles.customParagraph}>Wednesday</p>
              <Checkbox
                sx={{ color: "whitesmoke" }}
                checked={checkboxState.Wednesday}
                onChange={() => handleCheckboxChange("Wednesday")}
              ></Checkbox>
            </Grid>
            <Grid item md={1.7}>
            <p className={styles.customParagraph}>Thursday</p>
              <Checkbox
                sx={{ color: "whitesmoke" }}
                checked={checkboxState.Thursday}
                onChange={() => handleCheckboxChange("Thursday")}
              ></Checkbox>
            </Grid>
            <Grid item md={1.7}>
            <p className={styles.customParagraph}>Friday</p>
              <Checkbox
                sx={{ color: "whitesmoke" }}
                checked={checkboxState.Friday}
                onChange={() => handleCheckboxChange("Friday")}
              ></Checkbox>
            </Grid>
            <Grid item md={1.7}>
            <p className={styles.customParagraph}>Saturday</p>
              <Checkbox
                sx={{ color: "whitesmoke" }}
                checked={checkboxState.Saturday}
                onChange={() => handleCheckboxChange("Saturday")}
              ></Checkbox>
            </Grid>
            <Grid item md={1.7}>
            <p className={styles.customParagraph}>Sunday</p>
              <Checkbox
                sx={{ color: "whitesmoke" }}
                checked={checkboxState.Sunday}
                onChange={() => handleCheckboxChange("Sunday")}
              ></Checkbox>
            </Grid>
          </Grid>
        </Box>
      </div>
      </Box>
    </>
  );
};

export default CreatePage;
