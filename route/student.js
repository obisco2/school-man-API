const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student")

router.post("/register",studentController.registerstudents);
router.post("/login",studentController.loginStudents);
router.get('/profile', studentController.getstudentprofile);
router.post('/enroll-course', studentController.enrollcourse);
router.delete('/drop-course', studentController.deletecourse);

module.exports = router;