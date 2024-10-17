import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../screens/Login";
import Register from "../screens/Register";
import { useState } from "react";
import Dashboard from "../screens/Dashboard";
import { AuthProvider } from "../hooks/Auth";
import { DataProvider } from "../hooks/useData";
import ProtectedRoute from "../components/Protected";
import Events from "../screens/Events";
import News from "../screens/News";
import Blogs from "../screens/Blogs";
import Aboutus from "../screens/Aboutus";
import WRegister from "../wrestle/WRegister";
import WLogin from "../wrestle/WLogin";
import Landing from "../screens/Landing";
import WDashboard from "../wrestle/WDashboard";
import ProtectedRouteWrestle from "../components/ProtectedWrestle";
import EventDetails from "../screens/EventDetails";

function Screens() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Landing />} />
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
              <Route
                path="/LoginEventDetails"
                element={<ProtectedRoute element={<EventDetails />} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/Wregister" element={<WRegister />} />
              <Route path="/Wlogin" element={<WLogin />} />
              <Route
                path="/Wrestledashboard"
                element={<ProtectedRouteWrestle element={<WDashboard />} />}
              />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default Screens;
