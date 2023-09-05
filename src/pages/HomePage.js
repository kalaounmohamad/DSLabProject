import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onComponent1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="home-page">
      <div className="vector-parent">
        <img className="frame-child" alt="" src="/polygon-5.svg" />
        <img className="frame-item" alt="" src="/polygon-4.svg" />
        <div className="grow-your-business-container">
          <span className="grow-your-business-container1">
            <p className="grow-your-business">
              <span className="grow">
                <span className="grow1">Grow</span>
                <span className="span">{` `}</span>
              </span>
              <span className="your">your</span>
              <span className="span1">{` `}</span>
              <span>{`business `}</span>
            </p>
            <p className="with-us">with us!</p>
          </span>
        </div>
        <div className="allow-organize-your-container">
          <span className="grow-your-business-container1">
            <p className="grow-your-business">
              <span className="allow">{`Allow `}</span>
              <span className="organize-your-co">Organize your co.</span>
              <span> to bring the work to your screen!</span>
            </p>
          </span>
        </div>
        <Button
          className="component-1"
          sx={{ width: 285 }}
          variant="contained"
          color="primary"
          onClick={onComponent1Click}
        >
          click to login
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
