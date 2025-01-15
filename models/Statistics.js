import mongoose from "mongoose";

const StatisticsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  caloriesBurned: {
    type: Number,
    required: true,
  },
  workouts: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Statistics ||
  mongoose.model("Statistics", StatisticsSchema);
