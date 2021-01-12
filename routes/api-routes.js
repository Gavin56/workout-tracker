const router = require("express").Router();
const Workout = require("../models/workoutModel");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).then(function(allWorkouts) {
        res.json(allWorkouts);
    }); 
});