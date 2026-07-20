import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL.'],
  },
  altText: {
    type: String,
    default: 'InAmigos Gallery Image',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Photo || mongoose.model('Photo', PhotoSchema);