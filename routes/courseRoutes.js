const express = require("express");
const router = express.Router();
const { createCourse, getCourses } = require("../controllers/courseController");

router.post("/create", createCourse);
router.get("/", getCourses);

module.exports = router;
