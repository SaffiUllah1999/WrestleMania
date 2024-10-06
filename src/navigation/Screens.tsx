import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Landing";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { useEffect, useState } from "react";
import Dashboard from "../screens/Dashboard";
import { AuthProvider } from "../hooks/Auth";
import ProtectedRoute from "../components/Protected";

function Screens() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default Screens;
