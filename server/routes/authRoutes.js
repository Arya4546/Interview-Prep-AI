const express = require("express");
const {registerUser, loginUser, getUserProfile} = require("../controllers/authController");
const{protect} = require("../middleware/authMiddleware");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");


//Auth Routes

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: "Please upload a file" });
}
const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
res.status(200).json({ imageUrl });
});
module.exports = router;
