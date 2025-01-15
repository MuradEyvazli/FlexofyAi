import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return mongoose.connection.asPromise();

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB bağlantısı başarılı!");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error);
    throw new Error("MongoDB bağlantı hatası!");
  }
};

export default connectDB;
