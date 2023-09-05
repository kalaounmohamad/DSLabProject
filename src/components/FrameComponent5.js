import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  navTop,
  onFrameContainerClick,
  onMenuBurger21Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: navTop,
    };
  }, [navTop]);

  return (
    <div
      className="nav-wrapper"
      onClick={onFrameContainerClick}
      style={frameDivStyle}
    >
      <div className="nav">
        <div className="organize-your-co2">Organize your co.</div>
        <Link className="employees5" to="/employees-ceo">
          <img className="employees-child2" alt="" src="/polygon-3.svg" />
          <div className="label8">Employees</div>
        </Link>
        <Link className="employees6" to="/projects-ceo">
          <img className="employees-child2" alt="" src="/polygon-3.svg" />
          <div className="label8">Projects</div>
        </Link>
        <Link className="employees7" to="/meetings-ceo">
          <img className="employees-child2" alt="" src="/polygon-3.svg" />
          <div className="label8">Meetings</div>
        </Link>
        <a className="employees8">
          <img className="employees-child2" alt="" src="/polygon-3.svg" />
          <div className="label8">Profile</div>
        </a>
        <div className="nav-child" />
        <div className="nav-item" />
        <div className="nav-inner" />
        <img className="nav-child1" alt="" src="/line-5.svg" />
        <Link
          className="menu-burger-2-13"
          to="/home-ceo"
          onClick={onMenuBurger21Click}
        />
      </div>
    </div>
  );
};

export default FrameComponent5;
