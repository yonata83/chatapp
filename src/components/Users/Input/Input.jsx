
import "./Input.css";

export default function Input({ value, onChange, onSubmit }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit(value);
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button onClick={() => onSubmit(value)}>Send</button>
    </div>
  );
}