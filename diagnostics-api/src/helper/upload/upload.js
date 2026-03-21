const multer = require('multer');
const fs = require('fs');
const path = require('path');
const CurrentDate = require('../DateHelper'); // your date helper

// Ensure the uploads folder exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // use absolute path
  },
  filename: function (req, file, cb) {
    const currentDate = CurrentDate();
    const uniqueSuffix = currentDate + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split('.').pop(); // safer extraction
    cb(null, "GR_" + file.fieldname + "_" + uniqueSuffix + "." + extension);
  },
});

// File filter (accept only images)
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (allowedMimeTypes.includes(file.mimetype)) cb(null, true);
  else cb(null, false);
};

// Export multer instance
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter,
});

module.exports = upload;
