import express from "express";
import { getAllUsers, getAllItems } from "../controllers/adminController.js";
import verifyToken from '../middleware/verifyToken.js'
import isAdmin from '../middleware/isAdmin.js';

const router = express.Router();

// Admin dashboard routes
router.get("/users", verifyToken, isAdmin, getAllUsers);
router.get("/items", verifyToken, isAdmin, getAllItems);

export default router;