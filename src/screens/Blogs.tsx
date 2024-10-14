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

export default function Blogs() {
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
      <Blog />
 
    </>
  );
}
