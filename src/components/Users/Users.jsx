import "./Users.css";

export default function Users({ name, lastMessage, date, avatar }) {
  return (
    <div className="user">
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
  );
}
