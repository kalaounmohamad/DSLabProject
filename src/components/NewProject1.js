import { TextField } from "@mui/material";
import "./NewProject1.css";

const NewProject1 = () => {
  return (
    <div className="new-project1">
      <div className="new-project-child" />
      <div className="new-project2">New Project</div>
      <TextField
        className="new-project-item"
        sx={{ width: 547.0919189453125 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Benefits"
        placeholder="Benefits"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="new-project-inner"
        sx={{ width: 263.3787536621094 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Client"
        placeholder="Client Name"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className="new-project-child1"
        sx={{ width: 547.0919189453125 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Contribution"
        placeholder="Contribution"
        size="medium"
        margin="none"
      />
      <TextField
        className="new-project-child2"
        sx={{ width: 264.3470764160156 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Location"
        placeholder="location"
        size="medium"
        margin="none"
        required
      />
      <img className="image-18-icon1" alt="" src="/image-18@2x.png" />
      <img className="image-19-icon" alt="" src="/image-19@2x.png" />
      <img className="image-16-icon" alt="" src="/image-16@2x.png" />
      <img className="image-17-icon" alt="" src="/image-17@2x.png" />
    </div>
  );
};

export default NewProject1;
