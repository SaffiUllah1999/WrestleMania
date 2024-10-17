import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import CommonDataService from "../services/commondataservice";
import { SERVICE_ROUTE } from "../services/endpoints";
import { useAuth } from "../hooks/Auth";
import Image from "../assets/img/wrestle.png";
import ImageBG from "../assets/img/wrestleLogin_bg.png";

const WLogin = () => {
  const commonDataService = new CommonDataService();
  const [dataset, setDataset] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { loginWrestlerSet } = useAuth();
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
      const res = await commonDataService.executeApiCall(
        SERVICE_ROUTE.WRESTLER_LOGIN,
        {
          email,
          password,
        }
      );
      if (res?.data?.status) {
        setDataset(res?.data?.user?.name);
        loginWrestlerSet();
        console.log(res?.data?.user?.name)
        navigate("/Wrestledashboard", { name: res?.data?.user?.name });
      } else {
        alert("Login failed: Invalid credentials");
      }
    } catch (error) {
      alert(error.response ? error.response.data.Error : "An error occurred");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ImageBG})`,
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className={"imageContainer"}
        style={{
          flex: 1.5,
          backgroundImage: `url(${Image})`,
          height: "100vh",
          width: "60%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
        }}
      ></div>
      <div
        className={"mainContainer"}
        style={{
          backgroundColor: "#000",
          borderTopLeftRadius: "50px",
          borderBottomLeftRadius: "50px",
          flex: 1,
        }}
      >
        <div className={"titleContainer"}>
          <div>
            <h5 style={{ color: "#FF0000" }}>Login</h5>
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
            onClick={() => navigate("/Wregister")}
          >
            <h5>Register</h5>
          </button>
        </div>
        <div className={"inputContainer"}>
          <button
            style={{ backgroundColor: "#000", color: "#fff" }}
            title="Register as User"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login as User?
          </button>
        </div>
      </div>
    </div>
  );
};

export default WLogin;
