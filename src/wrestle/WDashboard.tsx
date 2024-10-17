import React from "react";
import TopNavbarLogin from "../components/Nav/TopNavbarLogin";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import HeaderLogin from "../components/Sections/HeaderLogin";
import TopNavbarLoginWrestle from "../components/Nav/TopNavbarLoginWrestle";

export default function WDashboard({route}) {
 
  // const name = route?.params?.name;
  console.log(JSON.stringify(route))
  return (
    <>
      <TopNavbarLoginWrestle/>
      {/* <HeaderLogin  name={name}/> */}
      {/* <Projects />
      <Blog />
      <Pricing /> */}
    </>
  );
}
