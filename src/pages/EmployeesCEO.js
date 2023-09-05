import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import EmployeeDemo from "../components/EmployeeDemo";
import EmployeeDemo2 from "../components/EmployeeDemo2";
import EmployeeDemo1 from "../components/EmployeeDemo1";
import "./EmployeesCEO.css";

const EmployeesCEO = () => {
  const navigate = useNavigate();

  const onMenuBurger21Click = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  return (
    <div className="employees-ceo">
      <FrameComponent6 />
      <Link
        className="menu-burger-2-11"
        to="/home-ceo"
        onClick={onMenuBurger21Click}
      />
      <EmployeeDemo />
      <EmployeeDemo2 />
      <EmployeeDemo
        propLeft="1165px"
        propWidth="calc(100% - 1632px)"
        propTop="calc(50% - 416px)"
      />
      <div className="employee-demo">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <EmployeeDemo
        propLeft="577px"
        propWidth="calc(100% - 1632px)"
        propTop="calc(50% - 96px)"
      />
      <div className="employee-demo1">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <EmployeeDemo1 />
      <div className="employee-demo2">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <EmployeeDemo1 propLeft="1164px" />
      <div className="employee-demo3">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <div className="employee-demo4">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <div className="employee-demo5">
        <img className="employee-demo-child" alt="" src="/ellipse-2.svg" />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="name-lastname">Name LastName</div>
        <div className="position">Position</div>
        <div className="streak-of-projects">Streak of Projects</div>
        <div className="email-address">Email Address</div>
        <div className="phone-number">Phone Number</div>
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      </div>
      <div className="employees-ceo-child" />
    </div>
  );
};

export default EmployeesCEO;
