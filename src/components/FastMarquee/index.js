"use client";
import Marquee from "react-fast-marquee";
import React from "react";
import styled from "styled-components";

const MarqueeWrapper = styled.div`
  background: var(--base);
  padding: 13px 0;
  font-size: 36px;
  height: 80px;
  font-weight: 600;
  color: var(--mtitle);
  text-transform: uppercase;
  letter-spacing: 7px;
`;

const MarqueeText = [
  "Okyanus İnşaat*",
  "Okyanus İnşaat*",
  "Okyanus İnşaat*",
  "Okyanus İnşaat*",
];

const FastMarquee = () => {
  return (
    <MarqueeWrapper>
      <Marquee>
        {MarqueeText.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Marquee>
    </MarqueeWrapper>
  );
};

export default FastMarquee;
