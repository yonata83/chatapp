import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="icons">
        <a href="#" className="footer-icon">
          <svg className="footer-icon" viewBox="0 0 20 20">
            <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h11A2.5 2.5 0 0 1 18 5.5v6A2.5 2.5 0 0 1 15.5 14H7l-4 4V5.5z" />
          </svg>
        </a>
        <a href="#" className="footer-icon">
          <svg className="footer-icon" viewBox="0 0 20 20">
            <path d="M2.003 5.884l2.6-.518a1 1 0 0 1 1.108.707l.483 2.024a1 1 0 0 1-.265.95l-1.419 1.419a11.042 11.042 0 0 0 5.185 5.185l1.419-1.419a1 1 0 0 1 .95-.265l2.024.483a1 1 0 0 1 .707 1.108l-.518 2.6a1 1 0 0 1-.987.77c-6.065 0-11-4.935-11-11a1 1 0 0 1 .77-.987z" />
          </svg>
        </a>
        <a href="#" className="footer-icon">
          <svg className="footer-icon" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="8" y="2" width="16" height="16" rx="2" />
          </svg>
        </a>
        <a href="#" className="footer-icon">
          <svg className="footer-icon" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-6 7a6 6 0 1 1 12 0H4z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="footer-icon">
          <svg className="footer-icon" viewBox="0 0 20 20">
            <path d="M11.6 1.3l1.3 2.9c.2.5.7.8 1.2.8h3.2c.6 0 1 .5 1 1v3.2c0 .5.3 1 .8 1.2l2.9 1.3c.6.3.6 1.1 0 1.4l-2.9 1.3c-.5.2-.8.7-.8 1.2v3.2c0 .6-.5 1-1 1h-3.2c-.5 0-1 .3-1.2.8l-1.3 2.9c-.3.6-1.1.6-1.4 0l-1.3-2.9c-.2-.5-.7-.8-1.2-.8H5.1c-.6 0-1-.5-1-1v-3.2c0-.5-.3-1-.8-1.2L.1 8.4c-.6-.3-.6-1.1 0-1.4l2.9-1.3c.5-.2.8-.7.8-1.2V1.3c0-.6.5-1 1-1h3.2c.5 0 1-.3 1.2-.8L9.8 0c.3-.6 1.1-.6 1.4 0z" />
            <circle cx="10" cy="10" r="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
