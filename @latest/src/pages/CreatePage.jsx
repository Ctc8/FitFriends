<Box sx={{ borderRadius: 2, paddingLeft: 55, paddingRight: 15 }}>
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
  <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
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
        maxHeight: "55px",
        color: "white",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <Grid container spacing={2}>
        {[...Array(7)].map((_, index) => (
          <Grid key={index} item xs={6} md={1.7}>
            <FormControlLabel
              label={
                index === 0
                  ? "Monday"
                  : index === 1
                  ? "Tuesday"
                  : index === 2
                  ? "Wednesday"
                  : index === 3
                  ? "Thursday"
                  : index === 4
                  ? "Friday"
                  : index === 5
                  ? "Saturday"
                  : "Sunday"
              }
              control={
                <Checkbox
                  sx={{ color: "whitesmoke" }}
                  checked={
                    checkboxState[
                      index === 0
                        ? "Monday"
                        : index === 1
                        ? "Tuesday"
                        : index === 2
                        ? "Wednesday"
                        : index === 3
                        ? "Thursday"
                        : index === 4
                        ? "Friday"
                        : index === 5
                        ? "Saturday"
                        : "Sunday"
                    ]
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      index === 0
                        ? "Monday"
                        : index === 1
                        ? "Tuesday"
                        : index === 2
                        ? "Wednesday"
                        : index === 3
                        ? "Thursday"
                        : index === 4
                        ? "Friday"
                        : index === 5
                        ? "Saturday"
                        : "Sunday"
                    )
                  }
                />
              }
              labelPlacement="top"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </div>
</Box>;

export default CreatePage;
