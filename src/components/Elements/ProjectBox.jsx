import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectBox({ img, title, text, action }) {
  return (
    <Wrapper>
      <Header>
        <h3 className="font20 extraBold" style={{color:"#fff"}}>{title}</h3>
        <FontAwesomeIcon icon={faChevronRight} size="1x" style={{ color: 'white' }} />
      </Header>
      <ImgBtn
        className="animate pointer"
        onClick={action ? () => action() : null}
      >
        <img className="radius8" src={img} alt="project" />
      </ImgBtn>
      <Text style={{color:"#fff"}}>{text?.substring(0,50)}..</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: space-between; /* Ensure space between header, image, and text */
  height: 300px; /* Set a fixed height */
  background-color: #000;
  padding: 20px; /* Combined padding for better control */
  border-radius: 20px;

  h3 {
    padding-bottom: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // Space between title and icon
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
  margin: 0;

  img {
    width: 100%;
    height: 200px; /* Set a fixed height */
    object-fit: cover; /* Ensure the image covers the space without overflowing */
    border-radius: 8px; /* Optional: maintain rounded corners */
  }

  :hover > img {
    opacity: 0.5;
  }
`;

const Text = styled.p`
  font-size: 13px; /* Adjust font size if needed */
  margin: 0; /* Remove margin to avoid spacing issues */
`;
