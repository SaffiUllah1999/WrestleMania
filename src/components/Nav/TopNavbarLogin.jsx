import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export default function TopNavbar() {
  const navigate = useNavigate();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate"
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
                style={{ padding: "10px 15px", color: "#fff" }}
                to={"Home"}
                onClick={() => navigate("/dashboard")}
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li 
              className="semiBold font15 pointer"
              onMouseEnter={() => setDropdownOpen(true)} // Open dropdown on hover
              onMouseLeave={() => setDropdownOpen(false)} // Close dropdown on mouse leave
            >
              <Link
                activeClass="active"
                style={{ padding: "10px 15px", color: "#fff" }}
                to={"Events"}
              >
                Events
              </Link>
              {dropdownOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={() => navigate("/Loginevents")}>Trending Events</DropdownItem>
                  <DropdownItem onClick={() => navigate("/Loginevents")}>Upcoming Events</DropdownItem>
                  <DropdownItem onClick={() => navigate("/Faq")}>Tutorials</DropdownItem>
                </DropdownMenu>
              )}
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px", color: "#fff" }}
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
                style={{ padding: "10px 15px", color: "#fff" }}
                to={"Blogs"}
                onClick={() => navigate("/Loginblogs")}
                spy={true}
                smooth={true}
              >
                Blogs
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px", color: "#fff" }}
                to={"faqs"}
                onClick={() => navigate("/Faq")}
                spy={true}
                smooth={true}
              >
                FAQ's
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                onClick={() => navigate("/LoginAboutUs")}
                activeClass="active"
                style={{ padding: "10px 15px", color: "#fff" }}
                to="About"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <a
                onClick={() => navigate("/login")}
                className="radius8 primaryColor whiteText"
                style={{ padding: "10px 15px", color: "#fff" }}
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
  background-color: #000;
  z-index: 999;
  transition: background-color 0.3s ease;
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

// Dropdown styles
const DropdownMenu = styled.ul`
  position: absolute;
  background-color: #333; /* Dark background for dropdown */
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px; /* Space between menu and link */
  list-style: none;
  padding: 10px 0;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  color: #fff; /* White text for dropdown items */
  cursor: pointer;
  
  &:hover {
    background-color: #444; /* Change background on hover */
  }
`;
