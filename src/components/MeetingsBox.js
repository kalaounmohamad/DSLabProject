import { Button } from "@mui/material";
import "./MeetingsBox.css";

const MeetingsBox = () => {
  return (
    <div className="meetings-box">
      <div className="meetings-box-child" />
      <div className="meetings-box-item" />
      <div className="meetings">{`Meetings `}</div>
      <Button
        className="add-project4"
        sx={{ width: 138 }}
        variant="contained"
        color="primary"
        href="/frame-14"
      >
        ADD
      </Button>
      <Button
        className="add-project5"
        sx={{ width: 138 }}
        variant="contained"
        color="primary"
        href="/frame-16"
      >
        View all
      </Button>
      <div className="meeting32">
        <img className="image-14-icon" alt="" src="/image-14@2x.png" />
        <div className="time-0000-date">time: 00:00 date: dd/mm</div>
      </div>
      <div className="meeting33">
        <img className="image-14-icon" alt="" src="/image-14@2x.png" />
        <div className="time-0000-date">time: 00:00 date: dd/mm</div>
      </div>
    </div>
  );
};

export default MeetingsBox;
