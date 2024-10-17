import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import EventsComp from "../components/Sections/EventsComp";
import News_Comp from "../components/Sections/News";
import Blogs from "./Blogs";
import Blog from "../components/Sections/Blog";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <News_Comp />
      <EventsComp />
      <Blog />
    </>
  );
}
