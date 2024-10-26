import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import AddImage2 from "../../assets/img/John Smith.png";
import BackgroundImage from "../../assets/img/live_background.jpg";
import { SERVICE_ROUTE } from "../../services/endpoints";
import CommonDataService from "../../services/commondataservice";
import Carousel from "../Crausel";
import LoginCourseslider from "./LoginCourseslider";
import image1 from "../../assets/img/mud_pic_1.png";

export default function HomeSliderHeader() {
  const [loading, setLoading] = useState(false);
  const [dataset, setDataset] = useState([]);
  const commonDataService = new CommonDataService();

  const Get_Products = () => {
    setLoading(true);
    commonDataService
      .fetchData(SERVICE_ROUTE.GET_PRODUCTS)
      .then((res) => {
        setDataset(res?.data || []);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    Get_Products();
  }, []);

  const images = [
    image1
  ];

  return (
    <Container>
      <Wrapper id="events">


        <CarouselContainer>
          <LoginCourseslider images={images} />
        </CarouselContainer>

      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.section`
  width: 90%;
  max-width: 1200px;
  height: 50%;
  border-radius: 16px;
  text-align: left;
  overflow: hidden; /* Round corners effect */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 20px 0; /* Space below title */
  color: black; /* Change title color to white */
`;

const CarouselContainer = styled.div`
  margin-bottom: 20px; /* Space below the carousel */
`;

const LightBgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  height: 300px; /* Fixed height for the section */
  padding: 20px;
  margin-bottom: 20px; /* Space below this section */
  border-radius: 20px; /* Rounded corners */
`;

const Advertising = styled.div`
  max-width: 600px; /* Limit width for better visibility */
  margin: auto; /* Center horizontally */
`;

const ImgWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 16px; /* Rounded corners for the image */
  }
`;

const CardsSection = styled.div`
  padding: 20px;
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center cards horizontally */
  }
`;

const Card = styled.div`
  margin: 10px; /* Space between cards */
  flex: 0 1 calc(33% - 20px); /* Responsive sizing */

  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 20px); /* Two cards on smaller screens */
  }

  @media (max-width: 480px) {
    flex: 0 1 calc(100% - 20px); /* One card on mobile */
  }
`;
