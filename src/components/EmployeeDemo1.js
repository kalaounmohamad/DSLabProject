import { useMemo } from "react";
import "./EmployeeDemo1.css";

const EmployeeDemo1 = ({ propLeft }) => {
  const employeeDemo1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="employee-demo8" style={employeeDemo1Style}>
      <img className="employee-demo-child6" alt="" src="/ellipse-2.svg" />
      <img className="image-7-icon8" alt="" src="/image-7@2x.png" />
      <div className="name-lastname8">Name LastName</div>
      <div className="position8">Position</div>
      <div className="streak-of-projects8">Streak of Projects</div>
      <div className="email-address8">Email Address</div>
      <div className="phone-number8">Phone Number</div>
      <img className="image-8-icon8" alt="" src="/image-8@2x.png" />
      <img className="image-9-icon8" alt="" src="/image-9@2x.png" />
      <img className="image-10-icon8" alt="" src="/image-10@2x.png" />
      <img className="image-11-icon8" alt="" src="/image-11@2x.png" />
      <img className="image-12-icon8" alt="" src="/image-12@2x.png" />
    </div>
  );
};

export default EmployeeDemo1;
