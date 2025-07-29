import "./Users.css";
import Input from "./Input/Input.jsx";

export default function Users({ name, messages, lastMessage, date, avatar, onClick, isActive }) {
    const isInvalid = [false, null, undefined].includes(isActive);
    console.log(messages);
  return (
    isInvalid ? (
    <div className="user" onClick={onClick}>
      <div className="icon-wrapper">
        <div className="icon">
          <img src={avatar} alt="User Icon" />
        </div>
      </div>
      <div className="desription">
        <p className="name">{name}</p>
        <p className="last-message"> {lastMessage}</p>
      </div>
      <div className="info">
        <p className="date">{date}</p>
        <div className="unread">
          <div className="circle">
          <div>2</div>
          </div>
        </div>
      </div>
    </div>
    ) : (
    <div> 
      <section className="content-section">
        <div className="messages-container">
        <ul className="messages-list">
          {messages.map((message, index) => (
            message.name === name ? (
            <li key={index} className="message-item user-message">
              <div className="message-content">
                <p className="message-text">{message.message}</p>
                
              </div>
            </li>
          ):( 
          <li key={index} className="message-item me">
              <div className="message-content">
                <p className="message-text">{message.message}</p>
                
              </div>
            </li>

          )))}
          </ul>
          </div>
        <div className="input-container">
          <Input />
        </div>
      </section>
    </div>
    ) 
  
  );
}
