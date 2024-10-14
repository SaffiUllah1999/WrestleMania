import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/John Smith.png";

import BackgroundImage from "../../assets/img/live_background.jpg"; // Import the imag
import { SERVICE_ROUTE } from "../../services/endpoints";
import CommonDataService from "../../services/commondataservice";

export default function EventsComp() {
  const [loading, setLoading] = useState(false);
  const [dataset, setDataset] = useState();
  const commonDataService = new CommonDataService();

  const Get_Products = () => {
    setLoading(true); // Set loading to true
    commonDataService
      .fetchData(SERVICE_ROUTE.GET_PRODUCTS)
      .then((res) => {
        setDataset(res?.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the request
      });
  };

  useEffect(() => {
    Get_Products();
  }, []);
  return (
    <Wrapper id="projects">
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
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
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
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const LightBgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImage}); /* Apply background image */
  background-size: cover; /* Ensure the image covers the whole section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating the image */
  height: "100%"; /* Adjust height as needed */
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
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
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
