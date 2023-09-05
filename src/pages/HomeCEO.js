import { useCallback } from "react";
import { Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HomeCEO.css";

const HomeCEO = () => {
  const navigate = useNavigate();

  const onMenuBurger21Click = useCallback(() => {
    navigate("/navigate-ceo");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="home-ceo">
      <img className="deisgn-icon" alt="" src="/deisgn@2x.png" />
      <img className="design-icon" alt="" src="/design@2x.png" />
      <div className="heading">
        <div className="welcome">{`Welcome! `}</div>
        <div className="ceo1">CEO</div>
        <div className="image-5default">
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
        </div>
      </div>
      <div className="welcome-to-your">{`Welcome to your virtual office, where you can find all the information you need to fill your report and assess employees and clients’ satisfaction. `}</div>
      <IconButton
        className="menu-burger-2-12"
        color="primary"
        onClick={onMenuBurger21Click}
      >
        <Icon>arrow_forward_sharp</Icon>
      </IconButton>
      <img className="clockvariant4-icon" alt="" />
      <img className="clock-icon" alt="" src="/clock.svg" />
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <div className="back1" onClick={onBackContainerClick}>
        <div className="back-child" />
        <div className="back-to-login1">Back to login page</div>
      </div>
    </div>
  );
};

export default HomeCEO;
