import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Landing";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { useEffect, useState } from "react";
import Dashboard from "../screens/Dashboard";
import { AuthProvider } from "../hooks/Auth";
import { DataProvider } from "../hooks/useData";
import ProtectedRoute from "../components/Protected";
import Events from "../screens/Events";
import News from "../screens/News";
import Blogs from "../screens/Blogs";
import Aboutus from "../screens/Aboutus";

function Screens() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={<ProtectedRoute element={<Dashboard />} />}
              />
              <Route
                path="/Loginevents"
                element={<ProtectedRoute element={<Events />} />}
              />
               <Route
                path="/Loginnews"
                element={<ProtectedRoute element={<News />} />}
              />
                <Route
                path="/Loginblogs"
                element={<ProtectedRoute element={<Blogs />} />}
              />
               <Route
                path="/LoginAboutUs"
                element={<ProtectedRoute element={<Aboutus />} />}
              />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default Screens;
