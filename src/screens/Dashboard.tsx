import React from "react";
import TopNavbarLogin from "../components/Nav/TopNavbarLogin";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import HeaderLogin from "../components/Sections/HeaderLogin";

export default function Dashboard() {
  return (
    <>
      <TopNavbarLogin />
      <HeaderLogin />
      <Projects />
      <Blog />
      <Pricing />
    </>
  );
}
