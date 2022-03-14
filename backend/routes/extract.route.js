const express = require("express");
const router = express.Router();
const multer = require("multer");
const { extractTextFromFile } = require("../contollers/extract.controller");

const upload = multer();

/* POST :  extract text from files. */
router.post("/", upload.single("pdfFile"), extractTextFromFile);

module.exports = router;
