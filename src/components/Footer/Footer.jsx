import Button from "../Button/Button.jsx";
import "./Footer.css";
import chatB from "../../assets/chat-bubble.svg";
import phoneIcon from "../../assets/phone.svg";
import story from "../../assets/book.svg";
import users from "../../assets/users.svg";
import settings from "../../assets/settings.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="icons">
        <Button icon={chatB} altText="chats" className="footer-icon" />
        <Button icon={phoneIcon} altText="calls" className="footer-icon" />
        <Button icon={story} altText="Stories" className="footer-icon" />
        <Button icon={users} altText="Users" className="footer-icon" />
        <Button icon={settings} altText="Settings" className="footer-icon" />
      </div>
    </div>
  );
}
