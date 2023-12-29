import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./components/pages/Pages";
import Navbar from "./components/Navbar/Navbar";
import HamburgerMenu from "./components/HamburgerMenu.jsx/HamburgerMenu";

function App() {
  return (
    <div className="app">
      <Router>
        <HamburgerMenu />
        <Navbar />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
