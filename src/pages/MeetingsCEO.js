import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import "./MeetingsCEO.css";

const MeetingsCEO = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  const onMenuBurger21Click = useCallback(() => {
    navigate("/navigate-ceo");
  }, [navigate]);

  return (
    <div className="meetings-ceo">
      <div className="meeting-page">
        <FrameComponent5
          navTop="0px"
          onFrameContainerClick={onFrameContainerClick}
          onMenuBurger21Click={onMenuBurger21Click}
        />
        <div className="weekly-meetings">{`Weekly Meetings `}</div>
      </div>
      <div className="meeting13" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting14" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-2311@2x.png" />
      </div>
      <div className="meeting15" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting16" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting17" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-2311@2x.png" />
      </div>
      <div className="meeting18" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting19" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting20" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-2311@2x.png" />
      </div>
      <div className="meeting21" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting22" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting23" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting24" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting25" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-2311@2x.png" />
      </div>
      <div className="meeting26" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting27" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-2311@2x.png" />
      </div>
      <div className="meeting28" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
      <div className="meeting29" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-2311@2x.png" />
      </div>
      <div className="meeting30" id="meeting sum">
        <img className="meeting-child10" alt="" src="/rectangle-371.svg" />
        <div className="meeting-1-at13">Meeting 1 at hh:mm on dd/mm</div>
        <img className="image-23-icon13" alt="" src="/image-231@2x.png" />
      </div>
    </div>
  );
};

export default MeetingsCEO;
