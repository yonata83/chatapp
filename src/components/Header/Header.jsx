import "./Header.css";
import videoIcon from "../../assets/video-camera.svg";
import moreIcon from "../../assets/more.svg";
import phoneIcon from "../../assets/phone.svg";

export default function Header({ isActive, userName, isOnline, avatarImg, backToChats}) {
  const isInvalid = [false, null, undefined].includes(isActive);
  return (

      isInvalid ? (
        <header style={{ height: "15%" }}>
          <div className="app-header">
            <h1>Chats</h1>
            <div className="search">
              <input type="search" placeholder="Search chats..." />
            </div>
          </div>
        </header>
      ) : (
        <header style={{ height: "10%" }}>
          <div className="user-header">
            <div className="back" onClick={backToChats}>
              <div>
                <img src="src/assets/left-chevron.svg" />
              </div>
            </div>
            <div className="user-info">
              <div className="header-icon-wrapper">
                <div className="icon">
                  <img src={avatarImg} alt="User Avatar" />
                </div>
              </div>
              <div className="user-details">
                <p className="user-name">{userName}</p>
                <p className="user-status">{isOnline ? "Online" : "offline"}</p>
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
        </header>
      )
    
  );
}
