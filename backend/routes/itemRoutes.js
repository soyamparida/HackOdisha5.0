import express from 'express';
import {
  getItems,
  uploadItem,
  updateItem,
  createItem,
  getUserItems,
  getAllItems,
} from '../controllers/itemController.js';
import upload from '../middleware/multer.js';
import verifyToken from '../middleware/verifyToken.js';
import isAdmin from '../middleware/isAdmin.js';

const router = express.Router();

// Public - browse all items
router.get("/items", getItems);

// A logged-in user can get only their own items
router.get("/items/my-items", verifyToken, getUserItems);

// Private - upload new item (image + id card)
router.post("/items", verifyToken, upload.array("files", 2), uploadItem);

// Private - update item
router.put('/items/:id', verifyToken, upload.single('image'), updateItem);

// Admin can view all items from all users
router.get("/items/all-items", verifyToken, isAdmin, getAllItems);

export default router;