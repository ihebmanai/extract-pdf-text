import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ReactQuill from "react-quill";

import PropTypes from "prop-types";

const PdfViewerModal = ({ isOpen, fileName, content, onClose }: any) => {
  const [open, setOpen] = React.useState(false);

  const closeHandler = () => {};
  setOpen(false);
  onClose();

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog
      open={open}
      onClose={() => closeHandler()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" color={"#124172"}>
        {"Extracted Text"} : {fileName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <ReactQuill value={content} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeHandler()} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
PdfViewerModal.propTypes = {
  isOpen: PropTypes.bool,
  fileName: PropTypes.string,
  content: PropTypes.string,
  onClose: PropTypes.func,
};

export default PdfViewerModal;
