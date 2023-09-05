import { useMemo } from "react";
import "./Project1.css";

const Project1 = ({ checkbox1Left, clientDemoBackgroundColor }) => {
  const project1Style = useMemo(() => {
    return {
      left: checkbox1Left,
    };
  }, [checkbox1Left]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: clientDemoBackgroundColor,
    };
  }, [clientDemoBackgroundColor]);

  return (
    <div className="project11" id="Project sum" style={project1Style}>
      <div className="project-name-wrapper8" style={frameDiv1Style}>
        <div className="project-name11">Project Name</div>
      </div>
      <div className="client-demo33" id="project info">
        <div className="client-demo-child63" />
        <div className="benefits44">
          <span className="benefits45">Benefits</span>:
        </div>
        <div className="client-name33">Client Name</div>
        <div className="location33">{`location: `}</div>
        <img
          className="client-demo-child64"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <img className="checkbox-1-icon33" alt="" src="/checkbox-1@2x.png" />
      </div>
      <div className="client-demo34">
        <div className="client-demo-child63" />
        <div className="benefits44">
          <span className="benefits45">Contributions</span>:
        </div>
        <div className="client-name33">Employee 1</div>
        <div className="location33">Position:</div>
        <img
          className="client-demo-child66"
          alt=""
          src="/rectangle-191@2x.png"
        />
        <img className="checkbox-1-icon33" alt="" src="/checkbox-11@2x.png" />
      </div>
      <div className="client-demo35">
        <div className="client-demo-child63" />
        <div className="benefits44">
          <span className="benefits45">Contributions</span>:
        </div>
        <div className="client-name33">Employee 2</div>
        <div className="location33">Position:</div>
        <img
          className="client-demo-child66"
          alt=""
          src="/rectangle-192@2x.png"
        />
        <img className="checkbox-1-icon33" alt="" src="/checkbox-12@2x.png" />
      </div>
    </div>
  );
};

export default Project1;
