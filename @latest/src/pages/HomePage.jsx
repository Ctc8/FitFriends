import React, { useEffect } from "react";
import styles from "./HomePage.css";
import { Checkbox, FormGroup, FormControlLabel, Box } from "@mui/material";
import { useState } from "react";
import Exercise from "../components/Exercise";
import { useNavigate } from "react-router-dom";

import { Logo, Streak } from "../assets";

function dayAsString(day) {
  let dayString;
  switch (day) {
    case 1:
      dayString = "Sunday";
      break;
    case 2:
      dayString = "Monday";
      break;
    case 3:
      dayString = "Tuesday";
      break;
    case 4:
      dayString = "Wednesday";
      break;
    case 5:
      dayString = "Thursday";
      break;
    case 6:
      dayString = "Friday";
      break;
    case 7:
      dayString = "Saturday";
      break;
  }
  return dayString;
}

function monthAsString(month) {
  let monthString;
  switch (month) {
    case 1:
      monthString = "January";
      break;
    case 2:
      monthString = "February";
      break;
    case 3:
      monthString = "March";
      break;
    case 4:
      monthString = "April";
      break;
    case 5:
      monthString = "May";
      break;
    case 6:
      monthString = "June";
      break;
    case 7:
      monthString = "July";
      break;
    case 8:
      monthString = "August";
      break;
    case 9:
      monthString = "Septemeber";
      break;
    case 10:
      monthString = "October";
      break;
    case 11:
      monthString = "November";
      break;
    case 12:
      monthString = "December";
      break;
  }
  return monthString;
}

function getDate() {
  const today = new Date();
  const day = today.getDay() + 1;
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  let dayString = dayAsString(day);
  let monthString = monthAsString(month);

  return `${dayString} ${monthString} ${date}, ${year}`;
}

const HomePage = ({ isAuth }) => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      console.log(isAuth);
      navigate("/login");
    }
  });

  const workoutPlan = [
    {
      bodyPart: "Quads",
      exercise: "Squats",
      sets: 10,
      reps: 4,
      weight: 70,
    },
    {
      bodyPart: "Biceps",
      exercise: "Curls",
      sets: 3,
      reps: 4,
      weight: 10,
    },
  ];

  const streak = 4;
  const user = "User";
  const workoutName = "Leg Day";
  const workoutDesc =
    "jaldfjlkajfdklasjkljfklajflkasjfklsjkf ajsdklfjakslfjk fkas jflkjsfkljdsa";

  return (
    <div className="homepage">
      <div className="homepage-container">
        <div className="homepage-header-container">
          <div className="homepage-header">
            <img src={Logo} width="200" height="200"></img>
            <div className="homepage-title">
              <h1>Welcome, {user}</h1> {/* username from auth data */}
              <h2>{getDate()}</h2>
            </div>
          </div>
          <div className="homepage-streak-container">
            <h3>{streak}</h3> {/* streak number from data base */}
            <img src={Streak} width="200" height="200"></img>
          </div>
        </div>

        <div className="homepage-workout-container">
          <div className="homepage-workout-header-container">
            <h2>{workoutName}</h2> {/* retrieve the day's workout title */}
            <p1>{workoutDesc}</p1> {/* retrieve workout description */}
          </div>
          <div className="homepage-workout-complete-container">
            <h4>Workout Complete</h4>
            <div className="homepage-checkbox">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      style={{ transform: "scale(2)" }}
                    ></Checkbox>
                  }
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <div className="homepage-exercises-container">
          <h2>Today's Exercises</h2>
          {/* retrieve the day's exercise list */}
          <div className="homepage-exercise-list-container">
            {" "}
            {workoutPlan.map((workout, index) => (
              <Exercise
                bodyPart={workout.bodyPart}
                exercise={workout.exercise}
                reps={workout.reps}
                sets={workout.sets}
                weight={workout.weight}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div className="homepage">

    // </div>
  );
};

export default HomePage;
