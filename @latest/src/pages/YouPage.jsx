import { useEffect, useState } from "react";
import { Grid, Box, Button, TextField } from "@mui/material";
import logo from "../assets/logo.png"; // Import your profile icon
import { MadeWorkout } from "../components/madeWorkout.jsx"; // Import the MadeWorkout component
import { Friend } from "../components/friend.jsx"; // Import the Friend component
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";
import { collection, where, query, getDocs } from "firebase/firestore";

const YouPage = ({ isAuth }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [workoutData, setWorkoutData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }

    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      const q = query(
        collection(db, "WorkoutPlan"),
        where("userID", "==", user.uid)
      );

      const data = await getDocs(q);
      const fullData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(fullData);

      setWorkoutData(fullData);
      console.log(fullData[0].workoutData[0].exercise);
    });
  }, []);

  // Sample data for demonstration, replace this with your actual data source
  const friendsData = [
    { Name: "Hello" },
    { Name: "Adam" },
    { Name: "HELLO" },
    { Name: "HELLO" },
    { Name: "HELLO" },
    { Name: "HELLO" },
  ];

  return (
    <Box sx={{ padding: "10px", minWidth: "1100px" }}>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <img
            src={currentUser.photoURL}
            alt="profilePhoto"
            style={{
              borderRadius: "50%",
              width: "150px",
            }}
          />
          <h1>{currentUser.displayName}</h1>
        </Grid>
        <Grid
          item
          sx={{
            bgcolor: "white",
            minWidth: "500px",
            minHeight: "700px",
            textAlign: "center",
            alignContent: "center",
            marginTop: "50px",
            marginLeft: "30px",
            borderRadius: "20px",
          }}
        >
          <h1 style={{ color: "black" }}>Your Workouts</h1>
          <Box>
            {workoutData.map((workout) =>
              workout.workoutData.map((exercise) => (
                <MadeWorkout
                  name={workout.name}
                  description={workout.description}
                  exercise={exercise.exercise}
                  sets={exercise.sets}
                  reps={exercise.reps}
                  weight={exercise.weight}
                  muscle={exercise.bodyPart}
                />
              ))
            )}
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            minHeight: "500px",
            border: "1px solid lightgray",
            borderRadius: "20px",
            textAlign: "center",
            alignContent: "center",
            marginTop: "50px",
            marginLeft: "30px",
          }}
        >
          <div style={{ marginTop: "20px" }}></div>
          <h1 style={{ color: "darkblue" }}>FitFriends</h1>
          <Box
            sx={{
              overflow: "auto",
              maxHeight: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {friendsData.map((friend, index) => (
              <Friend key={index} name={friend.Name} muscle="muscle" />
            ))}
          </Box>
          <Box sx={{ margin: "20px" }}>
            <TextField label="Add FitFriend" variant="outlined" />
            <Button variant="contained" sx={{ height: "55px" }}>
              Add
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YouPage;
