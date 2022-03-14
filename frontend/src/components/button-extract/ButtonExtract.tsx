import React from "react";
import { Button, styled } from "@mui/material";
import PropTypes from "prop-types";

const BootstrapButton = styled(Button)({
  boxShadow: "ButtonExtract",
  textTransform: "none",
  fontSize: 16,
  alignSelf: "center",
  width: "16rem",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
});

const ButtonExtract = ({ disabled, message, onClick }: any) =>
   (
       <div>
      <Button
        disabled={disabled}
        onClick={() => onClick()}
        variant="contained"
        size="large"
      >
        {message}
      </Button>
    </div>
  );
ButtonExtract.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  message: PropTypes.string,
};
export default ButtonExtract;
