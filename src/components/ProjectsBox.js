import { Button } from "@mui/material";
import "./ProjectsBox.css";

const ProjectsBox = () => {
  return (
    <div className="projects-box">
      <div className="projects-box-child" />
      <div className="projects-box-item" />
      <div className="my-projects">My Projects</div>
      <div className="project-1">
        <div className="box">
          <div className="box-child" />
        </div>
        <div className="project-1-name">{`Project 1 name `}</div>
      </div>
      <div className="project-2">
        <div className="box1">
          <div className="box-item" />
        </div>
        <div className="project-2-name">Project 2 name</div>
      </div>
      <div className="project-3">
        <div className="box2">
          <div className="box-child" />
        </div>
        <div className="project-3-name">Project 3 name</div>
      </div>
      <Button
        className="add-project2"
        sx={{ width: 118.57142639160156 }}
        variant="contained"
        color="primary"
        href="/frame-13"
      >
        ADD
      </Button>
      <Button
        className="add-project3"
        sx={{ width: 115 }}
        variant="contained"
        color="primary"
        href="/frame-15"
      >
        View all
      </Button>
    </div>
  );
};

export default ProjectsBox;
