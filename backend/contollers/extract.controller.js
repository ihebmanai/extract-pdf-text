const {
  extractTextFromImage,
  extractTextFromPDF,
} = require("../service/extract.service");

/**
 * controller method that checks if the file extension is PDF or image and extracts its content
 * @param req Request
 * @param res Result
 * @returns {Promise<*>}
 */
const extractTextFromFile = async (req, res) => {
  let extractedText = "";
  const mimeType = req.file?.mimetype;

  if (mimeType === "application/pdf") {
    extractedText = (await extractTextFromPDF(req.file?.buffer)).text;
  } else {
    extractedText = await extractTextFromImage(req.file?.buffer);
  }
  return res.json(extractedText).status(200);
};

module.exports = { extractTextFromFile };
