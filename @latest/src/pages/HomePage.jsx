import React, { useEffect } from "react";
import { Checkbox, FormGroup, FormControlLabel, Box } from "@mui/material";
import { getDocs, query, collection, where } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

import { useState } from "react";
import Exercise from "../components/Exercise";
import { useNavigate } from "react-router-dom";

import { Logo, Streak, Rest } from "../assets";

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
  const [currentUser, setCurrentUser] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dailyWorkoutData, setDailyWorkoutData] = useState([]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      console.log(isAuth);
      navigate("/login");
    }

    onAuthStateChanged(auth, async (user) => {
      const dataForToday = [];
      const currentDayIndex = new Date().getDay();
      console.log(currentDayIndex);
      const currentDay = dayAsString(currentDayIndex + 1);

      setCurrentUser(user);

      const q = query(
        collection(db, "WorkoutPlan"),
        where("userID", "==", user.uid)
      );

      const data = await getDocs(q);
      const fullData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(fullData);

      fullData.map((data) => {
        const temp = data.days;
        for (const property in temp) {
          if (property == currentDay) {
            if (temp[property] == true) {
              console.log("We got: " + data.name);
              data.workoutData.map((workout) => {
                console.log(workout.bodyPart);
                dataForToday.push(workout);
              });
              setName(data.name);
              setDescription(data.description);
            }
          }
        }
      });

      console.log(dataForToday);

      setDailyWorkoutData(dataForToday);
    });
  }, []);

  const [dayMatch, setDayMatch] = useState(true);

  const streak = 4;

  return (
    <div className="homepage">
      <div className="homepage-container">
        <div className="homepage-header-container">
          <div className="homepage-header">
            <img src={Logo} width="200" height="200"></img>
            <div className="homepage-title">
              <h1>Welcome, {currentUser.displayName}</h1>{" "}
              {/* username from auth data */}
              <h2>{getDate()}</h2>
            </div>
          </div>
        </div>

        {dailyWorkoutData.length > 0 ? (
          <div>
            <div className="homepage-workout-container">
              <div className="homepage-workout-header-container">
                <div className="Title">{name}</div>
                <p1>{description}</p1> {/* retrieve workout description */}
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
                        >
                          {checked && console.log("workout complete")}
                        </Checkbox>
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
                {dailyWorkoutData.map((workout, index) => (
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
        ) : (
          <div>
            <div className="homepage-rest-container">
              <h5>Enjoy your rest day!</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
