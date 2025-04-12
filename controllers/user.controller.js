import User from "../models/user.model.js";
import mongoose from "mongoose";

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};



export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
};



export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).send("User not found");
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send("User not found");
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
