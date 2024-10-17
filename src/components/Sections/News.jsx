import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import CommonDataService from "../../services/commondataservice";
import { SERVICE_ROUTE } from "../../services/endpoints";
import ProjectBox from "../Elements/ProjectBox";

export default function News_Comp() {
  const [loading, setLoading] = useState(false);
  const [dataset, setDataset] = useState();
  const commonDataService = new CommonDataService();

  const Get_Products = () => {
    setLoading(true); // Set loading to true
    commonDataService
      .fetchData(SERVICE_ROUTE.GET_ARTICLES)
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
    <Wrapper id="news">
      <div className="whiteBg">
        <div className="container" style={{ marginTop: "10%" }}>
          <HeaderInfo>
            <p className="font13">
              <br />
            </p>
            <p className="font13">
              <br />
            </p>
            <p className="font13">
              <br />
            </p>
            <p className="font13">
              <br />
            </p>
            <h1 className="font40 extraBold">latest News</h1>
            <p className="font13">
              <br />
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            {dataset?.map((c) => {
              return (
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ProjectBox
                    title={c?.title}
                    text={c?.description}
                    img={c?.image}
                    tag="company"

                    action={() => alert("clicked")}
                  />
                </div>
              );
            })}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
