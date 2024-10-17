import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage2 from "../../assets/img/John Smith.png";

import BackgroundImage from "../../assets/img/live_background.jpg"; // Import the image
import { SERVICE_ROUTE } from "../../services/endpoints";
import CommonDataService from "../../services/commondataservice";

export default function EventsComp() {
  const [loading, setLoading] = useState(false);
  const [dataset, setDataset] = useState();
  const commonDataService = new CommonDataService();

  const Get_Products = () => {
    setLoading(true);
    commonDataService
      .fetchData(SERVICE_ROUTE.GET_PRODUCTS)
      .then((res) => {
        setDataset(res?.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    Get_Products();
  }, []);

  return (
    <Container>
      <Wrapper id="events">
        <h1 className="font40 extraBold">Events</h1>

        <LightBgSection>
          <Advertising className="flexSpaceCenter">
            <div>
              <ImgWrapper className="flexCenter">
                <img
                  className="radius8"
                  src={AddImage2}
                  alt="add"
                  content="fit"
                />
              </ImgWrapper>
            </div>
          </Advertising>
        </LightBgSection>
        
        <div className="whiteBg">
          <div className="container">
            <div className="row textCenter">
              {dataset?.map((x) => {
                return (
                  <div
                    className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
                    key={x.id}
                  >
                    <ProjectBox
                      img={x?.image}
                      title={x?.title}
                      text={x?.description}
                      action={() => alert("clicked")}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically, if needed */
  width: 100%; /* Full width */
  padding: 20px; /* Optional: padding around the content */
`;

const Wrapper = styled.section`
  width: 80%;
 border-radius: 16px; 
  max-width: 1200px; /* Optional: limit maximum width */
  text-align: left; /* Left-align text within the wrapper */
`;

const LightBgSection = styled.div`
  display: flex;
  border-radius: 20px; 
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%; /* Adjust height as needed */
  padding: 50px 0; /* Adjust padding as needed */
`;

const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
