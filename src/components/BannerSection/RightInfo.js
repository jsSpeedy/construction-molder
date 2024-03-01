import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  right: -75px;
  top: 55%;
  display: grid;
  position: absolute;
  transform: translateY(-50%);

  @media (max-width: 1535px) {
    right: -60px;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const Social = styled.a`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover svg {
    color: var(--base);
  }

  svg {
    color: var(--white);
    transition: all 0.4s;
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

  @media (max-width: 1535px) {
    gap: 50px;

    a {
      font-size: 15px;
    }

    img {
      width: 20px;
      object-fit: contain;
    }
  }
`;

const SocialMedia = [
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
];

const RightInfo = () => {
  return (
    <Container>
      <InfoScroll>
        <a href="#">Bizi Takip Edin</a>
        <a href="#" className="bar">
          <img src="images/arrow2.png" alt="" />
        </a>
      </InfoScroll>
      <ul className="grid justify-center gap-2">
        {SocialMedia.map((item, index) => (
          <li key={index}>
            <Social>
              <FontAwesomeIcon icon={item} />
            </Social>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default RightInfo;
