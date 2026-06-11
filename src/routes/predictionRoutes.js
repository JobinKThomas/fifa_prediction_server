const express = require("express");

const router = express.Router();

const {
  createPrediction,
  getPredictions,
} = require("../controllers/predictionController");

router.post("/", createPrediction);

router.get("/", getPredictions);

module.exports = router;