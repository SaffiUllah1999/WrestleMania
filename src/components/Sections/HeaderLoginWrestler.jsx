import React from "react";
import styled from "styled-components";
import "../../style/wrestlerDashboard.css"
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/tribal-chief-roman-reigns-wallpaper-ipad.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { useData } from "../../hooks/useData";
import WProfileCard from "../../wcomponents/WProfileCard";
import WPersonality from "../../wcomponents/WPersonality";
import WMotivations from "../../wcomponents/WMotivation";
import WFrustrations from "../../wcomponents/WFrustration";
import WGoals from "../../wcomponents/WGoals";
import WFavoriteBrands from "../../wcomponents/WFavorite";
import WBio from "../../wcomponents/WBio";

export default function HeaderLoginWrestler() {
  const { wrestleData } = useData();

  return (
    <div className="container">
      <div className="left-panel">
        <WProfileCard />
      </div>
      <div className="right-panel">
        <WBio />
        <div className="grid">
          <WPersonality />
          <WMotivations />
          <WFrustrations />
          <WGoals />
          <WFavoriteBrands />
        </div>
      </div>
    </div>
  );
}

// const Wrapper = styled.section`
//   display: flex;
//   padding: 80px 0;
//   min-height: 840px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const ProfileSection = styled.div`
//   flex: 1;
//   padding: 20px;
//   text-align: left;
//   @media (max-width: 960px) {
//     text-align: center;
//     margin: 30px 0;
//   }
// `;

// const WelcomeMessage = styled.div`
//   h1 {
//     font-size: 2.5rem;
//     font-weight: bold;
//   }
// `;

// const UserBio = styled.p`
//   font-size: 1.25rem;
//   margin: 15px 0;
// `;

// const BtnWrapper = styled.div`
//   max-width: 190px;
//   margin-top: 20px;
//   margin-left: 50px;
// `;

// const ImageSection = styled.div`
//   flex: 1;
//   position: relative;
//   @media (max-width: 960px) {
//     order: -1;
//   }
// `;

// const ProfileImage = styled.img`
//   margin-top: 50px;
//   width: 30%;
//   height: auto;
//   border-radius: 20px;
//   margin-left: 50px;
// `;

// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 20px;
//   bottom: 30px;
//   background-color: rgba(255, 255, 255, 0.8);
//   padding: 20px;
//   border-radius: 8px;
//   z-index: 10;
// `;

// const QuoteText = styled.p`
//   font-size: 1rem;
//   font-style: italic;
// `;

// const DotsWrapper = styled.div`
//   position: absolute;
//   right: 20px;
//   bottom: 20px;
//   z-index: 5;
// `;
