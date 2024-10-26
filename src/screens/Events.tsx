import React from "react";
import TopNavbarLogin from "../components/Nav/TopNavbarLogin";
import styled from "styled-components";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import HeaderLogin from "../components/Sections/HeaderLogin";
import EventsComp from "../components/Sections/EventsComp";
import Footer from "../components/Footer";

export default function Events() {
  const Wrapper = styled.div`
    margin: 5%; // Adjust this value as needed
  `;
  return (
    <>
      <TopNavbarLogin />
      <Wrapper>
        <EventsComp />
      </Wrapper>

      <Footer />
    </>
  );
}
