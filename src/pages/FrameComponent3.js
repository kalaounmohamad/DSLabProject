import { useCallback } from "react";
import { Button } from "@mui/material";
import NewProject1 from "../components/NewProject1";
import { useNavigate } from "react-router-dom";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onSaveButtonClick = useCallback(() => {
    navigate("/profile-employee");
  }, [navigate]);

  return (
    <div className="new-project">
      <div className="background1">
        <div className="background-child4" />
        <div className="background-child5" />
        <div className="background-child6" />
        <div className="background-child7" />
        <div className="background-child8" />
        <div className="background-child9" />
      </div>
      <NewProject1 />
      <Button
        className="save-button"
        sx={{ width: 92 }}
        variant="contained"
        color="primary"
        onClick={onSaveButtonClick}
      >
        Save
      </Button>
    </div>
  );
};

export default FrameComponent3;
