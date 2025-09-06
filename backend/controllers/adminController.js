import User from "../models/User.js";
import Item from "../models/Item.js";

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password"); // exclude password
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
};

// Get all items
export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items" });
    }
};