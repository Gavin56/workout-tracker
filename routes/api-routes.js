const router = require("express").Router();
const Workout = require("../models/workoutModel");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                //Syntax is confusing. Why $ in quotes?
                $sum: "$exercises.duration"
            }
        }
    }]).then(function (allWorkouts) {
        res.json(allWorkouts);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body
            }
        } , {new: true}
    ).then(function (allWorkouts) {
        res.json(allWorkouts);
    }).catch(err => {
        console.log(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(function (allWorkouts) {
            res.json(allWorkouts);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(function (allWorkouts) {
            console.log(allWorkouts)
            res.json(allWorkouts);
        });
});

module.exports = router;