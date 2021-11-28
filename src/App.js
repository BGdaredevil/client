import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Apply from "./components/Apply/Apply.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Navigation from "./components/Navigation/Nav.js";
import { AuthContext } from "./contexts/authContext.js";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={user ? <Apply /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
