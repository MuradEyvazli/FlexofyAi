import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  scheduleId: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Eğer model daha önce tanımlandıysa tekrar oluşturulmasını önle
export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
