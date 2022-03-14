import "./PdfContentExtractor.css";
import "react-quill/dist/quill.snow.css"; // CommonJS
import "react-quill/dist/quill.snow.css"; // ES6

import React, { useState } from "react";
import FileUploader from "../file-uploader/FileUploader";
import ButtonExtract from "../button-extract/ButtonExtract";
import Loader from "../loader/Loader";
import PdfViewerModal from "../pdf-viewer-modal/PdfViewerModal";
import { extractTextFromFile } from "../../services/extract.service";

const PdfContentExtractor = () => {
  const [text, setText] = useState("");
  const [buttonMessage, setButtonMessage] = useState("No uploaded file");
  const [isLoaderDisplayed, setIsLoaderDisplayed] = useState(false);
  const [isPdfViewerDisplayed, setIsPdfViewerDisplayed] = useState(false);
  const [isFileReady, setIsFileReady] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [file, setFile] = useState<{ name: string }>({ name: "" });

  const uploadFileHandler = (file: any) => {
    setFile(file);
    setButtonMessage("File ready to extract text");
    setDisabled(false);
  };

  const extractPdfToTextHandler = () => {
    //if file is ready display the content in a dialog
    if (isFileReady) {
      setIsPdfViewerDisplayed(true);
      return;
    }
    extractPdfToText(file);
  };

  const resetValues = () => {
    setButtonMessage("No uploaded file");
    setIsPdfViewerDisplayed(false);
    setDisabled(true);
  };

  const extractPdfToText = (fileToExtract: any) => {
    const fileFormData: FormData = new FormData();
    fileFormData.append("pdfFile", fileToExtract);
    extractTextFromFile(fileFormData)
      .then((extractedFile) => {
        setButtonMessage("Your file is ready");
        setIsFileReady(true);
        setText(extractedFile.data);
        setIsLoaderDisplayed(false);
        setIsFileReady(false)
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="PdfContentExtractor">
      <FileUploader OnFileUploaded={(file: any) => uploadFileHandler(file)} />
      <div>
        {!isLoaderDisplayed ? (
          <ButtonExtract
            disabled={disabled}
            message={buttonMessage}
            onClick={() => extractPdfToTextHandler()}
          />
        ) : (
          <Loader />
        )}
      </div>
      <PdfViewerModal
        isOpen={isPdfViewerDisplayed}
        content={text}
        fileName={file?.name}
        onClose={() => resetValues()}
      />
    </div>
  );
};

export default PdfContentExtractor;
