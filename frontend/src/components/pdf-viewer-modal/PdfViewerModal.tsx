import React, {useEffect} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import PropTypes from "prop-types";
import JoditEditor from "jodit-react";

const PdfViewerModal = ({ isOpen, fileName, content, onClose }: any) => {
  const [open, setOpen] = React.useState(false);
    useEffect(()=> {
      setOpen(isOpen)
    },  [isOpen])
  const closeHandler = () => {
    setOpen(false);
    onClose();
  };


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
          <JoditEditor
              value={content}
          />

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
