import React, { useEffect, useState } from "react";
import TopNavbarLogin from "../components/Nav/TopNavbarLogin";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import HeaderLogin from "../components/Sections/HeaderLogin";
import CommonDataService from "../services/commondataservice";
import { SERVICE_ROUTE } from "../services/endpoints";
import BlogBox from "../components/Elements/BlogBox";

export default function Aboutus() {
  //   const [loading, setLoading] = useState(false);
  //   const [dataset, setDataset] = useState();
  //   const commonDataService = new CommonDataService();

  //   const Get_Products = () => {
  //     setLoading(true); // Set loading to true
  //     commonDataService
  //       .fetchData(SERVICE_ROUTE.GET_ARTICLES)
  //       .then((res) => {
  //         setDataset(res?.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //       .finally(() => {
  //         setLoading(false); // Set loading to false after the request
  //       });
  //   };

  //   useEffect(() => {
  //     Get_Products();
  //   }, []);

  return (
    <>
      <TopNavbarLogin />

      <div style={{ marginTop: "10%" }}>
        <BlogBox
          title={"About Us"}
          text="PK Wrestling Mania is a thrilling wrestling promotion that mirrors the excitement and drama of the WWE. With a roster of larger-than-life characters, high-energy matches, and elaborate storylines, PK Wrestling Mania captivates fans across Pakistan. Each event showcases a blend of athleticism and entertainment, featuring intense rivalries and dramatic twists that keep audiences on the edge of their seats. The promotion emphasizes not only the physical prowess of its wrestlers but also the theatrical elements that make each show a spectacle. From championship bouts to fan-favorite segments, PK Wrestling Mania is quickly becoming a staple in the world of professional wrestling, uniting fans in their love for this electrifying sport.."
          tag="PK Wrestling Mania"
          author=""
        />
      </div>
    </>
  );
}
