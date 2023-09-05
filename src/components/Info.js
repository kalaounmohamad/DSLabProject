import { useMemo } from "react";
import { TextField } from "@mui/material";
import "./Info.css";

const Info = ({ rectangle22, label, label1, propBottom, propLeft }) => {
  const infoStyle = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
    };
  }, [propBottom, propLeft]);

  return (
    <TextField
      className="info4"
      sx={{ width: 209.578125 }}
      color="primary"
      variant="standard"
      type="text"
      label="First Name"
      placeholder="First Name"
      size="medium"
      margin="none"
      style={infoStyle}
    />
  );
};

export default Info;
