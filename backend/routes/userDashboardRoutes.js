import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import Item from "../models/Item.js";

const router = express.Router();

// GET /my-items - Fetch items submitted by logged-in user
router.get("/my-items", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id; //comes from verifyToken
    const items = await Item.find({ createdBy: userId }); // fetch only user’s items

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching your items", error });
  }
});

export default router;