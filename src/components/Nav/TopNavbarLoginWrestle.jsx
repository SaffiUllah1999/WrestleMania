import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export default function TopNavbarLoginWrestle() {
  const navigate = useNavigate();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const Nvaigate_Login = () => {
    navigate("Login");
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
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
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to={"Home"}
              
                onClick={() => navigate("/Wrestledashboard")}
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to={"Events"}
                onClick={() => navigate("/Loginevents")}
                spy={true}
                smooth={true}
              >
                Events
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                // to="projects"
                to={"News"}
                onClick={() => navigate("/Loginnews")}
                spy={true}
                smooth={true}
              >
                News
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                // to="projects"
                to={"News"}
                onClick={() => navigate("/Loginblogs")}
                spy={true}
                smooth={true}
              >
                Blogs
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                onClick={() => navigate("/LoginAboutUs")}
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="About"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link
                onClick={() => navigate("/WProfile")}
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="About"
                spy={true}
                smooth={true}
              >
                Profile
              </Link>
            </li>

          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <a
                onClick={()=>navigate("/login")}
                className="radius8 primaryColor whiteText"
                style={{ padding: "10px 15px" }}
              >
                Log out
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
  transition: background-color 0.3s ease; /* Smooth transition for color change */
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
