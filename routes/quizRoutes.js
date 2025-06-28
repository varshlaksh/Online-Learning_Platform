const express = require("express");
const router = express.Router();
const { createQuiz, getQuizByCourse } = require("../controllers/quizController");

router.post("/create", createQuiz);
router.get("/:courseId", getQuizByCourse);

module.exports = router;
