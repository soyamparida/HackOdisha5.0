import multer from "multer";
import path from 'path';
import fs from 'fs';

const uploadPath = path.resolve('uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Temporary local storage
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
     cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);

  }
});

const upload = multer({ storage });

export default upload;
