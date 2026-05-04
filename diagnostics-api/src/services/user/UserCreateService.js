const cloudinary = require("../../utility/cloudinary");
const hashedPassword = require("../../utility/hashedPassword");
const streamifier = require("streamifier");

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "Users" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

const UserCreateService = async (req, res, DataModel) => {
  try {
    let reqBody = req.body;

    const existingUser = await DataModel.findOne({ email: reqBody.email });
    if (existingUser) {
      return res.status(409).json({ message: "fail", data: "Email Already Exists" });
    }

    if (!reqBody.password) {
      return res.status(400).json({ message: "fail", data: "Password is required" });
    }

    reqBody.password = await hashedPassword(reqBody.password);

    // ✅ FIXED IMAGE UPLOAD (Vercel-safe)
    if (req.file) {
      const cloudinaryResponse = await uploadToCloudinary(req.file.buffer);

      reqBody.image = {
        public_id: cloudinaryResponse.public_id,
        image_url: cloudinaryResponse.secure_url,
      };
    }

    const data = await DataModel.create(reqBody);

    return res.status(201).json({ message: "success", data });

  } catch (error) {
    console.error("UserCreateService Error:", error);
    return res.status(500).json({
      message: "error",
      error: error.message || error,
    });
  }
};

module.exports = UserCreateService;