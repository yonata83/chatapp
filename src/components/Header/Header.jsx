import './Header.css';

export default function Header() {
  return (
    <header className="App-header">
      <h1>Chats</h1>
      <div className="search">
        <input type="search" placeholder="Search chats..." />
      </div>
    </header>
  );
}