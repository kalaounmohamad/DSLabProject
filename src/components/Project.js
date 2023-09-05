import { useMemo } from "react";
import "./Project.css";

const Project = ({ frame11Top, frame11Left, locationDisplay }) => {
  const projectStyle = useMemo(() => {
    return {
      top: frame11Top,
      left: frame11Left,
    };
  }, [frame11Top, frame11Left]);

  const clientNameStyle = useMemo(() => {
    return {
      display: locationDisplay,
    };
  }, [locationDisplay]);

  return (
    <div className="project10" id="proj" style={projectStyle}>
      <div className="project-name-wrapper7">
        <div className="project-name10">Project Name</div>
      </div>
      <div className="client-demo30">
        <div className="client-demo-child57" />
        <div className="benefits40">
          <span className="benefits41">Benefits</span>:
        </div>
        <div className="client-name30">Client Name</div>
        <div className="location30">{`location: `}</div>
        <img
          className="client-demo-child58"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <img className="checkbox-1-icon30" alt="" src="/checkbox-1@2x.png" />
      </div>
      <div className="client-demo31">
        <div className="client-demo-child57" />
        <div className="benefits40">
          <span className="benefits41">Contributions</span>:
        </div>
        <div className="client-name30" style={clientNameStyle}>
          Employee 1
        </div>
        <div className="location30">Position:</div>
        <img
          className="client-demo-child60"
          alt=""
          src="/rectangle-191@2x.png"
        />
        <img className="checkbox-1-icon30" alt="" src="/checkbox-11@2x.png" />
      </div>
      <div className="client-demo32">
        <div className="client-demo-child57" />
        <div className="benefits40">
          <span className="benefits41">Contributions</span>:
        </div>
        <div className="client-name30">Employee 2</div>
        <div className="location30">Position:</div>
        <img
          className="client-demo-child60"
          alt=""
          src="/rectangle-192@2x.png"
        />
        <img className="checkbox-1-icon30" alt="" src="/checkbox-12@2x.png" />
      </div>
    </div>
  );
};

export default Project;
