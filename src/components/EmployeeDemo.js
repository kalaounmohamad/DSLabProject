import { useMemo } from "react";
import "./EmployeeDemo.css";

const EmployeeDemo = ({ propLeft, propWidth, propTop }) => {
  const employeeDemoStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
      top: propTop,
    };
  }, [propLeft, propWidth, propTop]);

  return (
    <div className="employee-demo6" style={employeeDemoStyle}>
      <img className="employee-demo-child4" alt="" src="/ellipse-2.svg" />
      <img className="image-7-icon6" alt="" src="/image-7@2x.png" />
      <div className="name-lastname6">Name LastName</div>
      <div className="position6">Position</div>
      <div className="streak-of-projects6">Streak of Projects</div>
      <div className="email-address6">Email Address</div>
      <div className="phone-number6">Phone Number</div>
      <img className="image-8-icon6" alt="" src="/image-8@2x.png" />
      <img className="image-9-icon6" alt="" src="/image-9@2x.png" />
      <img className="image-10-icon6" alt="" src="/image-10@2x.png" />
      <img className="image-11-icon6" alt="" src="/image-11@2x.png" />
      <img className="image-12-icon6" alt="" src="/image-12@2x.png" />
    </div>
  );
};

export default EmployeeDemo;
