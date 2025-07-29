import "./App.css";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import { useState } from "react";
import users from "./data/users.json";
import Footer from "./components/Footer/Footer";

const usersArray = users.chats;
let isActiveUser = true;

function formatTimestamp(isoTs) {
  const ts = new Date(isoTs);
  const now = new Date();
  
  const today  = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  const then   = new Date(ts.getFullYear(), ts.getMonth(), ts.getDate());
  
  const dayDiff = Math.round((today - then) / (1000 * 60 * 60 * 24));
  
  if (dayDiff === 0) {
    
    return ts.toLocaleTimeString([], {
      hour:   '2-digit',
      minute: '2-digit'
    });
  } 
  if (dayDiff === 1) {
    
    return 'Yesterday';
  }
  
  const dd = String(ts.getDate()).padStart(2, '0');
  const mm = String(ts.getMonth() + 1).padStart(2, '0');
  const yy = String(ts.getFullYear()).slice(-2);
  return `${dd}/${mm}/${yy}`;
}


function App() {
  const [activeUser, setUser] = useState(
    { id: null, user: null, messages: null, date: null, avatar: null, online: null, isActive:false}
  )

  function setActiveUser(userId = null, userName = null, allMessages = null, imgUrl = null, online = null, isActive = false) {
    setUser(user => ({ id: userId, user: userName, messages: allMessages, avatar: imgUrl, online: online, isActive: isActive }));
    console.log(activeUser);
  }


  return (
    <div className="App">

      <Header 
        isActive={activeUser.isActive}
        isOnline={activeUser.online}
        userName={activeUser.user}
        avatarImg={activeUser.avatar}
        backToChats={() => setActiveUser()}
        /> 

      
      <div className="users-container">
        { activeUser.isActive ? (
          <Users
            name={activeUser.user}
            lastMessage={activeUser.messages[activeUser.messages.length - 1].message.slice(0, 15) + "..." || ""}
            date={formatTimestamp(activeUser.messages[activeUser.messages.length - 1].timestamp)}
            avatar={activeUser.avatar}
            onClick={() => setActiveUser(activeUser.id, activeUser.user, activeUser.messages, activeUser.avatar, activeUser.online, true)}
            isActive={activeUser.isActive}
            messages={activeUser.messages}
          />
        ) : (
        usersArray.map((user) => ( 
          <Users
            key={user.id}
            name={user.name}
            lastMessage={user.messages[user.messages.length - 1].message.slice(0, 15) + "..." || ""}
            date={formatTimestamp(user.messages[user.messages.length - 1].timestamp)}
            avatar={user.avatar}
            onClick={() => setActiveUser(user.id, user.name, user.messages, user.avatar, user.online, true)}
            isActive={activeUser.isActive}
          />
        )))}
        
      </div>
      <footer className="footer">
      <Footer />
      </footer>
    </div>
  );
  
}

export default App;
