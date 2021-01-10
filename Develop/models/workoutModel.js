const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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