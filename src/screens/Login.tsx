import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import CommonDataService from "../services/commondataservice";
import { SERVICE_ROUTE } from "../services/endpoints";
import { useAuth } from "../hooks/Auth";
import loginImage from "../assets/img/login.png"; // Import the image

const Login = () => {
  const commonDataService = new CommonDataService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { isAuthenticated, loginSet } = useAuth();

  const navigate = useNavigate();

  const login = async () => {
    // const response = await axios.post('http://192.168.5.57:3000/adminLogin', { email, password });
    commonDataService
      .executeApiCall(SERVICE_ROUTE.LOGIN, { email, password })
      .then((res) => {
        if (res.data.status) {
          loginSet();
          navigate("/dashboard");
        } else {
          alert("Login failed: ");
        }
      })
      .catch(function (error) {
        if (error) {
          alert(JSON.stringify(error.response.data.Error));
          console.log(JSON.stringify(error.response?.data));
        }
      });
  };

  const onButtonClick = () => {
    login();
    // You'll update this function later...
  };

  return (
    <div
      className={"mainContainer"}
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className={"titleContainer"}>
        <div>
          <h5 style={{ fontFamily: "serif" }}>Login</h5>
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
        <button title="Register" type="button" onClick={onButtonClick}>
          <p>Login</p>
        </button>
      </div>
      <div className={"inputContainer"}>
        <button title="Register" type="button" onClick={()=>navigate('/register')}>
          <h5>Register</h5>
        </button>
      </div>
    </div>
  );
};

export default Login;
