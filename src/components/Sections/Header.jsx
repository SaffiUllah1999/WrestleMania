import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import BackgroundVideo from "../../assets/bgVideo.mp4"; // Add your video here

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  height:100%;
  min-height: 840px;
  min-width:
  overflow: hidden; // Prevent overflow from video
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; // Make sure video is behind other content
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensure the video covers the entire area
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative; // Relative positioning for stacking
  z-index: 10; // Above the video
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative; // Ensure this is above the video
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;

export default function Header() {
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
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">FIGHT LIKE A CHAMPION</h1>
          <HeaderP className="font13 semiBold">
            Wrestling Mania Pakistan will be the first worldwide wrestling
            platform to provide wrestlers to show their skills.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper>
        </div>
      </LeftSide>
     
    </Wrapper>
  );
}
