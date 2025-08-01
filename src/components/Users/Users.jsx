import "./Users.css";
import Input from "./Input/Input.jsx";
import { useState, useEffect, useRef } from "react";
import { replies } from "../../data/replies.js";

export default function Users({userId, name, allMessages, lastMessage, date, avatar, onClick, isActive}) {
  const [newMessage, setMessage] = useState(null);
  const [data, setData] = useState(allMessages);
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [data]);

  const isInvalid = [false, null, undefined].includes(isActive);
  let allUsers = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    if (!newMessage) return; // guard
    setData((prev) => [
      ...prev,
      {
        avatar: avatar,
        id: `chat-${userId}-msg-00${allMessages.length + 1}`,
        message: newMessage,
        name: "me",
        timestamp: new Date().toISOString(),
      },
    ]);

    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setTimeout(() => {
      const n = Math.floor(Math.random() * 101);
      const reply = replies[n % replies.length];

      setData((prev) => [
        ...prev,
        {
          avatar: "https://picsum.photos/200/300",
          id: `chat-${userId}-msg-00${allMessages.length + 2}`,
          message: reply,
          name: name,
          timestamp: new Date().toISOString(),
        }
      ]);
      
    localStorage.setItem(
        "data",
        JSON.stringify(
          allUsers.map((user) => {
            if (user.id === userId) {
              return {
                ...user,
                messages: [
                  ...user.messages,
                  {
                    avatar: avatar,
                    id: `chat-${userId}-msg-00${allMessages.length + 1}`,
                    message: newMessage,
                    name: "me",
                    timestamp: new Date().toISOString(),
                  },
                  {
                    avatar: "https://picsum.photos/200/300",
                    id: `chat-${userId}-msg-00${allMessages.length + 2}`,
                    message: reply,
                    name: name,
                    timestamp: new Date().toISOString(),
                  },
                ],
              };
            }
            return user;
          })
        )
      ); 
    }, 1000);
  }, [newMessage]);


  !isInvalid && console.log(allUsers[userId - 1].messages);

  return isInvalid ? (
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
    <>
      <section className="content-section">
        <div className="messages-container">
          <ul className="messages-list" ref={containerRef} style={{overflowY: 'auto', maxHeight: '100%'}}>
            {data.map((message, index) =>
              message.name === name ? (
                <li key={index} className="message-item user-message">
                  <div className="message-content">
                    <p className="message-text">{message.message}</p>
                  </div>
                </li>
              ) : (
                <li key={index} className="message-item me">
                  <div className="message-content">
                    <p className="message-text">{message.message}</p>
                  </div>
                </li>
              )
            )}
            <div
              ref={bottomRef}
              aria-hidden="true"
              style={{ display: "block", height: "20px" }}
            />
          </ul>
        </div>

        <Input onSubmit={setMessage} />
      </section>
    </>
  );
}
