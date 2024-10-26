import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import EventsComp from "../components/Sections/EventsComp";
import News_Comp from "../components/Sections/News";
import Blogs from "./Blogs";
import Blog from "../components/Sections/Blog";
import HallFame from "../components/Sections/HallFame";
import Footer from "../components/Footer";
import styled from "styled-components";

// Wrapper for the entire page
const PageWrapper = styled.div`
  background-color: #000; /* Change this to your desired color */
  min-height: 100vh; /* Ensure it covers full height */
`;

export default function Landing() {
  return (
    <PageWrapper>
      <TopNavbar />
      <Header />
      <News_Comp />
      <EventsComp />
      <HallFame />
      <Blog />
      <Footer />
    </PageWrapper>
  );
}
