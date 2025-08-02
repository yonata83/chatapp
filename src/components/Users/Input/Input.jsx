import Button from "../../Button/Button.jsx";
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
        <Button icon={cameraImg} altText="camera" className="img-upload" />
      <input
      id="chat-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <Button icon={attachImg} altText="Upload" className="attachment" />
      <Button icon={sendImg} altText="Submit" onClick={() => onSubmit(text)}/>


    </div>
  );
}