import NewProject from "../components/NewProject";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <div className="new-meeting">
      <div className="background">
        <div className="background-child" />
        <div className="background-item" />
        <div className="background-inner" />
        <div className="background-child1" />
        <div className="background-child2" />
        <div className="background-child3" />
      </div>
      <NewProject />
    </div>
  );
};

export default FrameComponent2;
