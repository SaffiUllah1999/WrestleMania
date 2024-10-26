import React from "react";
import styled from "styled-components";
import TopNavbarLoginWrestle from "../components/Nav/TopNavbarLoginWrestle";
import HeaderLoginWrestler from "../components/Sections/HeaderLoginWrestler";

const Wrapper = styled.div`
  margin: 5%; // Adjust this value as needed
`;

export default function WDashboard() {
  return (
    <>
      <TopNavbarLoginWrestle />
      <Wrapper>
        <HeaderLoginWrestler />
      </Wrapper>
      {/* Other components can go here */}
    </>
  );
}
