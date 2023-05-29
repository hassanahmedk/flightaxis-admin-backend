import AdminModel from "../db/admins.js";
import FlightModel from "../db/flights.js";

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const authorizeLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    console.log("here " + req.body);
    // Find the user by email
    const user = await AdminModel.findOne({ username });

    // User not found
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });

    // Return the token as a response
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
