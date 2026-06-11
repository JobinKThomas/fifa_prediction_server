const Prediction = require("../models/Prediction");

exports.createPrediction = async (req, res) => {
     try {
    const { mobile, matchNo } = req.body;

    const existingPrediction =
      await Prediction.findOne({
        mobile,
        matchNo,
      });

    if (existingPrediction) {
      return res.status(400).json({
        success: false,
        message:
          "Prediction already submitted for this match",
      });
    }

    const prediction =
      await Prediction.create(req.body);

    res.status(201).json({
      success: true,
      data: prediction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getPredictions = async (req, res) => {
  try {
    const predictions =
      await Prediction.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: predictions.length,
      data: predictions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};