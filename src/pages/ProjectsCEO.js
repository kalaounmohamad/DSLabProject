import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Project1 from "../components/Project1";
import "./ProjectsCEO.css";

const ProjectsCEO = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  const onMenuBurger21Click = useCallback(() => {
    navigate("/navigate-ceo");
  }, [navigate]);

  return (
    <div className="projects-ceo">
      <div className="organize-your-co-parent" onClick={onFrameContainerClick}>
        <div className="organize-your-co1">Organize your co.</div>
        <Link className="employees" to="/employees-ceo">
          <img className="employees-child" alt="" src="/polygon-3.svg" />
          <div className="label4">Employees</div>
        </Link>
        <div className="employees1">
          <img className="employees-child" alt="" src="/polygon-3.svg" />
          <div className="label4">Projects</div>
        </div>
        <Link className="employees2" to="/meetings-ceo">
          <img className="employees-child" alt="" src="/polygon-3.svg" />
          <div className="label4">Meetings</div>
        </Link>
        <Link className="employees3" to="/profile-ceo">
          <img className="employees-child" alt="" src="/polygon-3.svg" />
          <div className="label4">Profile</div>
        </Link>
        <div className="line-div" />
        <div className="frame-child10" />
        <div className="frame-child11" />
        <img className="line-icon" alt="" src="/line-5.svg" />
        <img
          className="menu-burger-2-1"
          alt=""
          src="/menuburger-2-1@2x.png"
          onClick={onMenuBurger21Click}
        />
      </div>
      <Project1 />
      <Project1 checkbox1Left="unset" clientDemoBackgroundColor="#1d67d6" />
      <Project1 checkbox1Left="unset" clientDemoBackgroundColor="#d61dad" />
      <div className="project9">
        <div className="project-name-wrapper6">
          <div className="project-name9">Project Name</div>
        </div>
        <div className="client-demo27">
          <div className="client-demo-child51" />
          <div className="benefits36">
            <span className="benefits37">Benefits</span>:
          </div>
          <div className="client-name27">Client Name</div>
          <div className="location27">{`location: `}</div>
          <img
            className="client-demo-child52"
            alt=""
            src="/rectangle-19@2x.png"
          />
          <img className="checkbox-1-icon27" alt="" src="/checkbox-1@2x.png" />
        </div>
        <div className="client-demo28">
          <div className="client-demo-child51" />
          <div className="benefits36">
            <span className="benefits37">Contributions</span>:
          </div>
          <div className="client-name27">Employee 1</div>
          <div className="location27">Position:</div>
          <img
            className="client-demo-child54"
            alt=""
            src="/rectangle-191@2x.png"
          />
          <img className="checkbox-1-icon27" alt="" src="/checkbox-11@2x.png" />
        </div>
        <div className="client-demo29">
          <div className="client-demo-child51" />
          <div className="benefits36">
            <span className="benefits37">Contributions</span>:
          </div>
          <div className="client-name27">Employee 2</div>
          <div className="location27">Position:</div>
          <img
            className="client-demo-child54"
            alt=""
            src="/rectangle-192@2x.png"
          />
          <img className="checkbox-1-icon27" alt="" src="/checkbox-12@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCEO;
