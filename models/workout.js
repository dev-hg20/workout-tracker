const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter the type of workout",
      },
      weight: {
        type: Number,
        required: "Enter the weight you used",
      },
      reps: {
        type: Number,
        required: "Enter the rep you did",
      },
      sets: {
        type: Number,
        required: "Enter the sets you did",
      },
      duration: {
        type: Number,
        required: "Enter the duration you worked out",
      },
      distance: {
        type: Number,
        required: "Enter the distance you clocked",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
