import express from 'express';
import Signup from '../models/Signup.js';

const router = express.Router();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/signup — validate email, check duplicates, save
router.post('/signup', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const trimmed = email.trim().toLowerCase();

    // Server-side re-validation
    if (!EMAIL_REGEX.test(trimmed)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // Check for duplicates — friendly message, not an error
    const existing = await Signup.findOne({ email: trimmed });
    if (existing) {
      return res.status(409).json({ message: "You're already on the list!" });
    }

    // Save to MongoDB
    const signup = new Signup({ email: trimmed, source: 'landing_page' });
    await signup.save();

    return res.status(201).json({
      message: "You're on the list! We'll notify you when SANGAM launches.",
    });
  } catch (err) {
    // Handle Mongoose duplicate key error (race condition)
    if (err.code === 11000) {
      return res.status(409).json({ message: "You're already on the list!" });
    }
    console.error('Signup error:', err.message);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

export default router;
