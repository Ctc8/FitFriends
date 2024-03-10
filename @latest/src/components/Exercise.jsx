import React from 'react'
import "./../pages/HomePage.css"

const Exercise = ({bodyPart, exercise, reps, sets, weight}) => {
  return (
    <div className="homepage-exercise-container">
        <h4>Body Part: {bodyPart}</h4>
        <h4>Exercise: {exercise}</h4>
        <h4>Reps: {reps}</h4>
        <h4>Sets: {sets}</h4>
        <h4>Weight: {weight} lbs</h4>
    </div>
  )
}

export default Exercise