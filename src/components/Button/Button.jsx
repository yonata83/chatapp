


export default function Button({ onClick, icon, altText, className }) {
  return (
    <button className={`action-button ${className}`} onClick={onClick}>
      {icon && <img src={icon} alt={altText} />}
    </button>
  );
}