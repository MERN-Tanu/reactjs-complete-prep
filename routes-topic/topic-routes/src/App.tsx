import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="appContainer">
      <div>
        <h1>Swiiggy App</h1>
      </div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          {""}| {""}
          <Link to="/about">About</Link>
          {""}| {""}
          <Link to="/contact">Contact</Link>
          {/* <Outlet /> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
