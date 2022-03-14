const pdf = require("pdf-parse");
const { createWorker } = require("tesseract.js");

const worker = createWorker();

/**
 * a method that takes file buffer and extract text from PDF file
 * @param buffer file buffer
 * @returns {Promise<{metadata: null, text: string, numpages: number, version: null, numrender: number, info: null}>}
 */
const extractTextFromPDF = async (buffer) => {
  return await pdf(buffer);
};

/**
 * a method that takes file buffer and extract text from image using OCR
 * @param buffer file buffer
 * @returns {Promise<string>} extracted image text content
 */
const extractTextFromImage = async (buffer) => {
  //load tesseract OCR with English and German languages
  await worker.load();
  await worker.loadLanguage("eng+deu");
  await worker.initialize("eng+deu");
  const {
    data: { text },
  } = await worker.recognize(buffer);
  return text;
};

module.exports = {
  extractTextFromImage,
  extractTextFromPDF,
};
