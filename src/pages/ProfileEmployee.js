import { useCallback } from "react";
import { Button } from "@mui/material";
import PersonalInfoBox from "../components/PersonalInfoBox";
import ProjectsBox from "../components/ProjectsBox";
import MeetingsBox from "../components/MeetingsBox";
import { useNavigate } from "react-router-dom";
import "./ProfileEmployee.css";

const ProfileEmployee = () => {
  const navigate = useNavigate();

  const onBackContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="profile-employee">
      <div className="background2">
        <div className="background-child10" />
        <div className="background-child11" />
        <div className="background-child12" />
        <div className="background-child13" />
      </div>
      <div className="my-profile">My Profile</div>
      <PersonalInfoBox />
      <ProjectsBox />
      <MeetingsBox />
      <Button
        className="save-button1"
        sx={{ width: 79 }}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
      <div className="back" onClick={onBackContainerClick}>
        <div className="back-to-login">Back to login page</div>
      </div>
    </div>
  );
};

export default ProfileEmployee;
