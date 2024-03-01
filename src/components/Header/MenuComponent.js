import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";

const HeaderMenuComponents = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HeaderButton = styled.a`
  padding: 19px 26px;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  display: inline-block;
  text-transform: capitalize;
  position: relative;
  background: var(--base);
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.5s;
  color: var(--subtitle);
  cursor: pointer;
  display: flex;
  gap: 0.5rem;

  &::before {
    position: absolute;
    content: "";
    bottom: 100%;
    background: #aad302;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.6s;
  }

  &:hover::before {
    bottom: 0;
  }

  span {
    position: relative;
    z-index: 1;
    transition: all 0.5s;
  }

  @media (max-width: 1535px) {
    font-size: 16px;
    padding: 16px;
  }

  @media (max-width: 1280px) {
    font-size: 14px;
    padding: 16px 10px;
  }

  @media (max-width: 1023px) {
    padding: 7px 11px;
  }
`;

const HeaderMenuButton = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  cursor: pointer;

  svg {
    font-size: 32px;
    color: var(--title);
  }

  @media (max-width: 1535px) {
    width: 51px;
    height: 51px;
  }

  @media (max-width: 1280px) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 1023px) {
    width: 39px;
    height: 39px;

    svg {
      font-size: 24px;
    }
  }
`;

const MenuComponent = () => {
  return (
    <HeaderMenuComponents>
      <HeaderButton>
        <span>Hadi Konuşalım</span>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </HeaderButton>
      <HamburgerMenu />
      <HeaderMenuButton>
        <FontAwesomeIcon icon={faBars} />
      </HeaderMenuButton>
    </HeaderMenuComponents>
  );
};

export default MenuComponent;
