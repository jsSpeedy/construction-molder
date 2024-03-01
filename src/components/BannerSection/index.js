"use client";
import styled from "styled-components";
import Header from "../Header";
import Container from "./Container";
import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";

const Banner = styled.div`
  background: url(/images/banner-bg.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  background-attachment: fixed;

  @media (max-width: 1023px) {
    height: 50vh;
  }
`;

const BannerSection = () => {
  return (
    <Banner>
      <Header />
      <Container />
      <LeftInfo />
      <RightInfo />
    </Banner>
  );
};

export default BannerSection;
