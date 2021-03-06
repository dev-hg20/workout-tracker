const router = require("express").Router();
const Workout = require("../models/workout");

//GET last workout
router.get("/api/workouts", async (req, res) => {
  try {
    const dbWorkout = await Workout.find({});
    res.json(dbWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

//UPDATE workout
router.put("/api/workouts/:id", async (req, res) => {
  try {
    const dbWorkout = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    res.json(dbWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

//CREATE a workout
router.post("/api/workouts", async (req, res) => {
  try {
    const dbWorkout = await Workout.create(req.body);
    res.json(dbWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

//ADD a workout in range
router.get("/api/workouts/range", async (req, res) => {
  try {
    const dbWorkout = await Workout.find({}).limit(7);
    res.json(dbWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

//GET last workout
// router.get("/api/workouts", (req, res) => {
//   Workout.find({})
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

//UPDATE workout
// router.put("/api/workouts/:id", (req, res) => {
//   Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//       console.log(dbWorkout);
//     })
//     .catch((err) => res.status(400).json(err));
// });

// Workout.find({})
//   .limit(7)
//   .then((dbWorkout) => {
//     res.json(dbWorkout);
//   })
//   .catch((err) => {
//     res.status(400).json(err);
//   });
