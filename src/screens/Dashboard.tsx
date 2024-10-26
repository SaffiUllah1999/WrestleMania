import React from "react";
import TopNavbarLogin from "../components/Nav/TopNavbarLogin";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import HeaderLogin from "../components/Sections/HeaderLogin";
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";

export default function Dashboard() {

  const location = useLocation();
  const { name } = location.state || {}; // This will give you the name or undefined

  console.log(name)
  return (
    <>
      <TopNavbarLogin />
      <HeaderLogin />
      <Footer/>
      {/* <Projects />
      <Blog />
      <Pricing /> */}
    </>
  );
}
