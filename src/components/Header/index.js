"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--cusborder);
  z-index: 9;
  position: relative;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  transition: all 0.9s;
  width: 100%;
  position: relative;
  padding: 20px 0;

  &::before {
    position: absolute;
    left: calc(15% - 40px);
    top: 0;
    width: 1px;
    height: 100%;
    content: "";
    background: var(--cusborder);
  }

  &::after {
    position: absolute;
    right: calc(25% - 60px);
    top: 0;
    width: 1px;
    height: 100%;
    content: "";
    background: var(--cusborder);
  }

  @media (max-width: 1535px) {
    &::before {
      left: calc(15% - 15px);
    }

    &::after {
      right: calc(25% - 15px);
    }
  }

  @media (max-width: 1279px) {
    &::before {
      left: calc(20% - 15px);
    }

    &::after {
      right: calc(25% - 15px);
    }
  }
`;

const HeaderLogo = styled.a`
  display: block;
  width: 150px;

  @media (max-width: 1023px) {
    width: 100px;
  }
`;

const HeaderLogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
`;

const HeaderMenuItems = styled.li`
  transition: all 0.4s;
  position: relative;
`;

const HeaderMenuItem = styled.a`
  color: var(--white);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;
  padding: 40px 29px;
  cursor: pointer;

  &:hover {
    color: var(--base);
  }

  @media (max-width: 1535px) {
    font-size: 16px;
    padding: 16px;
  }

  @media (max-width: 1279px) {
    font-size: 14px;
    padding: 16px 10px;
  }
`;

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

  @media (max-width: 1279px) {
    font-size: 14px;
    padding: 16px 10px;
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

  @media (max-width: 1279px) {
    width: 48px;
    height: 48px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container mx-auto px-4">
        <HeaderWrapper>
          <div>
            <HeaderLogo>
              <HeaderLogoImg src="/images/logo.svg" />
            </HeaderLogo>
          </div>

          <div className="flex items-center">
            <HeaderMenu>
              <HeaderMenuItems>
                <HeaderMenuItem>Anasayfa</HeaderMenuItem>
                <HeaderMenuItem>Hakkımızda</HeaderMenuItem>
                <HeaderMenuItem>Faaliyetlerimiz</HeaderMenuItem>
                <HeaderMenuItem>Hizmetlerimiz</HeaderMenuItem>
                <HeaderMenuItem>İletişim</HeaderMenuItem>
              </HeaderMenuItems>
            </HeaderMenu>
          </div>

          <HeaderMenuComponents>
            <HeaderButton>
              <span>Hadi Konuşalım</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </HeaderButton>
            <HeaderMenuButton>
              <FontAwesomeIcon icon={faBars} />
            </HeaderMenuButton>
          </HeaderMenuComponents>
        </HeaderWrapper>
      </div>
    </HeaderContainer>
  );
};

export default Header;
