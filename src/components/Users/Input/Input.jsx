import cameraImg from "../../../assets/camera.svg";
import sendImg from "../../../assets/send.svg";
import attachImg from "../../../assets/paper-clip.svg";
import "./Input.css";
import { useState } from "react";

export default function Input({ onSubmit }) {
    const [text, setText] = useState('');
  const handleKeyDown = (event) => {
    
      event.preventDefault();
      onSubmit(text);

  };

  return (
    <div className="input-container">
        <button className="img-upload">
          {cameraImg && <img src={cameraImg} alt="Upload" />}
        </button>
      <input
      id="chat-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="attachment"> 
        {attachImg && <img src={attachImg} alt="Upload" />}
          </button>
      <button onClick={() => onSubmit(text)}>
        {sendImg && <img src={sendImg} alt="Upload" />}

      </button>

    </div>
  );
}