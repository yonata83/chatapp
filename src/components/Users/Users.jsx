import "./Users.css";

export default function Users() {
  return (
    <div className="user">
        <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Icon" />
        </div>
        <div className="desription">
            <p className="name"> John doe</p>
            <p className="last-message"> User last message</p>
        </div>
        <div className="info">
            <p className="date"> 21/7/2025</p>
            <p className="unread">2 </p>
        </div>
    </div>
  )
}