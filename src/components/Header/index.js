"use client";
import styled from "styled-components";
import Menu from "./Menu";
import MenuComponent from "./MenuComponent";

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

  @media (max-width: 1280px) {
    &::before {
      left: calc(20% - 15px);
    }

    &::after {
      right: calc(25% - 15px);
    }
  }

  @media (max-width: 1024px) {
    &::before {
      display: none;
    }

    &::after {
      display: none;
    }
  }
`;

const HeaderLogo = styled.a`
  display: block;
  width: 150px;

  @media (max-width: 1024px) {
    width: 100px;
  }
`;

const HeaderLogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
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
            <Menu />
          </div>

          <MenuComponent />
        </HeaderWrapper>
      </div>
    </HeaderContainer>
  );
};

export default Header;
