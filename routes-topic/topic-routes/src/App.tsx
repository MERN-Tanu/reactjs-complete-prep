import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  //write authentication logic
  // Make login API call, check if token valid

  // const isAuthenticated = false;
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
          {/* <Route  // logic is very bad
            path="/about"
            element={isAuthenticated ? <About /> : <Login />}
          /> */}

          {/*  This one is throwing error */}
          {/* {isAuthenticated ? (
            <Route path="/about" element={<About />}></Route>
          ) : (
            <Navigate to="/login" />
          )} */}

          {/* this is smart way */}
          <Route element={<ProtectedRoutes />}>
            {" "}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
