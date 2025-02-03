const express = require("express");
const Counter = require("../models/Counter");

const router = express.Router();

// Get counter value
router.get("/", async (req, res) => {
  let counter = await Counter.findOne();
  if (!counter) {
    counter = new Counter({ count: 0 });
    await counter.save();
  }
  res.json(counter);
});

// Increase counter
router.post("/increase", async (req, res) => {
  let counter = await Counter.findOne();
  counter.count += 1;
  await counter.save();
  res.json(counter);
});

// Decrease counter
router.post("/decrease", async (req, res) => {
  let counter = await Counter.findOne();
  counter.count -= 1;
  await counter.save();
  res.json(counter);
});

module.exports = router;
