const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required."
    },
    type: {
        type: String,
        trim: true,
        required: "Type of workout is required."
    },
    weight: {
        type: Number,
        required: "Weight is required."
    },
    sets: {
        type: Number,
        required: "Number of sets is required."
    },
    reps: {
        type: Number,
        required: "Number of reps is required."
    },
    duration: {
        type: Double,
        required: "Duration of workout is required."
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;