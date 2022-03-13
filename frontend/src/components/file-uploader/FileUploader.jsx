import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./FileUploader.css";
import uploadImg from "../../assets/cloud-upload-regular-240.png";

const FileUploader = (props) => {
  const wrapperRef = useRef(null);

  const onDragEnter = () => wrapperRef?.current?.classList.add("dragover");

  const onDragLeave = () => wrapperRef?.current?.classList.remove("dragover");

  const onDrop = () => wrapperRef?.current?.classList.remove("dragover");

  const onFileDrop = (e: Event) => {
    const newFile = e.target.files[0];
    props.OnFileUploaded(newFile);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop your files here</p>
          <input
            type="file"
            value=""
            accept="image/jpeg,image/gif,image/png,application/pdf"
            onChange={onFileDrop}
          />
        </div>
      </div>
    </>
  );
};

FileUploader.propTypes = {
  OnFileUploaded: PropTypes.func,
};

export default FileUploader;
