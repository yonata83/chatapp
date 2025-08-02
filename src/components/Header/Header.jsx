import "./Header.css";
import Button from "../Button/Button.jsx";
import videoIcon from "../../assets/video-camera.svg";
import moreIcon from "../../assets/more.svg";
import phoneIcon from "../../assets/phone.svg";
import backImg from "../../assets/left-chevron.svg";

export default function Header({ isActive, userName, isOnline, avatarImg, backToChats}) {
  const isInvalid = [false, null, undefined].includes(isActive);
  return (

      isInvalid ? (
        <header style={{ height: "15%" }}>
          <div className="app-header main-header">
            <h1>Chats</h1>
            <div className="search">
              <input type="search" placeholder="Search chats..." />
            </div>
          </div>
        </header>
      ) : (
        <header style={{ height: "10%" }}>
          <div className="user-header chat-header">
            <div className="back" onClick={backToChats}>
              <div>
                <img src={backImg} />
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
              <Button icon={phoneIcon} altText="Phone call" className="header-icon" />
              <Button icon={videoIcon} altText="Video call" className="header-icon" />
              <Button icon={moreIcon} altText="More options" className="header-icon" />
            </div>
          </div>
        </header>
      )
    
  );
}
