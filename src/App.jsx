import "./App.css";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="users-container">
        <Users />
        <Users />
      </div>
    </div>
  );
}

export default App;
