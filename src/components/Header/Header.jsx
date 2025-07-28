import "./Header.css";
import videoIcon from "../../assets/video-camera.svg";
import moreIcon from "../../assets/more.svg";
import phoneIcon from "../../assets/phone.svg";

export default function Header({ isActive }) {
  const isInvalid = [false, null, undefined].includes(isActive);
  return (
    <>
      {isInvalid ? (
        <div className="app-header">
          <h1>Chats</h1>
          <div className="search">
            <input type="search" placeholder="Search chats..." />
          </div>
        </div>
      ) : (
        <div className="user-header">
          <div> {"<"} </div>
          <div className="user-info">
            <div className="icon-wrapper">
              <div className="icon">
                <img src="https://via.placeholder.com/40" alt="User Avatar" />
              </div>
            </div>
            <div className="user-details">
              <p className="user-name">John Doe</p>
              <p className="user-status">Online</p>
            </div>
          </div>
          <div className="user-actions">
            <button className="action-button phone">
              <img src={phoneIcon} alt="Phone Call" />
            </button>
            <button className="action-button video">
              <img src={videoIcon} alt="Video Call" />
            </button>
            <button className="action-button more">
              <img src={moreIcon} alt="More options" />
            </button>
            
          </div>
        </div>
      )}
    </>
  );
}
