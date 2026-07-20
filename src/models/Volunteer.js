import mongoose from 'mongoose';

const VolunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the volunteer name.'],
  },
  post: {
    type: String,
    required: [true, 'Please provide the volunteer designation/post.'],
  },
  imageUrl: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Volunteer || mongoose.model('Volunteer', VolunteerSchema);