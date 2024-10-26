import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import BackgroundVideo from "../../assets/bgVideo.mp4"; // Add your video here
import HomeSliderHeader from "./HomeSliderHeader";

const images = [
  "https://statico.sportskeeda.com/editor/2024/09/540ce-17267113569271-1920.jpg?w=640",
  "https://i.ytimg.com/vi/hvFTjbSMYEc/maxresdefault.jpg",
  "https://statico.sportskeeda.com/editor/2024/09/540ce-17267113569271-1920.jpg?w=640",
  "https://i.ytimg.com/vi/hvFTjbSMYEc/maxresdefault.jpg",
];

export default function HeaderLogin() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <VideoWrapper>
        <Video
          src={BackgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </VideoWrapper>
      <Overlay>
        <Title>Welcome to Wrestling Mania</Title>
        <Subtitle>Your platform to showcase your wrestling skills.</Subtitle>
        <BtnWrapper>
          <FullButton title="Get Started" />
        </BtnWrapper>
      </Overlay>
      <HomeSliderHeader images={images}/>
    </Wrapper>
  );
}

const Wrapper = styled.section`

  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  overflow: hidden; // Prevent overflow from video
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; // Behind other content
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensure the video covers the entire area
`;
const Overlay = styled.div`
  z-index: 10; // Ensure this is above the video
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align text to the start
  justify-content: flex-start; // Align items at the top
  height: 100%; // Full height
  color: white; // Change text color to white for contrast
  text-align: left; // Align text to the left

  @media (max-width: 960px) {
    padding: 20px; // Padding on smaller screens
  }
`;


const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 10px 0 20px; // Margin between subtitle and button
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

