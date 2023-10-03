const express = require("express");
const router = express.Router()
const registerfn = require("../controllers/admin")

router.post("/register",registerfn.registerAdmin);
router.post("/login",registerfn.loginAdmin);


module.exports = router;