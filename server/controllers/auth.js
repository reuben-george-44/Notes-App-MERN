import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client();

const googleLogin = async (req, res) => {
  const ticket = await client.verifyIdToken({
    idToken: req.body.id_token,
    audience: process.env.CLIENT_ID,
  });
  
  const payload = ticket.getPayload();
  
  res.json({ message : "Login successful" })
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 2. Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Create JWT
    const token = jwt.sign(
      { id: user._id, email: user.email }, // payload
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // expiry
    );

    // 4. Send token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // set true in prod
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    return res.status(200).json({ 
      message: "Login successful", 
      user: { id: user._id, email: user.email } 
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


// Generate token with user id (best practice)
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
};

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, password });

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only true in prod
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    // 6. Send response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};



export {googleLogin, loginUser};