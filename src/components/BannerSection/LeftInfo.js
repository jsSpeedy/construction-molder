"use client";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: -75px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  gap: 220px;
`;

const InfoMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 200px;
  transform: rotate(90deg);
  justify-content: center;

  a {
    font-size: 20px;
    color: var(--white);

    img {
      transform: rotate(-90deg);
    }
  }
`;

const InfoScroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 110px;
  transform: rotate(90deg);
  margin-bottom: 200px;

  a {
    font-size: 18px;
    color: var(--pra);
    text-transform: uppercase;
  }

  .bar {
    transform: rotate(-90deg);
  }
`;

const LeftInfo = () => {
  return (
    <Container>
      <InfoMobile>
        <a href="#">
          <img src="images/infomobile.png" />
        </a>
        <a href="#">(+02)-574-328-301</a>
      </InfoMobile>
      <InfoScroll>
        <a href="#">scroll down</a>
        <a href="#" className="bar">
          <img src="images/arrow2.png" alt="" />
        </a>
      </InfoScroll>
    </Container>
  );
};

export default LeftInfo;
