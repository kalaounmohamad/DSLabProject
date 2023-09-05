import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="signup">
      <img className="signup-child" alt="" src="/ellipse-18.svg" />
      <img className="signup-item" alt="" src="/ellipse-18.svg" />
      <div className="instance-parent">
        <TextField
          className="frame-inner"
          sx={{ width: 272 }}
          color="primary"
          variant="standard"
          type="text"
          name="Name"
          id="name"
          label="Name"
          placeholder="Name"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className="group-textfield"
          sx={{ width: 347 }}
          color="primary"
          variant="standard"
          type="email"
          label="Email "
          placeholder="Email"
          size="medium"
          margin="none"
        />
        <TextField
          className="frame-child1"
          sx={{ width: 274 }}
          color="primary"
          variant="standard"
          type="text"
          name="position"
          id="position"
          label="Position"
          placeholder="Position"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className="frame-child2"
          sx={{ width: 353 }}
          color="primary"
          variant="standard"
          type="number"
          label="Phone"
          placeholder="Phone "
          size="medium"
          margin="none"
          required
        />
        <TextField
          className="frame-child3"
          sx={{ width: 274 }}
          color="primary"
          variant="standard"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <Icon>visibility</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          name="Password"
          label="Password"
          placeholder="Password"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className="frame-child4"
          sx={{ width: 353 }}
          color="primary"
          variant="standard"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <Icon>visibility</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          name="confirm pass"
          id="confirm pass"
          label="Confirm Password"
          placeholder="Confirm Password"
          size="medium"
          margin="none"
          required
        />
        <div className="employee">Employee</div>
        <div className="ceo">CEO</div>
        <FormControlLabel
          className="check-box"
          label=""
          labelPlacement="end"
          control={
            <Checkbox
              name="CEO check"
              id="ceo check"
              color="primary"
              required
              size="medium"
            />
          }
          id="ceo check"
        />
        <FormControlLabel
          className="check-box1"
          label=""
          labelPlacement="end"
          control={
            <Checkbox
              name="Employee check"
              id="employee check"
              color="primary"
              required
              size="medium"
            />
          }
          id="employee check"
        />
        <FormControlLabel
          className="check-box2"
          label=""
          labelPlacement="end"
          control={
            <Checkbox
              name="allow"
              id="allow"
              color="primary"
              required
              size="medium"
            />
          }
          id="allow"
        />
        <div className="allow-organize-your">
          Allow Organize your co. to send you emails and notification
        </div>
        <div className="sign-up">Sign Up</div>
        <div className="lets-get-all">
          Let’s get all your required setup information and get started!
        </div>
        <Button
          className="frame-button"
          sx={{ width: 137 }}
          variant="contained"
          name="Create acc"
          id="create"
          color="primary"
          href="/login"
          onClick={onFrameButtonClick}
        >
          Create
        </Button>
        <TextField
          className="frame-child5"
          sx={{ width: 272 }}
          color="primary"
          variant="standard"
          type="text"
          label="Position"
          placeholder="Position"
          size="medium"
          margin="none"
          required
        />
        <img className="ellipse-icon" alt="" src="/ellipse-18.svg" />
      </div>
      <img className="signup-inner" alt="" src="/ellipse-18.svg" />
      <img className="signup-child1" alt="" src="/ellipse-18.svg" />
      <img className="signup-child2" alt="" src="/ellipse-181.svg" />
    </div>
  );
};

export default Signup;
