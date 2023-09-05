import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import "./ProfileCEO.css";

const ProfileCEO = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  const onMenuBurger21Click = useCallback(() => {
    navigate("/navigate-ceo");
  }, [navigate]);

  return (
    <div className="profile-ceo">
      <FrameComponent5
        onFrameContainerClick={onFrameContainerClick}
        onMenuBurger21Click={onMenuBurger21Click}
      />
      <img className="profile-ceo-child" alt="" src="/ellipse-3@2x.png" />
      <div className="add-profile">
        <img className="image-13-icon" alt="" src="/image-13@2x.png" />
      </div>
      <TextField
        className="info"
        sx={{ width: 483 }}
        color="primary"
        variant="standard"
        multiline
        label="Username"
        placeholder="Username"
        margin="none"
      />
      <div className="info1">
        <TextField
          className="info-child"
          sx={{ width: 483 }}
          color="primary"
          variant="standard"
          multiline
          label="Password"
          placeholder="Password"
          margin="none"
        />
        <div className="label">Password</div>
        <div className="label1">Password</div>
      </div>
      <div className="info2">
        <TextField
          className="info-child"
          sx={{ width: 483 }}
          color="primary"
          variant="standard"
          multiline
          label="Position"
          placeholder="Position"
          margin="none"
        />
        <div className="label">Position</div>
        <div className="label1">Position</div>
      </div>
      <TextField
        className="info3"
        sx={{ width: 483 }}
        color="primary"
        variant="standard"
        type="number"
        placeholder="Number"
        helperText="Phone Number"
        size="medium"
        margin="none"
      />
      <button className="update-info-ceo">
        <button className="update-info-ceo-child" />
        <div className="update-profile">Update Profile</div>
      </button>
      <div className="new-page" />
      <div className="new-page1" />
      <div className="new-page1" />
      <div className="new-page1" />
    </div>
  );
};

export default ProfileCEO;
