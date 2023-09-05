import Info from "./Info";
import "./PersonalInfoBox.css";

const PersonalInfoBox = () => {
  return (
    <div className="personal-info-box">
      <div className="personal-info-box-child" />
      <img className="personal-info-box-item" alt="" src="/ellipse-4@2x.png" />
      <div className="username">{`Username `}</div>
      <Info />
      <Info propBottom="unset" propLeft="calc(50% - 223px)" />
      <Info propBottom="unset" propLeft="calc(50% + 31px)" />
      <Info propBottom="unset" propLeft="calc(50% + 28px)" />
      <div className="email-notification-tick">
        <img className="check-1-icon" alt="" src="/check-1@2x.png" />
        <div className="receive-email-notifications">
          Receive email notifications
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoBox;
