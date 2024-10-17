import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css";
import CommonDataService from "../services/commondataservice";
import { SERVICE_ROUTE } from "../services/endpoints";
import Image from "../assets/img/register.png"; 

const Register = () => {
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
      const res = await commonDataService.executeApiCall(SERVICE_ROUTE.REGISTER, Dataset);
      if (res.data.status) {
        navigate("/login");
      } else {
        alert("Error");
      }
    } catch (error) {
      alert(error.response ? error.response.data.Error : "An error occurred");
    }
  };

  return (
    <div className={"mainContainer"} style={{ backgroundImage: `url(${Image})` }}>
      <div className={"titleContainer"}>
        <div style={{ color: "#fff" }}>Sign Up</div>
      </div>
      <br />
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
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <button title="Register" type="button" onClick={Register}>
          <h5>Register</h5>
        </button>
      </div>
      <div className={"inputContainer"}>
        <button title="Log In" type="button" onClick={() => navigate("/login")}>
          <h5>Log in</h5>
        </button>
      </div>
      <div className={"inputContainer"}>
        <button style={{ backgroundColor: "#000" }} title="Register as Wrestler" type="button" onClick={() => navigate("/Wregister")}> 
          <h5 style={{ color: "#fff" }}>Register as Wrestler?</h5>
        </button>
      </div>
    </div>
  );
};

export default Register;
