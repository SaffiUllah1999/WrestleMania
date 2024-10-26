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
import { useNavigate } from "react-router-dom";


export default function EventsComp() {
  const [loading, setLoading] = useState(false);
  const [dataset, setDataset] = useState([]);
  const navigate = useNavigate();
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
    "https://statico.sportskeeda.com/editor/2024/09/540ce-17267113569271-1920.jpg?w=640",
    "https://i.ytimg.com/vi/hvFTjbSMYEc/maxresdefault.jpg",
    "https://statico.sportskeeda.com/editor/2024/09/540ce-17267113569271-1920.jpg?w=640",
    "https://i.ytimg.com/vi/hvFTjbSMYEc/maxresdefault.jpg",
  ];

  return (
    <Container>
      <Wrapper id="events">
        <Title>Events</Title>

        <CarouselContainer>
          <Carousel images={images} />
        </CarouselContainer>

        <LightBgSection>
          <Advertising>
            <ImgWrapper>
              <img
                className="radius8"
                src={AddImage2}
                alt="Add"
                loading="lazy"
              />
            </ImgWrapper>
          </Advertising>
        </LightBgSection>

        <CardsSection>
          <div className="row">
            {dataset.map((x) => (
              <div onClick={()=>   navigate('/LoginEventDetails', { state: { dataset : x }})}>
              <Card key={x.id} className="col-xs-12 col-sm-6 col-md-4">
                <ProjectBox
                  img={x?.image}
                  title={x?.title}
                  text={x?.description}
                />
              </Card>
              </div>
            ))}
          </div>
        </CardsSection>
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
  background-color: black; /* Set background color to black */
`;

const Wrapper = styled.section`
  width: 90%;
  max-width: 1200px;
  border-radius: 16px;
  text-align: left;
  background: #fff; /* Dark background for content */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow */
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
