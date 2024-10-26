import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import CommonDataService from "../services/commondataservice";
import { SERVICE_ROUTE } from "../services/endpoints";
import { useAuth } from "../hooks/Auth";
import loginImage from "../assets/img/login.png";
import { useData } from "../hooks/useData";

const Login = () => {
  const commonDataService = new CommonDataService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const {userData,setUserData}= useData()

  const { loginSet } = useAuth();
  const navigate = useNavigate();

  const validateInputs = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email format is invalid");
      valid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    return valid;
  };

  const login = async () => {
    // if (!validateInputs()) return;

    try {
      const res = await commonDataService.executeApiCall(SERVICE_ROUTE.LOGIN, {
        email,
        password,
      });
      if (res.data.status) {
        setUserData(res?.data?.user?.name)
        loginSet();
        navigate("/dashboard", { state: { name: res?.data?.user?.name } });
        
      } else {
        alert("Login failed: Invalid credentials");
      }
    } catch (error) {
      alert(error?.response ? error?.response?.data?.Error : "An error occurred");
    }
  };

  return (
    <div
      className={"mainContainer"}
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className={"titleContainer"}>
        <div>
          <h5>Login</h5>
        </div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel" style={{ color: "#000" }}>
          {emailError}
        </label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel" style={{ color: "#000" }}>
          {passwordError}
        </label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <button title="Login" type="button" onClick={login}>
          <p>Login</p>
        </button>
      </div>
      <div className={"inputContainer"}>
        <button
          title="Go to Register"
          type="button"
          onClick={() => navigate("/register")}
        >
          <h5>Register</h5>
        </button>
      </div>
      <div className={"inputContainer"}>
        <button
          style={{ backgroundColor: "#000", color: "#fff" }}
          title="Register as User"
          type="button"
          onClick={() => navigate("/Wlogin")}
        >
          Login as Wrestler?
        </button>
      </div>
    </div>
  );
};

export default Login;
