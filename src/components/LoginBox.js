import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./LoginBox.css";

const LoginBox = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/profile-employee");
  }, [navigate]);

  return (
    <div className="login-box">
      <img className="login-box-child" alt="" src="/rectangle-17.svg" />
      <div className="login1">{`Login `}</div>
      <div className="welcome-back">welcome back!</div>
      <TextField
        className="login-box-item"
        sx={{ width: 518 }}
        color="primary"
        variant="standard"
        type="email"
        label="Enter your Email Address"
        placeholder="Email"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="login-box-inner"
        sx={{ width: 518 }}
        color="primary"
        variant="standard"
        type="text"
        name="Password"
        label="Enter your Password"
        placeholder="Password"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="login-box-child1"
        sx={{ width: 518 }}
        color="primary"
        variant="standard"
        type="text"
        label="Company Name"
        placeholder="Company name"
        size="medium"
        margin="none"
      />
      <div className="if-you-are">If you are visiting for the first time</div>
      <Button
        className="group-button"
        sx={{ width: 106.73979187011719 }}
        variant="text"
        name="go to sign in"
        color="primary"
        href="/signup"
      >
        click here
      </Button>
      <div className="image-24" />
      <img className="image-25-icon" alt="" src="/image-25@2x.png" />
      <img className="image-26-icon" alt="" src="/image-26@2x.png" />
      <img className="image-27-icon" alt="" src="/image-27@2x.png" />
      <Button
        className="login-box-child2"
        sx={{ width: 163 }}
        variant="contained"
        name="CEO Login"
        color="primary"
        href="/home-ceo"
        target="_blank"
        onClick={onFrameButtonClick}
      >
        CEO Login
      </Button>
      <Button
        className="login-box-child3"
        sx={{ width: 174 }}
        variant="contained"
        name="Employee Login"
        color="primary"
        href="/frame-12"
        onClick={onFrameButton1Click}
      >
        Employee Login
      </Button>
    </div>
  );
};

export default LoginBox;
