import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import upload from '../middleware/multer.js';
import { submitIdForVerification } from '../controllers/verificationController.js';

const router = express.Router();
router.post('/verify/upload-id', verifyToken, upload.single('idCard'), submitIdForVerification);
export default router;