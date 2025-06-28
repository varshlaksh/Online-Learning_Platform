const express = require("express");
const router = express.Router();
const { registerUser, enrollInCourse } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/enroll", enrollInCourse);

module.exports = router;
