const router = require("express").Router();

//GET last workout
router.get("/api/workouts", (req, res) => {
  res.json({ something: 1 });
});

module.export = router;
