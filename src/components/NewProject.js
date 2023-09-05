import { TextField, Button } from "@mui/material";
import "./NewProject.css";

const NewProject = () => {
  return (
    <div className="new-meeting1">
      <div className="new-meeting-child" />
      <div className="new-meetings">New Meetings</div>
      <TextField
        className="new-meeting-item"
        sx={{ width: 547.0919189453125 }}
        color="primary"
        variant="filled"
        type="text"
        label="Topic"
        placeholder="Topic"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="new-meeting-inner"
        sx={{ width: 263.3787536621094 }}
        color="primary"
        variant="filled"
        type="number"
        label="Day"
        placeholder="Day"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="new-meeting-child1"
        sx={{ width: 547.0919189453125 }}
        color="primary"
        variant="filled"
        type="text"
        label="Timing "
        placeholder="hh:mm"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="new-meeting-child2"
        sx={{ width: 264.3470764160156 }}
        color="primary"
        variant="filled"
        type="number"
        label="Month"
        placeholder="Month"
        size="medium"
        margin="none"
        required
      />
      <img className="image-18-icon" alt="" src="/image-18@2x.png" />
      <img className="image-22-icon" alt="" src="/image-22@2x.png" />
      <img className="image-20-icon" alt="" src="/image-20@2x.png" />
      <img className="image-21-icon" alt="" src="/image-21@2x.png" />
      <Button
        className="save-button2"
        sx={{ width: 92 }}
        variant="contained"
        color="primary"
        href="/profile-employee"
      >
        Save
      </Button>
      <TextField
        className="new-meeting-child3"
        sx={{ width: 543 }}
        color="primary"
        variant="filled"
        type="text"
        label="Participants"
        placeholder="Participants"
        size="medium"
        margin="none"
      />
    </div>
  );
};

export default NewProject;
