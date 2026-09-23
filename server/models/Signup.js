import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  source: {
    type: String,
    default: 'landing_page',
  },
});

export default mongoose.model('Signup', signupSchema);
