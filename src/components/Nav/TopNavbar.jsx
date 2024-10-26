import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export default function TopNavbar() {
  const navigate = useNavigate();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Nvaigate_Login = () => {
    navigate("Login");
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate"
        style={{
          height: y > 100 ? "60px" : "80px",
          backgroundColor: y > 100 ? "#000" : "transparent", // Change colors based on scroll
        }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img
              src={logo}
              alt="office"
              style={{ height: "150px", width: "150px", overflow: "hidden" }}
            />
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            {['home', 'events', 'news', 'HallFame', 'blog'].map((item) => (
              <li key={item} className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{
                    padding: "10px 15px",
                    color: y > 100 ? "white" : "black", // Change text color based on scroll
                  }}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace("Fame", " of Fame")}
                </Link>
              </li>
            ))}
            <li className="semiBold font15 pointer">
              <Link style={{ color: y > 100 ? "white" : "black" }}>Contact</Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/login" style={{ padding: "10px 30px 10px 0", color: y > 100 ? 'white' : 'black' }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a
                href="/register"
                className="radius8 lightBg"
                style={{
                  padding: "10px 15px",
                  color: y > 100 ? "black" : "black", // Adjust the color here too
                }}
              >
                Get Started
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: background-color 0.3s ease, height 0.3s ease; /* Smooth transition for color change and height */
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
