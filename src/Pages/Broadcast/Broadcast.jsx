import "./Broadcast.css";
import Header from "../../Components/Header/Header";
import { useState } from "react";

const Broadcast = () => {
  const statusList = ["idle", "sharing", "error"];

  const [shareStatus, setShareStatus] = useState(statusList[0]);

  const handleButton = () => {
    // very temporary setting
    setShareStatus(statusList[Math.floor(Math.random() * 3)]);
  };

  return (
    <>
      <Header currentPage={"broadcast"} />
      <main className="Broadcast-main">
        <button type="button" className={shareStatus} onClick={handleButton}>
          {shareStatus}
        </button>
      </main>
    </>
  );
};

export default Broadcast;
