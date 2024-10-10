import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css";
import CommonDataService from "../services/commondataservice";
import { SERVICE_ROUTE } from "../services/endpoints";
import Image from "../assets/img/register.png"; // Import the image
const Register = () => {
  const commonDataService = new CommonDataService();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const Register = async () => {
    let Dataset = {
      name: name,
      email: email,
      password: password,
    };
    // const response = await axios.post('http://192.168.5.57:3000/adminLogin', { email, password });
    commonDataService
      .executeApiCall(SERVICE_ROUTE.REGISTER, Dataset)
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        } else {
          alert("Error");
        }
      })
      .catch(function (error) {
        if (error) {
          alert(JSON.stringify(error.response.data.Error));
          console.log(JSON.stringify(error));
        }
      });
  };

  const onButtonClick = () => {
    Register();
  };

  return (
    <div
      className={"mainContainer"}
      style={{ backgroundImage: `url(${Image})` }}
    >
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
        <button title="Register" type="button" onClick={() => onButtonClick()}>
          <h5>Register</h5>
        </button>
      </div>
      <div className={"inputContainer"}>
        <button title="Register" type="button" onClick={() => navigate("/login")}>
          <h5>Log in</h5>
        </button>
      </div>
    </div>
  );
};

export default Register;
