import styled from "styled-components";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const BannerContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const BannerRow = styled.div`
  display: flex;
`;

const BannerContent = styled.div`
  padding: 140px 0 180px;

  @media (max-width: 1740px) and (min-width: 1535px) {
    padding-left: 115px;
  }

  @media (max-width: 1400px) and (min-width: 1280px) {
    padding-left: 65px;
  }

  @media (max-width: 1130px) and (min-width: 1024px) {
    padding-left: 45px;
  }

  @media (max-width: 1023px) {
    padding: 75px 0 0;
  }
`;

const BannerCurrently = styled.a`
  font-size: 24px;
  margin-bottom: 50px;
  border-bottom: 1px solid var(--white);
  color: var(--white);
  display: inline-block;
  padding-bottom: 16px;
`;

const BannerHeader = styled.h1`
  font-size: 116px;
  margin-bottom: 50px;
  font-weight: 600;
  line-height: 120%;

  @media (max-width: 1535px) {
    font-size: 86px;
  }

  @media (max-width: 1279px) {
    font-size: 75px;
  }

  @media (max-width: 1023px) {
    font-size: 60px;
  }
`;

const BannerDesigners = styled.span`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--white);
  color: transparent;
  transition: all 0.5s;
  position: relative;
  display: block;

  &:before {
    content: attr(data-text);
    position: absolute;
    color: var(--base);
    width: 0px;
    overflow: hidden;
    animation: pulse-width 3s ease-in infinite;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--base);
  }

  @keyframes pulse-width {
    50% {
      width: 100%;
    }
  }
`;

const VideoArea = styled.div`
  gap: 24px;
  align-items: center;
  display: flex;
`;

const VideoImg = styled.img`
  animation: cir5 2s linear infinite;
  vertical-align: middle;

  @keyframes cir5 {
    50% {
      transform: rotate(10deg);
    }
  }
`;

const VideoBtn = styled.div`
  position: relative;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--white);
  font-size: 32px;

  &:before {
    position: absolute;
    border: 2px solid #fff;
    width: 100%;
    height: 100%;
    content: "";
    animation: scales 2s linear infinite;
    border-radius: 50%;
  }

  @keyframes scales {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.4);
    }

    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

const VideoProces = styled.span`
  font-size: 20px;
  color: var(--white);
  width: 67px;
`;

const BannerThumb = styled.div`
  position: absolute;
  left: calc(47% + 150px);
  bottom: 0;
  transition: all 0.3s linear;
  opacity: 1;
  transform: translateZ(0);

  @media (max-width: 1535px) {
    left: calc(39% + 150px);
  }

  @media (max-width: 1279px) {
    img {
      width: 90%;
    }
  }

  @media (max-width: 1023px) {
    img {
      width: 80%;
      height: 80%;
    }
  }
`;

const Container = () => {
  return (
    <BannerContainer className="container mx-auto px-4">
      <BannerRow>
        <BannerContent>
          <BannerCurrently>
            <span className="block">Currently available for freelance</span>
            <span className="flex gap-4 items-center">worldwide</span>
          </BannerCurrently>
          <BannerHeader>
            <span> Creative Visual</span>
            <BannerDesigners data-text="Designer">Designer</BannerDesigners>
          </BannerHeader>
          <VideoArea>
            <VideoImg src="images/arrow.png" />
            <VideoBtn>
              <FontAwesomeIcon icon={faPlay} />
            </VideoBtn>
            <VideoProces>Work Process</VideoProces>
          </VideoArea>
        </BannerContent>
        <BannerThumb>
          <img src="images/bannerman.png" alt="" />
        </BannerThumb>
      </BannerRow>
    </BannerContainer>
  );
};

export default Container;
