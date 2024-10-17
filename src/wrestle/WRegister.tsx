import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css";
import CommonDataService from "../services/commondataservice";
import { SERVICE_ROUTE } from "../services/endpoints";
import Image from "../assets/img/wrestle.png";

const WRegister = () => {
  const commonDataService = new CommonDataService();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const validateInputs = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!name) {
      setEmailError("Name is required");
      valid = false;
    }
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

  const Register = async () => {
    if (!validateInputs()) return;

    const Dataset = { name, email, password };

    try {
      const res = await commonDataService.executeApiCall(
        SERVICE_ROUTE.WRESTLER_REGISTER,
        Dataset
      );
      if (res.data.status) {
        navigate("/Wlogin");
      } else {
        alert("Error");
      }
    } catch (error) {
      alert(error.response ? error.response.data.Error : "An error occurred");
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <div className={"mainContainer"} style={{ backgroundColor: "rgba(0,0,0,0.15865)",flex: 1, padding: "10px" }}>
        <div className={"titleContainer"}>
          <h5>Sign Up as Wrestler</h5>
        </div>
        <div className={"inputContainer"}>
          <input
            value={name}
            placeholder="Enter your name here"
            onChange={(ev) => setName(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <div className={"inputContainer"}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <div className={"inputContainer"}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <div className={"inputContainer"} style={{ display: "flex", gap: "10px" , justifyContent:"center", alignItems:"center"}}>
          <button title="Register" type="button" onClick={Register}>
            Register
          </button>
          <button title="Log In" type="button" onClick={() => navigate("/Wlogin")}>
            Log in
          </button>
          <button
            style={{ backgroundColor: "#000", color: "#fff" }}
            title="Register as User"
            type="button"
            onClick={() => navigate("/register")}
          >
            Register as User?
          </button>
        </div>
      </div>
      <div
        className={"imageContainer"}
        style={{
          flex:1,
          backgroundImage: `url(${Image})`,
          height: "100vh",
          width: 350,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
        
        }}
      ></div>
    </div>
  );
};

export default WRegister;
