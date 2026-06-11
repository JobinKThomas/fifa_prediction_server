const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    matchNo: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },

    group: {
      type: String,
      required: true,
    },

    teamA: {
      type: String,
      required: true,
    },

    teamB: {
      type: String,
      required: true,
    },

    teamAScore: {
      type: Number,
      required: true,
    },

    teamBScore: {
      type: Number,
      required: true,
    },

    prediction: {
      type: String,
      enum: ["TEAM_A", "DRAW", "TEAM_B"],
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
predictionSchema.index(
  {
    mobile: 1,
    matchNo: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model(
  "Prediction",
  predictionSchema
);