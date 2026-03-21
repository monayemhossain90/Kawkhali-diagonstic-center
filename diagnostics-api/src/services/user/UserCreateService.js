const fs = require("fs");
const cloudinary = require("../../utility/cloudinary");
const hashedPassword = require("../../utility/hashedPassword");

const UserCreateService = async (req, res, DataModel) => {
  try {
    let reqBody = req.body;

    // Check if email already exists
    const existingUser = await DataModel.findOne({ email: reqBody.email });
    if (existingUser) {
      return res.status(409).json({ message: "fail", data: "Email Already Exists" });
    }

    // Hash password
    if (!reqBody.password) {
      return res.status(400).json({ message: "fail", data: "Password is required" });
    }
    reqBody.password = await hashedPassword(reqBody.password);

    // Handle image if provided
    if (req.file) {
      const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: "Users",
      });

      // Delete local file safely
      await fs.promises.unlink(req.file.path);

      // Attach Cloudinary info
      reqBody.image = {
        public_id: cloudinaryResponse.public_id,
        image_url: cloudinaryResponse.secure_url,
      };
    }

    // Create user
    const data = await DataModel.create(reqBody);

    return res.status(201).json({ message: "success", data });
  } catch (error) {
    console.error("UserCreateService Error:", error);
    return res.status(500).json({ message: "error", error: error.message || error });
  }
};

module.exports = UserCreateService;
