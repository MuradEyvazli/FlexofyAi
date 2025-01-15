import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Kullanıcıya bağlı
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }, // Beğeni sayısı
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
