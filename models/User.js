import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name zorunlu
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Sadece user veya admin olabilir
      default: "user", // Varsayılan değer
    },
  },
  {
    timestamps: true, // createdAt ve updatedAt alanlarını otomatik ekler
  }
);

// Şifreyi hash'leme
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);